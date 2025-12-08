import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Propel Technology",
      role: "AI Based Engineer & Full Stack Developer",
      period: "Present",
      type: "Volunteer Experience",
      responsibilities: [
        "Developed AI-based web applications and chatbots",
        "Built full-stack solutions using modern technologies",
        "Collaborated on software development projects",
        "Implemented AI integrations for enhanced user experiences",
      ],
    },
  ];

  const education = [
    {
      institution: "Computer Science",
      degree: "Bachelor's Degree",
      description: "Studying core computer science concepts, algorithms, and software development",
    },
    {
      institution: "Business Administration",
      degree: "Additional Studies",
      description: "Building business acumen alongside technical skills",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{"// Experience & Education"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded mb-4">
                    {exp.type}
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30" />
                  <div className="pl-4">
                    <h4 className="text-lg font-semibold text-foreground">{edu.institution}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
