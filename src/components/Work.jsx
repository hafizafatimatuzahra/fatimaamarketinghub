import projects from "../data/projects";

import threadsBefore from "../assets/threads/threads-before.png";
import threadsAfter from "../assets/threads/threads-after.png";

function Work() {
  const mediaSociety = projects[0];
  const mockStudy = projects[2]; // Skincare Mock Study

  const calendarImage = mediaSociety.images[0];
  const instagramImage = mediaSociety.images[1];
  const tiktokImage = mediaSociety.images[2];

  const instagramBefore = mediaSociety.images[3];
  const instagramAfter = mediaSociety.images[4];

  const tiktokBefore = mediaSociety.images[5];
  const tiktokAfter = mediaSociety.images[6];

  return (
    <section className="work" id="work">
      {/* =========================
          HEADER
      ========================= */}

      <div className="work-header">
        <div>
          <p className="section-label">05 / SELECTED WORK</p>

          <h2>
            Work that
            <span>speaks for itself.</span>
          </h2>
        </div>

        <p className="work-intro">
          A look at selected client work, from content planning and social media
          management to platform growth and performance tracking.
        </p>
      </div>

      {/* =========================
          CLIENT BOXES
      ========================= */}

      <div className="client-grid">
        {/* CLIENT A */}

        <article className="client-box">
          <a
            href="#client-a-case-study"
            className="client-arrow"
            aria-label="View Client A case study"
          >
            →
          </a>

          <h3>Client A</h3>

          <p className="client-description">
            Media & Mass Communication Society (MMCS) — managed the society's
            social media presence through strategic content planning, creation,
            publishing, and community management.
          </p>

          <div className="client-details">
            <div className="client-detail">
              <span>PLATFORMS</span>
              <p>Instagram</p>
              <p>TikTok</p>
              <p>Email</p>
              <p>WhatsApp Channel</p>
            </div>

            <div className="client-detail">
              <span>MY ROLE</span>
              <p>Content Planning</p>
              <p>Content Strategy</p>
              <p>Content Creation</p>
              <p>Scheduling & Posting</p>
              <p>Community Management</p>
              <p>Analytics</p>
            </div>
          </div>

          <div className="client-achievements">
            <span>ADDITIONAL WORK</span>

            <p>Coverage of 6 events on social media.</p>

            <p>3 event collaborations through cold DMs.</p>
          </div>
        </article>

        {/* CLIENT B */}

        <article className="client-box">
          <a
            href="#client-b-case-study"
            className="client-arrow"
            aria-label="View Client B case study"
          >
            →
          </a>

          <h3>Client B</h3>

          <p className="client-description">
            ADHD Threads Page — handled the page with a focus on consistent
            content, platform-specific strategy, audience growth, and
            performance tracking.
          </p>

          <div className="client-details">
            <div className="client-detail">
              <span>PLATFORM</span>
              <p>Threads</p>
            </div>

            <div className="client-detail">
              <span>MY ROLE</span>
              <p>Content Planning</p>
              <p>Content Strategy</p>
              <p>Content Creation</p>
              <p>Publishing</p>
              <p>Community Management</p>
              <p>Analytics</p>
            </div>
          </div>

          <div className="threads-results">
            <div>
              <strong>0 → 1,908</strong>
              <span>FOLLOWERS</span>
            </div>

            <div>
              <strong>137K</strong>
              <span>VIEWS</span>
            </div>

            <div>
              <strong>35 Days</strong>
              <span>GROWTH PERIOD</span>
            </div>
          </div>
        </article>

        {/* MOCK STUDY */}

        <article className="client-box">
          <a
            href="#mock-case-study"
            className="client-arrow"
            aria-label="View Mock Case Study"
          >
            →
          </a>

          <h3>Mock Study</h3>

          <p className="client-description">
            A 90-day Instagram growth strategy for a skincare brand with 1,800
            followers, focused on building trust, community, and driving
            conversions through educational content.
          </p>
          <div className="client-details">
            <div className="client-detail">
              <span>PLATFORM</span>
              <p>Instagram</p>
            </div>

            <div className="client-detail">
              <span>MY ROLE</span>
              <p>Audit</p>
              <p>Strategy</p>
              <p>Content Planning</p>
              <p>KPI Framework</p>
            </div>
          </div>

          <div className="client-achievements">
            <span>DELIVERABLES</span>
            <p>3-Month Strategic Roadmap</p>
          </div>
        </article>
      </div>

      {/* ==================================================
          CLIENT A CASE STUDY
      ================================================== */}

      <section className="case-study" id="client-a-case-study">
        <div className="case-study-header">
          <div>
            <h2>
              Client A<span>Case Study.</span>
            </h2>
          </div>

          <div className="case-study-intro">
            <p>
              Managed the social media presence of the Media & Mass
              Communication Society through content planning, creation,
              publishing, community management, and performance tracking.
            </p>
          </div>
        </div>

        {/* ROLE */}

        <div className="case-study-role">
          <div>
            <span>ROLE</span>
            <p>Social Media Management</p>
          </div>

          <div>
            <span>PLATFORMS</span>
            <p>Instagram & TikTok</p>
          </div>

          <div>
            <span>WORK</span>
            <p>Content Planning & Management</p>
          </div>
        </div>

        {/* CONTENT CALENDAR */}

        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>01</span>

            <h3>
              Content
              <span>Planning.</span>
            </h3>
          </div>

          <p>
            I created structured content calendars to organize topics, formats,
            goals, hooks, and publishing dates. This helped keep the society's
            social media content consistent while allowing content to be planned
            around upcoming events and activities.
          </p>
        </div>

        <div className="case-study-gallery single-case-image">
          <div className="case-image case-calendar">
            <img src={calendarImage} alt="MMCS content calendar" />
          </div>
        </div>

        {/* SOCIAL MEDIA PRESENCE */}

        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>02</span>

            <h3>
              Social Media
              <span>Presence.</span>
            </h3>
          </div>

          <p>
            I managed and created content for the society's Instagram and TikTok
            presence, focusing on consistent publishing, relevant content
            formats, and maintaining a recognizable social media presence.
          </p>
        </div>

        <div className="case-social-gallery">
          <div className="case-social-image">
            <span>INSTAGRAM</span>

            <img
              src={instagramImage}
              alt="MMCS Instagram social media presence"
            />
          </div>

          <div className="case-social-image">
            <span>TIKTOK</span>

            <img src={tiktokImage} alt="MMCS TikTok social media presence" />
          </div>
        </div>

        {/* ANALYTICS */}

        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>03</span>

            <h3>
              Analytics &<span>Performance.</span>
            </h3>
          </div>

          <p>
            I used before-and-after analytics to review the performance of the
            social media accounts and identify changes in their overall presence
            and content performance.
          </p>
        </div>

        {/* INSTAGRAM BEFORE AFTER */}

        <div className="case-platform">
          <div className="case-platform-title">
            <span>01</span>
            <h4>Instagram</h4>
          </div>

          <div className="case-before-after">
            <div>
              <span>BEFORE</span>

              <img src={instagramBefore} alt="MMCS Instagram before" />
            </div>

            <div>
              <span>AFTER</span>

              <img src={instagramAfter} alt="MMCS Instagram after" />
            </div>
          </div>
        </div>

        {/* TIKTOK BEFORE AFTER */}

        <div className="case-platform">
          <div className="case-platform-title">
            <span>02</span>
            <h4>TikTok</h4>
          </div>

          <div className="case-before-after">
            <div>
              <span>BEFORE</span>

              <img src={tiktokBefore} alt="MMCS TikTok before" />
            </div>

            <div>
              <span>AFTER</span>

              <img src={tiktokAfter} alt="MMCS TikTok after" />
            </div>
          </div>
        </div>

        <div className="case-study-end">
          <span></span>
          <p>CLIENT A / MEDIA & MASS COMMUNICATION SOCIETY</p>
        </div>
      </section>

      {/* ==================================================
          CLIENT B CASE STUDY
      ================================================== */}

      <section
        className="case-study client-b-case-study"
        id="client-b-case-study"
      >
        <div className="case-study-header">
          <div>
            <h2>
              Client B<span>Case Study.</span>
            </h2>
          </div>

          <div className="case-study-intro">
            <p>
              Handled the ADHD Threads page with a focus on consistent content,
              platform-specific strategy, audience growth, and performance
              tracking.
            </p>
          </div>
        </div>
        {/* RESULTS */}

        <div className="case-study-role">
          <div>
            <span>STARTING POINT</span>
            <p>0 Followers</p>
          </div>

          <div>
            <span>RESULT</span>
            <p>1,908 Followers</p>
          </div>

          <div>
            <span>VIEWS</span>
            <p>137K in 35 Days</p>
          </div>
        </div>

        {/* AI + CONTENT STRATEGY */}

        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>01</span>

            <h3>
              Content Strategy
              <span>with AI.</span>
            </h3>
          </div>

          <p>
            I integrated AI into my content strategy workflow to make the
            planning process more efficient while keeping the final content
            aligned with the page's audience and communication style.
            <br />
            <br />I used AI as a strategic support tool for content ideation,
            topic exploration, hook development, content angles, and refining
            ideas before turning them into platform-specific Threads content.
            The final strategy and content decisions were reviewed and adapted
            according to the page's goals and audience.
          </p>
        </div>

        {/* BEFORE / AFTER */}

        <div className="case-platform threads-platform">
          <div className="case-platform-title">
            <span>02</span>

            <h4>Account Performance</h4>
          </div>

          <div className="case-before-after">
            <div>
              <span>BEFORE</span>

              <img src={threadsBefore} alt="Threads page before management" />
            </div>

            <div>
              <span>AFTER</span>

              <img src={threadsAfter} alt="Threads page after management" />
            </div>
          </div>
        </div>

        <div className="case-study-end">
          <span></span>
          <p>CLIENT B / ADHD THREADS PAGE</p>
        </div>
      </section>

      {/* ==================================================
          MOCK CASE STUDY / GLOW SKINCARE
      ================================================== */}

      <section className="case-study mock-case-study" id="mock-case-study">
        <div className="case-study-header">
          <div>
            <h2>
              Mock
              <span>Case Study.</span>
            </h2>
          </div>

          <div className="case-study-intro">
            <p>{mockStudy.description}</p>
          </div>
        </div>
        {/* STRATEGY INTRO */}
        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>01</span>

            <h3>
              The
              <span>Approach.</span>
            </h3>
          </div>

          <p>{mockStudy.strategy.intro}</p>
        </div>

        {/* FUNNEL */}
        <div className="strategy-funnel">
          <div className="funnel-step">
            <div className="funnel-header">
              <span className="funnel-tag">TOFU</span>
              <h4>{mockStudy.strategy.funnel.tofu.title}</h4>
            </div>
            <p className="funnel-goal">
              Goal: {mockStudy.strategy.funnel.tofu.goal}
            </p>
            <ul>
              {mockStudy.strategy.funnel.tofu.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="funnel-step">
            <div className="funnel-header">
              <span className="funnel-tag">MOFU</span>
              <h4>{mockStudy.strategy.funnel.mofu.title}</h4>
            </div>
            <p className="funnel-goal">
              Goal: {mockStudy.strategy.funnel.mofu.goal}
            </p>
            <ul>
              {mockStudy.strategy.funnel.mofu.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="funnel-step">
            <div className="funnel-header">
              <span className="funnel-tag">BOFU</span>
              <h4>{mockStudy.strategy.funnel.bofu.title}</h4>
            </div>
            <p className="funnel-goal">
              Goal: {mockStudy.strategy.funnel.bofu.goal}
            </p>
            <ul>
              {mockStudy.strategy.funnel.bofu.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTENT PILLARS */}
        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>02</span>

            <h3>
              Content
              <span>Pillars.</span>
            </h3>
          </div>

          <p>
            Five recurring themes were established to ensure every piece of
            content serves a purpose and aligns with the brand's goals.
          </p>
        </div>

        <div className="strategy-pillars-grid">
          {mockStudy.strategy.pillars.map((pillar, index) => (
            <div className="strategy-pillar-card" key={index}>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* CONTENT MIX & KPIs */}
        <div className="strategy-bottom-grid">
          <div className="strategy-content-mix">
            <h3>Content Mix</h3>
            <p className="mix-total">{mockStudy.strategy.contentMix.total}</p>
            <ul>
              {mockStudy.strategy.contentMix.breakdown.map((item, i) => (
                <li key={i}>
                  <span>{item.type}</span>
                  <strong>{item.volume}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="strategy-kpis">
            <h3>KPIs</h3>
            <ul>
              {mockStudy.strategy.kpis.map((item, i) => (
                <li key={i}>
                  <span>{item.goal}</span>
                  <strong>{item.kpi}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROADMAP */}
        <div className="case-study-section">
          <div className="case-study-section-heading">
            <span>03</span>

            <h3>
              90-Day
              <span>Roadmap.</span>
            </h3>
          </div>

          <p>
            A phased approach to move from awareness to conversion over three
            months.
          </p>
        </div>

        <div className="strategy-roadmap">
          {mockStudy.strategy.roadmap.map((phase, index) => (
            <div className="roadmap-step" key={index}>
              <span className="roadmap-month">{phase.month}</span>
              <h4>{phase.title}</h4>
              <p>{phase.focus}</p>
            </div>
          ))}
        </div>

        <div className="case-study-end">
          <span></span>
          <p>MOCK CASE STUDY / GLOW SKINCARE STRATEGY</p>
        </div>
      </section>

      {/* END */}

      <div className="work-end">
        <span></span>
        <p>MORE CLIENT WORK COMING SOON.</p>
      </div>
    </section>
  );
}

export default Work;
