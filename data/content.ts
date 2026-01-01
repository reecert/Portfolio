export const portfolioData = {
    personal: {
        name: "Reece Tuscano",
        tagline: "Full Stack Software Engineer • AI & Cloud Computing",
        intro: "Crafting digital serenity through code.",
        email: "reecetuscano@gmail.com",
        social: {
            github: "https://github.com/reecert",
            linkedin: "https://www.linkedin.com/in/reecetuscano/",
            twitter: "#",
        },
    },
    hero: {
        headline: "Reece Tuscano",
        subheadline: "Full Stack Software Engineer specializing in AI, Cloud Computing, and Scalable Architecture.",
        cta: {
            primary: "View Projects",
            secondary: "Resume",
        },
    },
    about: {
        title: "About Me",
        description: [
            "I'm Reece, a Full Stack Engineer who loves bridging the gap between complex backend logic and immersive user experiences. My journey started in fintech at IDFC FIRST Bank, optimizing cloud infrastructure and automating workflows, and has since expanded into the realm of VR and AI research at the University of Houston-Clear Lake.",
            "I believe software is more than just code, it's about storytelling and solving real-world problems. Whether I'm designing a scalable cloud architecture or fine-tuning 3D assets for a virtual lab, my goal is always the same: to build tools that feel intuitive, human, and impactful.",
            "Beyond the screen, I'm an explorer at heart. You'll likely find me traveling to new cities, capturing stories through my camera lens, or staying active on the field. I thrive on challenges, whether it's debugging a distributed system or figuring out the next move in a complex puzzle.",
        ],
    },
    experience: [
        {
            company: "University of Houston at Clear Lake",
            role: "Research Assistant",
            period: "Jan 2025 - Dec 2025",
            description: "Developed an immersive VR microbiology lab simulation using Unity C#, Unreal (C++/Blueprints) and Blender, enabling students to practice complex workflows like DNA sequencing in a safe virtual environment. Created and optimized 50+ 3D assets and environments, improving performance by 20% while collaborating with faculty and student teams using Agile methodologies (weekly sprint planning, standups, and iterative feedback).",
            technologies: ["Unity", "C#", "Unreal Engine", "C++", "Blender", "Agile"],
        },
        {
            company: "IDFC FIRST Bank",
            role: "Software Engineer",
            period: "Jul 2022 - Jul 2024",
            description: "Built internal developer tooling (scripts/CLIs) to automate deployments and environment bootstrap (config generation, pre-flight validation, log capture + rollback helpers), cutting manual runbook steps by 30%. Authored Terraform/CloudFormation modules to standardize AWS infrastructure across environments (VPC, security groups, IAM, EC2/RDS/S3), reducing config drift and environment inconsistencies. Improved production reliability by adding CloudWatch alarms + log-based alerts and building scheduled operational checks (backup verification, compliance validations, key-rotation reminders), speeding up issue detection and reducing manual follow-ups.",
            technologies: ["AWS", "Terraform", "CloudFormation", "Python", "CloudWatch", "CI/CD"],
        },
    ],
    projects: [
        {
            title: "E-commerce deals platform",
            description: "Architected a full-stack web app using React (Next.js 15) + TypeScript, shipping end-to-end features across UI, APIs, and database with production-ready code.",
            impact: "Designed backend on AWS using S3, PostgreSQL, and ECS (Docker); used Kafka to stream user activity events for feeds and analytics. Provisioned infra with Terraform + CI/CD, implemented JWT auth + least-privilege IAM.",
            stack: ["Next.js 15", "TypeScript", "AWS (S3, ECS)", "PostgreSQL", "Kafka", "Terraform"],
            link: "#",
            featured: true,
            image: "/images/cloud-dash.jpg"
        },
        {
            title: "PR Review Copilot",
            description: "Created an AI PR Review Copilot using tool calling + GitHub API to analyze diffs and generate summaries, test suggestions, risk-ranked files, code smells, and security notes.",
            impact: "Automated code review process with line-level citations.",
            stack: ["AI Tool Calling", "GitHub API", "Automation"],
            link: "#",
            featured: true,
            image: "/images/notes-app.jpg" // Using a placeholder for now
        },
        {
            title: "Android chat app",
            description: "Shipped a real-time Android app using Java and Firebase Realtime Database, implementing message states, offline caching, and FCM push notifications.",
            impact: "Developed a Spring Boot service using Firebase Admin SDK + PostgreSQL to provide chat metadata search, reporting moderation workflows, and secure admin APIs.",
            stack: ["Java", "Firebase", "Spring Boot", "PostgreSQL"],
            link: "#",
            featured: true,
            image: "/images/vr-lab.jpg" // Using a placeholder for now
        },
    ],
    skills: [
        {
            category: "Languages",
            items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C", "C++", "SQL", "Kotlin"],
        },
        {
            category: "Frontend",
            items: ["React", "Angular", "Next.js", "HTML5", "CSS", "Tailwind"],
        },
        {
            category: "Backend & APIs",
            items: ["Node.js", "Express", "Fastify", "REST", "JSON", "WebSocket", "OAuth2/JWT", "GraphQL", "Spring Boot"],
        },
        {
            category: "Cloud/DevOps",
            items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD pipelines"],
        },
        {
            category: "Databases & Messaging",
            items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Oracle", "Apache Kafka"],
        },
        {
            category: "Testing & Quality",
            items: ["Jest", "PyTest", "Postman", "Automated Regression Testing", "Contract Testing", "Feature Flags", "Blue/Green"],
        },
        {
            category: "Certifications",
            items: ["AWS Certified Solutions Architect – Associate", "ServiceNow Certified System Administrator"],
        },
    ],
    writing: [
        {
            title: "Agile Methodologies in Supply Chain Management",
            publisher: "Springer Nature (Proceedings of CSCI’25)",
            date: "2025",
            link: "#",
        },
    ],
    education: [
        {
            school: "University of Houston-Clear Lake",
            degree: "Master of Science in Software Engineering",
            period: "Aug 2024 - Dec 2025",
            gpa: "3.93/4.0",
            description: "Coursework: Requirements engineering, Software Architecture, System Design, Software testing, Agile/Scrum"
        },
        {
            school: "University of Mumbai",
            degree: "Bachelor of Engineering in Information Technology",
            period: "Aug 2018 - Jun 2022",
            description: "Coursework: Big data analytics, Software Development, Machine Learning, Data Structures, DBMS"
        }
    ],
    hobbies: [
        {
            name: "Travel",
            description: "Exploring new cultures and landscapes.",
            icon: "travel"
        },
        {
            name: "Sports",
            description: "Staying active through team sports and fitness.",
            icon: "activity"
        },
        {
            name: "Videography",
            description: "Capturing moments and storytelling through video.",
            icon: "video"
        },
        {
            name: "Problem Solving",
            description: "Tackling complex challenges with creative solutions.",
            icon: "puzzle"
        }
    ]
};
