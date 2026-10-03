// src/components/About.jsx

function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="section-label">02 / THE PERSON BEHIND THE STRATEGY</p>

        <h2>
          Behind every strong brand is
          <span>a strategy that doesn't sound like one.</span>
        </h2>
      </div>

      <div className="about-content">
        <p className="about-intro">Hi, I'm Fatima.</p>

        <p>
          Somewhere between <em>"let me just post something"</em> and{" "}
          <em>"why isn't this working?"</em> — brands lose their voice online. I
          help them find it again.
        </p>

        <p>
          I blend strategy, storytelling, and a little bit of psychology to
          create content that doesn't just fill a feed — it actually moves
          people. No fluff, no guessing. Just work that earns attention.
        </p>

        <div className="about-tags">
          <span>CONTENT</span>
          <span>STRATEGY</span>
          <span>GROWTH</span>
        </div>
      </div>
    </section>
  );
}

export default About;
