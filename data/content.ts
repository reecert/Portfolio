export const portfolioData = {
  personal: {
    name: "Reece Raymond Tuscano",
    tagline: "DevOps | Full Stack Developer | Software Engineer",
    intro:
      "Building and maintaining CI/CD pipelines, managing cloud infrastructure, and developing scalable full-stack web applications.",
    email: "reecetuscano@email.com",
    social: {
      github: "https://github.com/reecert",
      linkedin: "https://www.linkedin.com/in/reecetuscano",
    },
    location: "Houston, TX",
    phone: "+1-346-381-7002",
  },
  hero: {
    headline: "Reece Raymond Tuscano",
    subheadline:
      "Software Engineer specializing in robust Full-Stack systems, automated CI/CD pipelines, and cloud-native infrastructure.",
    cta: {
      primary: "View Projects",
      secondary: "Resume",
    },
  },
  about: {
    title: "About Me",
    description: [
      "I am a Software Engineer experienced in creating and scaling full-stack solutions, designing robust CI/CD automations, and building cloud-native infrastructure. My technical foundation spans front-end development, backend REST APIs, and DevOps practices.",
      "I am comfortable building VR lab simulations for educational workflows, optimizing database queries for high-throughput platforms, or deploying secure, containerized applications. My focus is always on creating repeatable structures, automating toil, and building reliable releases.",
      "Currently based in Houston, TX, I hold a Master's in Software Engineering from the University of Houston–Clear Lake and a Bachelor's in Information Technology from the University of Mumbai.",
    ],
  },
  experience: [
    {
      company: "EVU Inc.",
      role: "DevOps Engineer Intern",
      period: "Feb 2026 – Present",
      description:
        "- Building and maintaining CI/CD pipelines GitHub Actions to automate build, test, and deployment workflows.\n- Managing cloud infrastructure GCP, environment configuration, and containerized services (Docker) to ensure stable and scalable deployments across staging and production.\n- Monitoring system performance, troubleshooting deployment issues, and implementing security best practices to enhance infrastructure reliability and minimize downtime.",
      technologies: ["GitHub Actions", "GCP", "Docker", "CI/CD", "Linux"],
    },
    {
      company: "University of Houston–Clear Lake",
      role: "Software Engineer (Research Assistant)",
      period: "Jan 2025 – Dec 2025",
      description:
        "- Built an immersive VR lab simulation using Unity C#, Unreal (C++/Blueprints), Blender to enable training for complex microbiology workflows like DNA sequencing, helping students practice lab steps safely and build confidence before limited in-person lab time.\n- Enhanced runtime performance by 20% by profiling and optimizing 50+ 3D assets/environments while collaborating with a research team in Agile sprints (planning, standups, iterative reviews) and incorporating stakeholder feedback into each release.",
      technologies: ["Unity", "C#", "Unreal Engine", "C++", "Blender", "Agile"],
    },
    {
      company: "IDFC FIRST Bank",
      role: "Software Engineer",
      period: "Jul 2022 – Jul 2024",
      description:
        "- Developed JavaScript-based solutions on the ServiceNow platform, implementing business logic, form validations, workflow automations, and REST integrations to support internal banking operations.\n- Built automated regression checks and reusable validation scripts, reducing manual verification effort by 30% and improving release reliability.\n- Collaborated with product managers and cross-functional teams to translate business requirements into technical designs, user stories, and testable acceptance criteria.",
      technologies: [
        "JavaScript",
        "ServiceNow",
        "REST APIs",
        "Regression Testing",
        "Automation",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Deals Platform",
      description:
        "- Shipped a Next.js 15 + TypeScript full-stack system with backend REST APIs, strict input validation, and consistent error handling to keep failures predictable, diagnosable, and faster to resolve in production.\n- Implemented release safety nets with CI/CD (Jenkins): lint/type checks, Jest unit tests, Playwright E2E suites, plus repeatable deployment steps and rollback readiness to protect availability during releases.\n- Deployed a containerized stack (Docker + Kubernetes) and integrated AWS S3 (media) + PostgreSQL (core data); used Terraform modules and environment parity practices for reproducible, consistent infrastructure.",
      impact: "",
      stack: [
        "Next.js 15",
        "TypeScript",
        "AWS (S3)",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
      ],
      link: "https://reecert.github.io/Portfolio/",
      featured: true,
      image: "/images/cloud-dash.jpg",
    },
    {
      title: "AI PR Review Copilot",
      description:
        "- Implemented a GitHub API + LLM tool-calling workflow that ingests PR diffs and produces reviewer-ready outputs: change summary, impacted areas, risk notes, and recommended tests/checks.\n- Generated structured review guidance (risk-ranked files, checklist-style suggestions, and common failure patterns) to improve review consistency, speed up approvals, and reduce bug leakage into releases.",
      impact: "",
      stack: ["GitHub API", "LLM", "Tool Calling", "Automation"],
      link: "#",
      featured: true,
      image: "/images/notes-app.jpg",
    },
    {
      title: "Android Chat App",
      description:
        "- Developed a real-time Android chat app (Java + Firebase) with offline caching, message delivery states (sent/delivered/read), and push notifications with deep links to conversations.\n- Created an admin service (Spring Boot + PostgreSQL) supporting moderation and reporting workflows (search, review, and action), exposing secure REST APIs and maintaining actionable logs for troubleshooting.",
      impact: "",
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
        "AWS",
        "Azure",
        "GCP",
        "Linux",
        "Git",
        "Docker",
        "Kubernetes (K8s)",
        "Terraform",
        "Jenkins",
        "Ansible",
      ],
    },
    {
      category: "Data/Testing",
      items: [
        "PostgreSQL (RDS)",
        "DynamoDB",
        "MySQL",
        "MongoDB",
        "Redis",
        "Jest",
        "Playwright (E2E)",
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
      title: "Agile Methodologies in Supply Chain Management: A Systematic Review of Practices and Enabling Technologies",
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
