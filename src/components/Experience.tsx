import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2, GraduationCap } from "lucide-react";

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
      institution: "Computer Science Business System",
      degree: "Bachelor of Engineering (B.E) - CSBS",
      description: "Combining core computer science with business analytics, software engineering, and enterprise solutions. Specializing in AI development and full-stack web technologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative section-bg white-paper floating-particles">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-4 font-bold tracking-widest">{"// Experience & Education"}</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">
            My <span className="text-bold-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold font-heading mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-6 h-6 text-primary" />
              Work Experience
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground font-heading">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <motion.span 
                      className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </motion.span>
                  </div>
                  <motion.span 
                    className="inline-block text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded mb-4 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {exp.type}
                  </motion.span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold font-heading mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Decorative element */}
                  <motion.div 
                    className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <div className="pl-4">
                    <h4 className="text-lg font-semibold text-foreground font-heading">{edu.institution}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
