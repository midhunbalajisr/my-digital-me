import { GraduationCap, Briefcase, Languages, User } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science & Business Administration Student",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "AI Engineer & Full Stack Developer at Propel Technology",
    },
    {
      icon: Languages,
      title: "Languages",
      description: "Tamil (Native) & English",
    },
    {
      icon: User,
      title: "Personality",
      description: "Responsible, Orderly & Detail-Oriented",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative section-bg white-paper floating-particles">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 font-bold tracking-widest">{"// About Me"}</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">
            Who <span className="text-bold-gradient">I Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-primary font-semibold">Midhunbalaji</span>, a dedicated 
              Computer Science student with a passion for creating innovative digital solutions. 
              Currently pursuing my studies in Computer Science and Business Administration, 
              I bring a unique blend of technical expertise and business acumen to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience as an AI-based engineer and Full Stack Developer at 
              Propel Technology, I have developed proficiency in cutting-edge technologies 
              including AI chatbots, AI-based web applications, and comprehensive full-stack development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I consider myself a responsible and orderly person, always eager to learn and 
              take on new challenges. I am looking forward to creating impactful solutions 
              that make a difference.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">10+</div>
                <div className="text-muted-foreground text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">AI</div>
                <div className="text-muted-foreground text-sm">Specialist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">Full</div>
                <div className="text-muted-foreground text-sm">Stack Dev</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
