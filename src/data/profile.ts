import { publicAsset } from '../utils/publicAsset';

export const profile = {
  name: 'Joaquin Elizalde',
  email: 'joaquin.n.elizalde@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joaquin-elizalde/',
  phone: '(435) 962-2882',
  phoneHref: 'tel:+14359622882',
  location: 'Utah',
  resume: publicAsset('/resume.pdf'),
  introduction: [
    "I'm Joaquin Elizalde, an Information Systems student at BYU who loves solving problems and building new things. I'm most excited by projects where I can experiment, think creatively, and care about the experience of the person using what I build.",
    "I'm looking for work where I can grow as a developer or designer, building interesting products with people I enjoy being around.",
  ],
  whatIDo: [
    "I love both designing and building. I've used Python, C#, JavaScript, React, and Godot to build web apps, automate processes, and create my own projects. On the design side, I enjoy understanding how people use a product and making confusing or frustrating experiences better.",
    "My favorite part is moving between the two: taking a rough idea, thinking through how someone will interact with it, and figuring out how to build it. I enjoy that mix of creative and technical problem solving.",
  ],
  outsideOfWork: [
    "I'm usually climbing, hiking, camping, playing guitar, or making something with my wife. I've played guitar since I was a kid and love writing music. Lately, I've been bringing that into game development by writing the soundtrack for my own game.",
    "Whether it's software, music, a game, or a craft, I love making things. A lot of what I enjoy outside of work finds its way back into what I build.",
  ],
  contactIntro: "I'm always excited to talk about things I've worked on, topics I'm passionate about, or even ideas for cool new projects to work on! If you think I'd be a good fit for your team, or even just want to chat about my work or interests, please don't hesitate to connect with me!",
  portrait: { src: '/images/headshot.png', alt: 'Portrait of Joaquin Elizalde', caption: '' },
  skills: ['React / TypeScript', 'ASP.NET Core', 'Figma', 'Python', 'UX / Design'],
};

export type Experience = {
  id: string; company: string; position: string; dates: string;
  location: string; description: string; accomplishments: string[]; skills: string[];
};

// The first two entries appear on the homepage. All four appear on /experience.
// Descriptions summarize the resume; accomplishments retain its specific details.
export const experience: Experience[] = [
  {
    id: '01',
    company: 'BYU Marriott School of Business Career Center',
    position: 'Data Analyst',
    dates: 'Aug 2026 — Present',
    location: 'Provo, UT',
    description: 'Evaluate student career tools and analyze hiring and placement trends to support career directors. Design automated reporting workflows around their needs.',
    accomplishments: [
      'Evaluating 8 student career tools using analytics and interviews to recommend UX improvements for 5+ career directors.',
      'Analyze hiring and placement trends for 1,000+ students in Zoho Analytics and Excel, creating reports for career directors.',
      'Design automated reporting workflows in Handshake Insights, translating career director needs into repeatable data reports.',
    ],
    skills: ['Zoho Analytics', 'Excel', 'Handshake Insights', 'UX Evaluation'],
  },
  {
    id: '02',
    company: 'Credera',
    position: 'Technology Solutions Intern',
    dates: 'Jun 2026 — Aug 2026',
    location: 'Denver, CO',
    description: 'Built AI agents and full-stack features for a client proof of concept using Python, JavaScript, and AWS Bedrock. Trained developers on reusable AI skills and development workflows.',
    accomplishments: [
      'Developed 3 of 5 AI agents for a client POC using Python and AWS Bedrock, establishing patterns adopted by the team.',
      'Built full-stack features with JavaScript and Python, visualizing 6 API calls and supporting Workfront MCP integration.',
      'Trained 15+ developers on reusable AI skills, improving code generation, ticket clarification, and development workflows.',
    ],
    skills: ['Python', 'JavaScript', 'AWS Bedrock', 'AI Agents', 'Workfront MCP'],
  },
  {
    id: '03',
    company: 'Information Systems Career Services',
    position: 'Career Technology Analyst',
    dates: 'Apr 2025 — Jun 2026',
    location: 'Provo, UT',
    description: 'Developed career-readiness tools, customized AI-powered chatbots, and created dashboards to support students and career services staff.',
    accomplishments: [
      'Developed and launched a 5-week HTML-based interactive career-readiness course, completed by 300+ students.',
      'Customized AI-powered chatbots to support job searches, cutting staff prep time by 75%.',
      'Bridged student needs and data strategy, creating actionable dashboards and insights using Python, Excel, and Tableau.',
    ],
    skills: ['HTML', 'Python', 'Excel', 'Tableau', 'AI Chatbots'],
  },
  {
    id: '04',
    company: 'The Gem Studio',
    position: 'Lead Silversmith',
    dates: 'Oct 2024 — May 2025',
    location: 'Provo, UT',
    description: 'Combined silversmithing instruction with guest service and sales.',
    accomplishments: [
      'Earned 775% above base pay with guest tips, reflecting top-tier customer experience and instruction quality.',
      'Ranked Top 3 on commissions per session across all locations through authentic upselling and high guest satisfaction.',
    ],
    skills: ['Silversmithing', 'Instruction', 'Customer Experience'],
  },
];

// The resume lists these roles without descriptions or accomplishment bullets.
export const earlierExperience = [
  { company: 'Fox Pest Control', position: 'Door-to-Door Salesman', dates: 'May 2024 — Aug 2024', location: 'Boston, MA' },
  { company: 'Kenyon Noble', position: 'Garden Center Assistant', dates: 'May 2023 — Aug 2023', location: 'Bozeman, MT' },
  { company: 'BYU Vending', position: 'Vending Stocker', dates: 'Jan 2023 — Apr 2024', location: 'Provo, UT' },
  { company: 'The Church of Jesus Christ of Latter-day Saints', position: 'Volunteer Representative', dates: 'Oct 2020 — Oct 2022', location: 'San Bernardino, CA' },
  { company: 'Nielson RV', position: 'RV Exterior Detailer', dates: 'Jul 2019 — Feb 2020', location: 'St George, UT' },
];

export const education = [{
  school: 'Brigham Young University — Marriott School of Business',
  degree: 'Bachelor of Science, Information Systems',
  dates: 'Expected Apr 2027',
  details: 'Provo, UT · STEM-Certified · GPA: 3.94. Merit-Based Scholarship, 2024–2026. Member of the Association for Information Systems.',
}];

export const resumeSkills = [
  {
    category: 'Programming / Development',
    skills: ['Python', 'JavaScript', 'C#', '.NET MVC', 'Node.js', 'HTML / CSS', 'AWS', 'AWS Bedrock', 'Git', 'GitHub'],
  },
  {
    category: 'Data / Analytics',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Pandas', 'JSON', 'Pivot Tables', 'Tableau', 'Airtable', 'Excel'],
  },
  {
    category: 'Design / Other Tools',
    skills: ['Figma', 'Jira', 'Adobe Photoshop', 'Adobe Illustrator', 'Salesforce', 'Zoho CRM'],
  },
];
