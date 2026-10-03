import { ArrowRight } from "lucide-react";
import fatimaImage from "../assets/fatima.jpeg";

function Hero() {
  const whatsapp = "923131558954";
  const whatsappLink = `https://wa.me/${whatsapp}?text=Hi%20Fatima%2C%20I%27d%20like%20to%20work%20with%20you!`;

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="section-label">01 / INTRODUCTION</p>

        <h3 className="hero-name">Fatima Tu Zahra</h3>

        <h1>
          Social Media Manager
          <span>& Content Strategist</span>
        </h1>

        <p className="hero-description">
          I help brands build a stronger social media presence through strategic
          content, consistent management, and purposeful growth.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="button button-primary">
            View My Work <ArrowRight size={16} />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Let's Talk
          </a>
        </div>

        <p className="hero-handle">@fatiimamarketinghub</p>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <img src={fatimaImage} alt="Fatima Tu Zahra" />

          <div className="fz-circle">FZ</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
