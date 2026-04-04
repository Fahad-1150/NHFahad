export interface Education {
    degree: string;
    institution: string;
    duration: string;
    description?: string;
}

export const educationData: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Your University Name",
        duration: "2021 - Present",
        description: "Focusing on software engineering, web technologies, and artificial intelligence."
    },
    {
        degree: "Higher Secondary Certificate",
        institution: "Your College Name",
        duration: "2018 - 2020",
        description: "Science group with a focus on Mathematics and Physics."
    }
];
