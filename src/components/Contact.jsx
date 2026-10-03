// src/components/Contact.jsx

function Contact() {
  // ============ YOUR DETAILS ============
  const email = "fatimaamarketinghub@gmail.com";
  const whatsapp = "923131558954"; // 0313 1558954 → country code + number (no 0, no spaces)
  const instagram = "https://www.instagram.com/fatiimamarketinghub";
  const linkedin = "https://www.linkedin.com/in/fatima-tu-zahra-26427a377/";

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-label">07 / CONTACT</p>

        <h2>
          Let's build
          <span>something together.</span>
        </h2>

        <p className="contact-intro">
          Have a brand that needs a stronger social media presence? I'd love to
          hear about it. Reach out through email, WhatsApp, or any of the
          platforms below.
        </p>

        <a
          href={`https://wa.me/${whatsapp}?text=Hi%20Fatima%2C%20I%27d%20like%20to%20work%20with%20you!`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-cta"
        >
          Let's Talk →
        </a>
      </div>

      <div className="contact-links">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">WHATSAPP</span>
          <span className="contact-link-value">Message me ↗</span>
        </a>

        {/* Instagram */}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">INSTAGRAM</span>
          <span className="contact-link-value">Follow me ↗</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">LINKEDIN</span>
          <span className="contact-link-value">Connect ↗</span>
        </a>

        {/* Email */}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">EMAIL</span>
          <span className="contact-link-value">Write to me ↗</span>
        </a>
      </div>
      <div className="contact-end">
        <span></span>
        <p>
          © {new Date().getFullYear()} FATIMA TU ZAHRA — ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  );
}

export default Contact;
