// src/components/Testimonials.jsx

import testimonialA from "../assets/testimonials/client-a.jpeg";
import testimonialB from "../assets/testimonials/client-b.png";
import testimonialC from "../assets/testimonials/client-c.jpeg";

const testimonials = [
  { image: testimonialA, alt: "Client A testimonial" },
  { image: testimonialB, alt: "Client B testimonial" },
  { image: testimonialC, alt: "Client C testimonial" },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <div>
          <p className="section-label">06 / TESTIMONIALS</p>

          <h2>
            Real words,
            <span>real results.</span>
          </h2>
        </div>

        <p className="testimonials-intro">
          Feedback from clients I've worked with across social media management,
          content strategy, and account growth.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-image" key={index}>
            <img src={testimonial.image} alt={testimonial.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
