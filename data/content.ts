export const portfolioData = {
  personal: {
    name: "Reece Raymond Tuscano",
    tagline: "Software Engineer | Full Stack | Cloud & DevOps",
    intro:
      "Building reliable, scalable systems with a focus on automation and user experience.",
    email: "reecetuscano@email.com",
    social: {
      github: "https://github.com/reecert",
      linkedin: "https://www.linkedin.com/in/reecetuscano",
      twitter: "#",
    },
    location: "Houston, TX",
    phone: "+1-346-381-7002",
  },
  hero: {
    headline: "Reece Raymond Tuscano",
    subheadline:
      "Software Engineer with 3+ years of experience delivering robust features, optimizing platforms, and automating workflows.",
    cta: {
      primary: "View Projects",
      secondary: "Resume",
    },
  },
  about: {
    title: "About Me",
    description: [
      "I am a Software Engineer with over 3 years of experience on production teams, contributing to feature delivery, platform changes, and reliable releases. I am known for clear communication, requirement clarification, and writing documentation that makes work repeatable for others.",
      "I am comfortable debugging issues, improving workflows through automation, and collaborating across teams to move from problems to improvements. My technical expertise spans across Full Stack development, Cloud/DevOps, and Data Engineering.",
      "Currently based in Houston, TX, I hold a Master's in Software Engineering from the University of Houston–Clear Lake and a Bachelor's in Information Technology from the University of Mumbai.",
    ],
  },
  experience: [
    {
      company: "University of Houston–Clear Lake",
      role: "Research Assistant",
      period: "Jan 2025 – Dec 2025",
      description:
        "Built an immersive VR lab simulation using Unity (C#), Unreal (C++/Blueprints), and Blender to enable training for complex microbiology workflows. Enhanced runtime performance by 20% by profiling and optimizing 50+ 3D assets/environments while collaborating with a research team in Agile sprints.",
      technologies: ["Unity", "C#", "Unreal Engine", "C++", "Blender", "Agile"],
    },
    {
      company: "IDFC FIRST Bank",
      role: "Software Engineer",
      period: "Jul 2022 – Jul 2024",
      description:
        "Contributed to ServiceNow change delivery by collaborating with business, operations, and engineering to refine requirements into user stories. Developed JavaScript-based validations and repeatable regression checks, reducing manual runbook steps by 30%. Designed and maintained test documentation enabling smoother UAT and faster sign-off.",
      technologies: [
        "JavaScript",
        "ServiceNow",
        "Automation",
        "Regression Testing",
        "Documentation",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Deals Platform",
      description:
        "Shipped a Next.js 15 + TypeScript full-stack system with backend REST APIs, strict input validation, and consistent error handling to keep failures predictable, diagnosable, and faster to resolve in production.",
      impact:
        "Implemented release safety nets with CI/CD (Jenkins), deployed a containerized stack (Docker + Kubernetes) and integrated AWS S3 + PostgreSQL. Engineered ranking/personalization signals from user activity.",
      stack: [
        "Next.js 15",
        "TypeScript",
        "AWS (S3, RDS)",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
      ],
      link: "https://reecert.github.io/Portfolio/", // Using portfolio link as placeholder or correct if known
      featured: true,
      image: "/images/cloud-dash.jpg",
    },
    {
      title: "AI PR Review Copilot",
      description:
        "Implemented a GitHub API + LLM tool-calling workflow that ingests PR diffs and produces reviewer-ready outputs: change summary, impacted areas, risk notes, and recommended tests/checks.",
      impact:
        "Generated structured review guidance (risk-ranked files, checklist-style suggestions) to improve review consistency, speed up approvals, and reduce bug leakage into releases.",
      stack: ["GitHub API", "LLM", "Tool Calling", "Automation"],
      link: "#",
      featured: true,
      image: "/images/notes-app.jpg",
    },
    {
      title: "Android Chat App",
      description:
        "Developed a real-time Android chat app (Java + Firebase) with offline caching, message delivery states, and push notifications with deep links.",
      impact:
        "Created an admin service (Spring Boot + PostgreSQL) supporting moderation and reporting workflows, exposing secure REST APIs and maintaining actionable logs for troubleshooting.",
      stack: ["Java", "Firebase", "Spring Boot", "PostgreSQL", "Android"],
      link: "#",
      featured: true,
      image: "/images/vr-lab.jpg",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "SQL",
        "C++",
        "Bash/Shell",
      ],
    },
    {
      category: "Frameworks/Backend",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Spring Boot",
        "Django",
        "Flask",
        "REST APIs",
        "OAuth2/JWT",
      ],
    },
    {
      category: "Cloud/DevOps",
      items: [
        "AWS (VPC, EC2, S3, RDS, Lambda)",
        "Azure",
        "GCP",
        "Linux",
        "Git",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      category: "Data/Testing",
      items: [
        "PostgreSQL",
        "DynamoDB",
        "MySQL",
        "MongoDB",
        "Redis",
        "Jest",
        "Playwright",
        "Postman",
        "Selenium",
      ],
    },
    {
      category: "Certifications",
      items: [
        "AWS Solutions Architect – Associate",
        "ServiceNow Certified System Administrator",
      ],
    },
  ],
  writing: [
    {
      title: "Agile Methodologies in Supply Chain Management",
      publisher: "CSCI’25, Springer Nature",
      date: "2025",
      link: "#",
    },
  ],
  education: [
    {
      school: "University of Houston–Clear Lake",
      degree: "M.S. Software Engineering",
      period: "Aug 2024 – Dec 2025",
      gpa: "3.93/4.0",
      description: "Houston, USA",
    },
    {
      school: "University of Mumbai",
      degree: "B.E. Information Technology",
      period: "Aug 2018 – Jun 2022",
      description: "Mumbai, India",
    },
  ],
  hobbies: [
    {
      name: "Travel",
      description: "Exploring new cultures and landscapes.",
      icon: "travel",
    },
    {
      name: "Sports",
      description: "Staying active through team sports and fitness.",
      icon: "activity",
    },
    {
      name: "Videography",
      description: "Capturing moments and storytelling through video.",
      icon: "video",
    },
    {
      name: "Problem Solving",
      description: "Tackling complex challenges with creative solutions.",
      icon: "puzzle",
    },
  ],
};
