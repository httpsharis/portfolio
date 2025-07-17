import React from "react";
import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            
            <RevealOnScroll>

                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectCard
                            title="E-Commerce Website"
                            description="An online shopping platform that allows users to browse, search, and filter products with ease. It includes a fully functional cart system and is designed to provide a smooth and intuitive user experience across devices."
                            techStack={[
                                "Reactjs",
                                "TailwindCSS",
                                "React Router",
                                "Context API",
                                "Vercel",
                                "Git & Github",
                            ]}
                            liveUrl="https://ecommerce-fontend-design.vercel.app/"
                            githubUrl="https://github.com/httpsharis/ecommerce-fontend-design"
                        />

                        <ProjectCard
                            title="E-Commerce Website"
                            description="An online shopping platform that allows users to browse, search, and filter products with ease. It includes a fully functional cart system and is designed to provide a smooth and intuitive user experience across devices."
                            techStack={[
                                "Reactjs",
                                "TailwindCSS",
                                "React Router",
                                "Context API",
                                "Vercel",
                                "Git & Github",
                            ]}
                            liveUrl="https://ecommerce-fontend-design.vercel.app/"
                            githubUrl="https://github.com/httpsharis/ecommerce-fontend-design"
                        />

                        <ProjectCard
                            title="E-Commerce Website"
                            description="An online shopping platform that allows users to browse, search, and filter products with ease. It includes a fully functional cart system and is designed to provide a smooth and intuitive user experience across devices."
                            techStack={[
                                "Reactjs",
                                "TailwindCSS",
                                "React Router",
                                "Context API",
                                "Vercel",
                                "Git & Github",
                            ]}
                            liveUrl="https://ecommerce-fontend-design.vercel.app/"
                            githubUrl="https://github.com/httpsharis/ecommerce-fontend-design"
                        />

                        <ProjectCard
                            title="E-Commerce Website"
                            description="An online shopping platform that allows users to browse, search, and filter products with ease. It includes a fully functional cart system and is designed to provide a smooth and intuitive user experience across devices."
                            techStack={[
                                "Reactjs",
                                "TailwindCSS",
                                "React Router",
                                "Context API",
                                "Vercel",
                                "Git & Github",
                            ]}
                            liveUrl="https://ecommerce-fontend-design.vercel.app/"
                            githubUrl="https://github.com/httpsharis/ecommerce-fontend-design"
                        />
                    </div>
                </div>

            </RevealOnScroll>

        </section>
    );
}

export default Projects;