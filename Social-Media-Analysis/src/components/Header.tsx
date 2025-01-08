const Header = () => (
    <header className="flex items-center justify-between py-6 px-8">
      <h1 className="text-white text-2xl font-bold">SocialStats</h1>
      <nav className="flex items-center gap-8">
        <a
          href="#features"
          className="text-white hover:text-purple-400 transition"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-white hover:text-purple-400 transition"
        >
          Pricing
        </a>
        <a
          href="#about"
          className="text-white hover:text-purple-400 transition"
        >
          About
        </a>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
  export default Header;