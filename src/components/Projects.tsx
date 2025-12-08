import { ExternalLink, Bot, GraduationCap, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Rander.ai",
      description:
        "An intelligent AI-powered chatbot platform similar to ChatGPT. Built with cutting-edge natural language processing capabilities, Rander.ai provides conversational AI experiences for various use cases including customer support, content generation, and interactive assistance.",
      icon: Bot,
      tags: ["AI", "NLP", "Chatbot", "Full Stack"],
      gradient: "from-primary/20 to-cyan-500/10",
      link: "#",
    },
    {
      title: "Reroj.education",
      description:
        "A comprehensive online education platform specializing in Physics and Chemistry. Features interactive lessons, video tutorials, practice problems, and personalized learning paths designed to help students excel in science subjects from basic concepts to advanced topics.",
      icon: GraduationCap,
      tags: ["EdTech", "Physics", "Chemistry", "Learning"],
      gradient: "from-emerald-500/20 to-teal-500/10",
      link: "#",
    },
    {
      title: "Rander Musical Class",
      description:
        "An innovative music education platform offering virtual music lessons and courses. Learn various instruments, music theory, and composition techniques from expert instructors. Features include interactive sheet music, practice tracking, and personalized feedback.",
      icon: Music,
      tags: ["Music", "Education", "Virtual Classes", "Interactive"],
      gradient: "from-purple-500/20 to-pink-500/10",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{"// My Work"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon Header */}
              <div className={`p-8 bg-gradient-to-br ${project.gradient}`}>
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="heroOutline"
                  size="sm"
                  className="w-full mt-4 group/btn"
                  asChild
                >
                  <a href={project.link}>
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
