const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I learn about your brand, audience, goals, competitors, and current social media presence.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "I build a clear content direction with content pillars, formats, ideas, hooks, and CTAs.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "I turn the strategy into purposeful content, captions, keywords, and platform-specific ideas.",
  },
  {
    number: "04",
    title: "Manage",
    description:
      "I keep your social presence consistent through scheduling, publishing, and community management.",
  },
  {
    number: "05",
    title: "Analyze",
    description:
      "I track performance, identify what is working, and use the insights to improve future content.",
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-heading">
        <p className="section-label">04 / PROCESS</p>

        <h2>
          From idea
          <span>to execution.</span>
        </h2>

        <p>
          A simple, structured process designed to keep your social media moving
          with purpose.
        </p>
      </div>

      <div className="process-list">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
