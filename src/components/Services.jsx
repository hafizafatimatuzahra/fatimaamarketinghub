import { CalendarDays, Lightbulb, RefreshCw } from "lucide-react";

const services = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Social Media Management",
    description:
      "Keeping your social presence consistent, organized, and actively managed from planning to reporting.",
    items: [
      "Monthly Content Planning & Content Calendar",
      "Content Scheduling & Publishing",
      "Captions + SEO Keywords",
      "Community Management",
      "Performance Tracking & Monthly Reporting",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Content Strategy",
    description:
      "Building a clear content direction based on your brand, audience, goals, and social media presence.",
    items: [
      "Social Media Audit",
      "Content Pillars",
      "Content Ideas",
      "Content Calendar & Format Strategy",
      "Strategic Hooks & CTAs",
    ],
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Content Repurposing & Cross-Platform Adaptation",
    description:
      "Turning one strong content idea into platform-specific content without simply copying and pasting.",
    items: [
      "Platform-Specific Content Adaptation",
      "Content Repurposing",
      "Format Adaptation",
      "Platform-Specific Captions & Keywords",
      "Hooks & CTAs Adapted for Each Platform",
    ],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <p className="section-label">03 / SERVICES</p>

          <h2>
            What I bring
            <span>to the table.</span>
          </h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <Icon size={22} strokeWidth={1.5} />
              </div>

              <h3>{service.title}</h3>

              <p className="service-description">{service.description}</p>

              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
