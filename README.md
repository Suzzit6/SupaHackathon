# Social Media Performance Analysis

This repository contains the Social Media Performance Analysis project, created as part of our hackathon initiative. The project demonstrates the power of generative AI, advanced databases, and modern web frameworks to analyze social media data and extract meaningful insights.

## Overview

The project focuses on analyzing social media performance by generating mock data, storing it in a database, and performing advanced analytics using AI tools. The insights derived can help content creators and brands understand their audience better and optimize their strategies.

![Landing Page](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444712/Screenshot_2025-01-09_230325_tz6ewa.png)

*Landing page of the website showcasing the project interface.*

---

## Key Features

- **Mock Social Media Data Generation**: Leveraged various LLM (Large Language Model) generative AI models to create realistic mock social media data.
- **Database Integration**: Stored generated data in **Astra DB**, a highly scalable and efficient database solution.
- **AI-Powered Analysis**: Used **LangFlow** and **Cohere API** to perform detailed analysis, such as discovering that "Reels have 20% higher reach overall."
- **Web Integration**: Developed an interactive website using **Next.js** and **shadcn**, integrating the analysis results via the LangFlow API.

![Main Analysis](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444256/Screenshot_2025-01-09_225911_dgvjma.png)

*Main analysis result showing a detailed breakdown of key metrics.*

---

## Tech Stack

- **LangFlow**: For designing and deploying AI workflows to analyze the social media data.
- **Cohere API**: For leveraging AI-driven text analysis capabilities.
- **Astra DB**: A scalable cloud database for storing mock social media data.
- **Next.js**: A React-based framework for building a fast and SEO-friendly website.
- **shadcn**: For building a modern and accessible UI.

---

## Project Workflow

1. **Data Generation**:
   - Mock social media data (posts, reels, likes, comments, shares) was generated using LLMs.
   - Data was enriched with realistic patterns and stored in Astra DB.

2. **Data Analysis**:
   - LangFlow was used to create an AI workflow, leveraging the Cohere API to analyze trends and performance metrics.
   - Example Insight: "Reels have 20% higher reach compared to other post types."

   ![Another Analysis](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444711/Screenshot_2025-01-09_230250_perzeq.png)

   *Detailed analysis of social media trends.*

3. **Web Integration**:
   - The LangFlow API was integrated into a website built with Next.js and styled using shadcn.
   - The website provides users with interactive dashboards and visualizations of the analysis results.

---

## AI Chatbot

Our AI chatbot, built using **LangFlow** and **Cohere**, helps users interpret the analysis results and provides actionable insights.

![Chatbot Example](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444612/Screenshot_2025-01-09_230218_buvxfw.png)

*Chatbot interacting with a user to explain analysis details.*

![Chatbot Example 2](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444612/Screenshot_2025-01-09_230231_xr1ew4.png)

---

## Installation and Setup

### Prerequisites

- Node.js
- Astra DB account
- Cohere API key
- LangFlow setup

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/dmelloaries/SupaHackathon.git
   cd SupaHackathon
   ```
2. Install dependencies for the frontend:
   ```bash
   cd Social-Media-Analysis
   npm install
   ```
3. Set up Astra DB and populate it with mock data:
   - Follow the [Astra DB documentation](https://www.datastax.com/astra) to create a database.
   - Use the provided scripts in `data-generation/` to populate the database.
4. Configure LangFlow:
   - Import the provided LangFlow workflow from `langflow/` into your LangFlow environment.
5. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary keys for Astra DB, Cohere API, and LangFlow API.
6. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

- Visit the website to explore the analysis of social media performance: [Live Demo](https://supa-hackathon.vercel.app/).
- Interact with the dashboard to view insights and trends.

---

## Future Enhancements

- Add support for real-time social media data integration.
- Enhance analysis with more advanced metrics and visualization.
- Integrate additional LLMs and APIs for broader insights.

---

## Contributors

- Agneya Pathare  
- Sujit Mishra  
- Aries Dmello  
- Moinuddin Kazi  

![Team Members](https://res.cloudinary.com/ds2u9hkbv/image/upload/v1736444937/Screenshot_2025-01-09_230339_d6etsy.png)

*Meet our team of contributors.*

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- Hackathon organizers and mentors  
- Open-source contributors to LangFlow, Astra DB, and Cohere API  
