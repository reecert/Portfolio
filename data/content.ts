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
            description: "Developed an immersive virtual reality microbiology lab simulation using C#, C++, Unity, Unreal Engine, and Blender. Optimized 50+ high-fidelity 3D assets achieving 20% frame rate improvement.",
            technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender"],
        },
        {
            company: "IDFC FIRST Bank",
            role: "Software Engineer",
            period: "Jul 2022 - Jul 2024",
            description: "Built internal automation tools and scripts to streamline operational workflows. Provisioned and managed AWS resources (EC2, S3, RDS, VPC, IAM) using Terraform/CloudFormation.",
            technologies: ["AWS", "Terraform", "Python", "CloudWatch", "Lambda"],
        },
    ],
    projects: [
        {
            title: "Ecommerce deals platform",
            description: "High-availability real-time deals platform delivering low-latency content globally.",
            impact: "Architected using Next.js 15 and TypeScript with Server-Side Rendering and Edge Caching.",
            stack: ["Next.js 15", "TypeScript", "PostgreSQL", "AWS Lambda"],
            link: "#",
            featured: true,
            image: "/images/cloud-dash.jpg" // Placeholder
        },
        {
            title: "Android chat app",
            description: "Secure, AI-integrated Android application with End-to-End encryption.",
            impact: "Features Firebase Cloud Messaging for push notifications and cloud-native backend.",
            stack: ["Java", "Kotlin", "Android SDK", "Firebase"],
            link: "#",
            featured: true,
            image: "/images/notes-app.jpg" // Placeholder
        },
        {
            title: "Zenith VR Lab",
            description: "Virtual microbiology laboratory simulator for remote education.",
            impact: "Used by universities for distance learning. (Prior experience project)",
            stack: ["Unity", "C#", "VR"],
            link: "#",
            featured: false,
            image: "/images/vr-lab.jpg"
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
            category: "Backend & Cloud",
            items: ["Node.js", "Spring Boot", "AWS (Lambda, S3, RDS, DynamoDB)", "Docker", "Kubernetes", "Terraform"],
        },
        {
            category: "Databases & Tools",
            items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Jenkins", "GitHub Actions"],
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
        },
        {
            school: "University of Mumbai",
            degree: "Bachelor of Engineering in Information Technology",
            period: "Aug 2018 - Jun 2022",
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
