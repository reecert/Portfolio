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
      "Software engineer who builds across the full stack — product, infrastructure, and everything that makes it ship reliably. I've built workflow tools used by 40,000+ employees at IDFC FIRST Bank, led a VR research project at UHCL, and currently work at EVU closing infrastructure gaps that nobody else was tracking.",
      "I care about code other people can maintain, systems that fail gracefully, and asking the right questions before diving in. M.S. Software Engineering, UHCL (3.93 GPA) · AWS Solutions Architect · Azure Administrator · Houston, TX.",
    ],
  },
  experience: [
    {
      company: "EVU Inc.",
      role: "DevOps Engineer",
      period: "Feb 2026 – Present",
      location: "NYC, USA",
      description:
        "- Designed and implemented 3 CI/CD pipelines using GitHub Actions, eliminating manual deployment bottlenecks that delayed feature releases, reducing the deployment time from ~2 hours to less than 15 minutes.\n- Containerized applications with Docker and deployed to AWS, eliminating environment mismatch failures across staging and production that caused repeated post-release bugs, improving the deployment success rate from ~70% to over 99%.\n- Built a complete observability stack (Prometheus, Loki, Grafana) that enabled the team to detect incidents in under 10 minutes.",
      technologies: ["GitHub Actions", "AWS", "Docker", "Prometheus", "Loki", "Grafana", "CI/CD", "Linux"],
    },
    {
      company: "University of Houston–Clear Lake",
      role: "Software Engineer (Research Assistant)",
      period: "Jan 2025 – Dec 2025",
      location: "Houston, USA",
      description:
        "- Drove development of an immersive VR lab simulation (Unity C#, Unreal C++/Blueprints, Blender) with 2 undergraduate RAs, owning architecture decisions, managing the backlog, planning sprints, and presenting demos directly to faculty stakeholders.\n- Enabled microbiology students to practice complex workflows like DNA sequencing before limited in-person lab sessions, created 50+ 3D assets through iterative faculty feedback cycles, improving runtime performance by 20% and eliminating motion sickness triggers.",
      technologies: ["Unity", "C#", "Unreal Engine", "C++", "Blender", "Agile"],
    },
    {
      company: "IDFC FIRST Bank",
      role: "Software Engineer",
      period: "Jul 2022 – Jul 2024",
      location: "Mumbai, India",
      description:
        "- Developed JavaScript-driven workflow automations on the ServiceNow platform, connecting internal systems across departments and replacing manual ticket routing and email-based approvals for operations serving 40,000+ employees.\n- Built automated regression checks and reusable validation scripts, reducing manual testing effort by 30% and shortening release cycles.\n- Worked alongside the PM to break down vague requests from non-technical banking teams into actionable technical requirements, helping shape solution design and scope. Contributed to the delivery of 15+ workflow modules over 2 years.",
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
      period: "Sep 2025 – Jan 2026",
      description:
        "- Shipped a deals discovery platform (Next.js, Flutter SDK) with personalized feeds, fuzzy search via trigram indexes, threaded comments, and voting with auth designed to gracefully serve both anonymous and logged-in users from the same endpoints.\n- Developed 15 backend modules (NestJS, PostgreSQL, Redis) with a composite ranking formula balancing popularity, recency decay, and engagement. Scheduled refreshers process active deals in 1000-record chunks every 30 minutes.\n- Designed the infrastructure as 3 services across separate VMs behind Cloudflare CDN, with load balancing, auto-scaling, SHA-tagged deployments for instant rollback, and OpenAPI contract validation on every PR to prevent breaking changes.",
      impact: "",
      stack: [
        "Next.js",
        "Flutter",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Cloudflare CDN",
        "Docker",
      ],
      link: "https://reecert.github.io/Portfolio/",
      featured: true,
      image: "/images/cloud-dash.jpg",
    },
    {
      title: "AI Incident Response Agent",
      period: "May 2025 – Aug 2025",
      description:
        "- Built an AI agent that monitors infrastructure metrics and logs, diagnoses incidents through multi-step tool-calling (query deploys, parse errors, check service health), and posts structured root-cause reports to Slack with suggested remediation.\n- Orchestrated the pipeline through n8n workflows integrating Prometheus, Loki, GitHub API, and an LLM, reducing manual incident triage from first-alert-to-diagnosis to under 5 minutes.",
      impact: "",
      stack: ["n8n", "Prometheus", "Loki", "GitHub API", "LLM", "Slack API"],
      link: "#",
      featured: true,
      image: "/images/notes-app.jpg",
    },
    {
      title: "Android Chat App",
      period: "Nov 2024 – Feb 2025",
      description:
        "- Developed a real-time Android chat app (Java, Firebase) with offline caching, message delivery states (sent/delivered/read), and push notifications with deep links to conversations.\n- Built a separate admin service (Spring Boot, PostgreSQL) for content moderation with search, review, and action workflows, role-based access, and audit logging.",
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
        "Azure Administrator Associate",
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
