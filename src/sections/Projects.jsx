import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";



const projects = [
    {
        title: "Fintech Dashboard",
        description: "A comprehensive financial analytics dashboard for real-time data visualization and reporting.",
        image: "/projects/project1.jpeg",
        tags: ["Flask", "PostgreSQL", "Python", "Html", "CSS"],
        link: "#",
        github: "",
    },
    {
        title: "Drinking water system",
        description: "A system for monitoring and managing drinking water quality and distribution.",
        image: "./projects/proyect2.png",
        tags: ["Flask", "Firebase", "Python", "Bootstrap", "CSS"],
        link: "#",
        github: "https://github.com/royertgojo-lgtm/royertgojo-lgtm",
    },
    {
        title: "Mobile application for a parking lot ",
        description: "A mobile application for managing parking lot reservations and payments.",
        image: "./projects/project3.png",
        tags: ["Flutter", "Firebase", "Dart", "Html", "CSS"],
        link: "#",
        github: "https://github.com/CiclosX/AutoPark_AppMovil.git",
    },
    {
        title: "Server temperature simulation system",
        description: "A system for simulating and monitoring server temperatures in real-time.",
        image: "./projects/project4.png",
        tags: ["Flask","Python", "Html", "CSS"],
        link: "#",
        github: "https://github.com/royertgojo-lgtm/action-idgs",
    },
];



export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Feature works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className=" font-serif italic font-normal text-white"> make in impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of projects that demonstrate my skills and experience in full-stack development, showcasing my ability to create impactful solutions that enhance user experiences and drive innovation in the digital world.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110" />
                                <div className=" absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5 "/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5 "/>
                                    </a>
                                </div>
                            </div>

                            {/* content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className=" text-center mt-12 animate-fade-in animation-delay-500">
                    <a href="https://github.com/royertgojo-lgtm">
                        <AnimatedBorderButton>
                            View all projects
                            <ArrowUpRight className="w-5 h-5"/>
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};

