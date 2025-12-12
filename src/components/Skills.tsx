import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "C++"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["Bootstrap", "GitHub", "Full Stack Development"],
    },
    {
      title: "AI & Specializations",
      skills: ["AI Chatbot", "AI Based Web", "Software Development"],
    },
    {
      title: "Other Skills",
      skills: ["Data Entry", "Sales Executive", "Business Administration"],
    },
  ];

  const allSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "C/C++", level: 70 },
    { name: "AI Development", level: 85 },
    { name: "Full Stack", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-4">{"// My Skills"}</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skill Progress Bars with animation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground font-heading">{skill.name}</span>
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gradient mb-4 font-heading">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
