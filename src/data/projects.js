import mediaCalendar from "../assets/media-society/calendar.jpeg";
import mediaInstagramFeed from "../assets/media-society/instagram-feed.jpeg";
import mediaTiktokFeed from "../assets/media-society/tiktok-feed.jpeg";
import mediaInstagramBefore from "../assets/media-society/instagram-before.jpeg";
import mediaInstagramAfter from "../assets/media-society/instagram-after.jpeg";
import mediaTiktokBefore from "../assets/media-society/tiktok-before.jpeg";
import mediaTiktokAfter from "../assets/media-society/tiktok-after.jpeg";

const projects = [
  // =========================
  // PROJECT 1: Media Society
  // =========================
  {
    number: "01",
    category: "CLIENT WORK",
    title: "Media Society",

    description:
      "Social media management focused on content planning, publishing, platform management, and improving the overall social media presence.",

    tags: [
      "Content Planning",
      "Instagram",
      "TikTok",
      "Social Media Management",
    ],

    images: [
      mediaCalendar,
      mediaInstagramFeed,
      mediaTiktokFeed,
      mediaInstagramBefore,
      mediaInstagramAfter,
      mediaTiktokBefore,
      mediaTiktokAfter,
    ],
  },

  // =========================
  // PROJECT 2: Threads
  // =========================
  {
    number: "02",
    category: "CLIENT WORK",
    title: "Threads",

    description:
      "Built and managed the Threads account from 0 to 1,908 followers, generating 137K views in 35 days.",

    tags: ["Threads", "Content Strategy", "Account Growth"],

    images: [],

    results: [
      {
        value: "0 → 1,908",
        label: "Followers",
      },
      {
        value: "137K",
        label: "Views",
      },
      {
        value: "35 Days",
        label: "Growth Period",
      },
    ],
  },

  // =========================
  // PROJECT 3: Skincare Mock Study
  // =========================
  {
    number: "03",
    category: "MOCK CASE STUDY",
    title: "Glow Skincare",
    description:
      "A 90-day Instagram growth strategy for a skincare brand with 1,800 followers, focused on building trust, community, and driving conversions through educational content.",

    tags: ["Instagram Strategy", "Content Funnel", "Community Growth"],

    strategy: {
      title: "The Strategy",
      intro:
        "The account needed to stop behaving like a product catalogue and start behaving like a skincare resource. The goal was to build a clear journey from discovery to trust and ultimately to purchase.",
      funnel: {
        tofu: {
          title: "TOFU — Awareness",
          goal: "Reach + Discovery",
          content: [
            "Skincare mistakes & myths",
            "Quick tips & problem-based Reels",
            "Relatable skincare content",
            "Beginner skincare education",
          ],
        },
        mofu: {
          title: "MOFU — Consideration",
          goal: "Trust + Consideration",
          content: [
            "Ingredient education",
            "Product comparisons & FAQs",
            "How-to-use content",
            "Routine building & testimonials",
          ],
        },
        bofu: {
          title: "BOFU — Conversion",
          goal: "DMs + Clicks + Purchases",
          content: [
            "Product benefits & demonstrations",
            "Customer reviews",
            "Offers & bundles",
            "Strong product CTAs",
          ],
        },
      },
      pillars: [
        {
          title: "Skincare Education",
          description:
            "Build authority and attract new audiences through tips, myths, and beginner routines.",
        },
        {
          title: "Product Education",
          description:
            "Make products easier to understand with ingredient breakdowns, usage guides, and comparisons.",
        },
        {
          title: "Problem → Solution",
          description:
            "Connect customer pain points directly to the brand's products with relatable content.",
        },
        {
          title: "Community & Social Proof",
          description:
            "Build trust through customer reviews, UGC, polls, and behind-the-scenes content.",
        },
        {
          title: "Brand & BTS",
          description:
            "Humanize the brand by showing the team, packing orders, and the story behind the products.",
        },
      ],
      contentMix: {
        total: "16 Feed Posts / Month",
        breakdown: [
          { type: "Educational Reels", volume: 5 },
          { type: "Product Reels", volume: 3 },
          { type: "Educational Carousels", volume: 3 },
          { type: "Problem/Solution Posts", volume: 2 },
          { type: "Social Proof", volume: 2 },
          { type: "Brand/BTS", volume: 1 },
        ],
      },
      kpis: [
        { goal: "Brand Awareness", kpi: "Reach" },
        { goal: "Content Discovery", kpi: "Non-follower Reach" },
        { goal: "Engagement", kpi: "Engagement Rate" },
        { goal: "Educational Value", kpi: "Saves" },
        { goal: "Shareability", kpi: "Shares" },
        { goal: "Community", kpi: "Comments + Story Replies" },
        { goal: "Consideration", kpi: "Profile Visits" },
        { goal: "Lead Generation", kpi: "DMs" },
        { goal: "Conversion", kpi: "Product Enquiries / Sales" },
      ],
      roadmap: [
        {
          month: "Month 1",
          title: "Build the Foundation",
          focus:
            "Brand consistency, content pillars, educational content, Reels, and audience research.",
        },
        {
          month: "Month 2",
          title: "Build Trust",
          focus:
            "UGC, testimonials, product education, creator collaborations, and community content.",
        },
        {
          month: "Month 3",
          title: "Convert",
          focus:
            "Product-led content, social proof, DM campaigns, and conversion CTAs.",
        },
      ],
    },

    images: [],
    results: [],
  },
];

export default projects;
