export interface Episode {
  number: number;
  title: string;
  subtitle: string;
  instagramUrl: string;
  youtubeUrl?: string;
  roadmapUrl?: string;
  tags: string[];
}

export interface Series {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  tag: string;
  episodes: Episode[];
}

export interface Tool {
  id: string;
  icon: string;
  title: string;
  description: string;
  status: "coming-soon";
  accent: string;
  tags: string[];
}

export const series: Series[] = [
  {
    id: "careers-decoded",
    title: "Careers Decoded",
    tagline: "Breaking down the career moves, mindset shifts, and people rewriting the rules.",
    accent: "#9B6DFF",
    tag: "Strategy & Mindset",
    episodes: [
      {
        number: 1,
        title: "Career Zigzaggers Are Winning",
        subtitle: "Asha Sharma became CEO of Microsoft Xbox — and she's a career zigzagger. Here's what that means for you.",
        instagramUrl: "https://www.instagram.com/reel/DVCS6HKinQ8/",
        tags: ["Career Pivots", "Leadership", "Microsoft"],
      },
      {
        number: 2,
        title: "Do We Even Need Tech Degrees Anymore?",
        subtitle: "OpenAI's new CPO has an engineering degree. Coursera's co-founder studied English Literature. The data might surprise you.",
        instagramUrl: "https://www.instagram.com/reel/DVRW6KhCvYq/",
        tags: ["Education", "Tech Careers", "Non-linear Paths"],
      },
      {
        number: 3,
        title: "Making Yourself Impossible to Ignore",
        subtitle: "The YES/NO playbook of Anjali Sud — CEO of Tubi, former CEO of Vimeo. How she built a career that couldn't be overlooked.",
        instagramUrl: "https://www.instagram.com/reel/DVwBfMRiivg/",
        tags: ["Personal Brand", "Leadership", "CEO Playbook"],
      },
    ],
  },
  {
    id: "no-code-high-income",
    title: "No-Code, High-Income",
    tagline: "Non-technical roles in tech that pay as well as engineering. Real jobs, real numbers, real roadmaps.",
    accent: "#F5C842",
    tag: "Career Roadmaps",
    episodes: [
      {
        number: 1,
        title: "Technical Recruiter",
        subtitle: "₹25L+ in India · €80K+ in Europe · $100K+ in USA. The full roadmap to breaking in — skills, salary, and how to get there.",
        instagramUrl: "https://www.instagram.com/reel/DVenYgMiuGm/",
        roadmapUrl: "https://nidhiabroad-tech-recruiter.netlify.app/",
        tags: ["Recruiting", "HR Tech", "High Salary"],
      },
    ],
  },
];

export const tools: Tool[] = [
  {
    id: "linkedin-playbook",
    icon: "💼",
    title: "LinkedIn Playbook",
    description: "A step-by-step guide to turning your LinkedIn profile into an inbound magnet — for recruiters, opportunities, and the right audience.",
    status: "coming-soon",
    accent: "#4ECDC4",
    tags: ["LinkedIn", "Personal Brand", "Guide"],
  },
  {
    id: "job-tracker",
    icon: "📋",
    title: "Job Application Tracker",
    description: "A Notion template to track every application, follow-up, and contact. Never lose track of an opportunity again.",
    status: "coming-soon",
    accent: "#F5C842",
    tags: ["Notion Template", "Job Search", "Organisation"],
  },
  {
    id: "career-story",
    icon: "🎙️",
    title: "Career Story Builder",
    description: "A framework for turning your messy career history into a compelling narrative — for interviews, LinkedIn, and your own clarity.",
    status: "coming-soon",
    accent: "#FF6B9D",
    tags: ["Interviews", "Storytelling", "Framework"],
  },
  {
    id: "europe-market",
    icon: "🌍",
    title: "Europe Salary & Market Guide",
    description: "Country-by-country breakdown of HR tech salaries, in-demand roles, and what it actually takes to land a job in Europe.",
    status: "coming-soon",
    accent: "#9B6DFF",
    tags: ["Europe", "Salary", "Market Intel"],
  },
  {
    id: "resume-kit",
    icon: "📄",
    title: "Resume Review Checklist",
    description: "The exact checklist used to review resumes — ATS-proof formatting, power verbs, impact framing, and the 10 mistakes to eliminate.",
    status: "coming-soon",
    accent: "#4ECDC4",
    tags: ["Resume", "ATS", "Checklist"],
  },
];
