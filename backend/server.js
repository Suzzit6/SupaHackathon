require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const axios = require("axios");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  console.log("WebSocket connection established");
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === "requestId") {
    const requestId = data.requestId;
    console.log("Received requestId:", requestId);
  }
};

app.use(cors());
app.use(express.json());

const connections = new Map();

wss.on("connection", (ws) => {
  const requestId = Math.random().toString(36).substring(7);
  connections.set(requestId, ws);

  ws.on("close", () => {
    connections.delete(requestId);
  });

  ws.send(JSON.stringify({ type: "requestId", requestId }));
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/chat", async (req, res) => {
  const { input_value, requestId } = req.body;
  const ws = connections.get(requestId);

  if (!ws) {
    return res.status(400).json({ error: "WebSocket connection not found" });
  }

  try {
    console.log("Request:", input_value);
    const response = await axios.post(
      "https://api.langflow.astra.datastax.com/lf/542dfbea-bb87-4472-a0c0-2ac8768b70fa/api/v1/run/543b5ce5-3375-4386-bd89-49ab0f2882dd?stream=false",
      {
        input_value,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ChatInput-kf57n": {},
          "ParseData-fKkbe": {},
          "Prompt-gbTSt": {},
          "ChatOutput-TtdrM": {},
          "AstraDB-O2OE1": {},
          "CohereEmbeddings-stej2": {},
          "GoogleGenerativeAIModel-DhhtR": {},
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.APPLICATION_TOKEN}`,
        },
      }
    );

    const message = response.data.outputs[0].outputs[0].results.message.text;
    console.log("Response:", message);

    ws.send(JSON.stringify({ type: "response", message }));
    return res.json({ message });
  } catch (error) {
    ws.send(JSON.stringify({ type: "error", message: error.message }));
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
