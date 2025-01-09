"use client";

export const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SocialStats</div>
        <nav className="space-x-6">
          <button
            onClick={() => handleScroll("features")} // Scroll to features section
            className="text-white hover:text-blue-500 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll("how-it-works")} // Scroll to how-it-works section
            className="text-white hover:text-blue-500 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => handleScroll("metrics")} // Scroll to metrics section
            className="text-white hover:text-blue-500 transition-colors"
          >
            Metrics
          </button>
          <button
            onClick={() => handleScroll("team")} // Scroll to team section
            className="text-white hover:text-blue-500 transition-colors"
          >
            Team
          </button>
          <button
            onClick={() => handleScroll("faq")} // Scroll to FAQ section
            className="text-white hover:text-blue-500 transition-colors"
          >
            FAQ
          </button>
        </nav>
      </div>
    </header>
  );
};