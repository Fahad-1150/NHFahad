export interface Project {
    title: string;
    description: string;
    tech: string;
    githubUrl?: string;
    linkedinUrl?: string;
    type?: "website" | "app" | "other";
    websiteUrl?: string;
    downloadUrl?: string;
}

export const projectsData: Project[] = [
    {
        title: "Bus Ticket Booking System",
        description: "A system for booking bus seats with admin dashboard.",
        tech: "HTML, CSS, JS, MySQL",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        type: "website",
        websiteUrl: "https://example.com"
    },
    {
        title: "Blogify",
        description: "A blogging website where users can post, like, and comment.",
        tech: "HTML, CSS, JavaScript",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        type: "app",
        downloadUrl: "https://example.com/download"
    },
    {
        title: "Portfolio Project",
        description: "A minimalist black and white portfolio website.",
        tech: "React, Tailwind, Framer Motion",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        type: "other"
    }
];
