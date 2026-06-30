import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full Stack Developer",
        description: "I have experience in both frontend and backend development, allowing me to create complete web applications."
    },
    {
        icon: Rocket,
        title: "Performance Optimization",
        description: "I am skilled in optimizing web applications for speed and performance, ensuring a smooth user experience even under heavy load."
    },
    {
        icon: Users,
        title: "Collaborative",
        description: "I have experience working with diverse teams to deliver high-quality software solutions."
    },
    {
        icon: Lightbulb,
        title: "Innovative Thinking",
        description: "I enjoy exploring new technologies and finding creative solutions to complex problems."
    }
];


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                     {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className=" font-serif italic font-normal text-white">
                                {" "}
                                One component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a passionate full-stack developer with a strong foundation in both frontend and backend technologies. My goal is to create seamless, user-friendly applications that solve real-world problems.
                            </p>
                            <p>
                                I have a keen eye for detail and a commitment to writing clean, maintainable code. I enjoy tackling complex challenges and finding innovative solutions to drive user engagement and business growth.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to leverage technology to create impactful solutions that enhance user experiences and drive innovation in the digital world."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div className="glass p-6 rounded-2xl animate-fade-in" 
                                style={{ animationDelay: `${(idx + 1) * 100 }ms` }}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};
