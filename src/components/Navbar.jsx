// src/components/Navbar.jsx

function Navbar() {
  const whatsapp = "923131558954"; // 0313 1558954 (country code, no 0, no spaces)

  const whatsappLink = `https://wa.me/${whatsapp}?text=Hi%20Fatima%2C%20I%27d%20like%20to%20work%20with%20you!`;

  return (
    <nav className="navbar">
      <a href="#top" className="brand">
        <span className="brand-mark">FZ</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Let's Talk ↗
      </a>
    </nav>
  );
}

export default Navbar;
