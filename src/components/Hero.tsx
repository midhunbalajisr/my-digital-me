import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Enhanced background with animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image with enhanced multi-layer glow */}
          <div className="relative animate-fade-in group">
            {/* Multiple glow layers */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -inset-2 bg-primary/40 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-colors animate-float">
              <img
                src={profileImage}
                alt="Midhunbalaji"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Rotating ring effects */}
            <div className="absolute -inset-8 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-12 border border-dashed border-accent/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
              {"<Hello World />"}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              I'm <span className="text-gradient">Midhunbalaji</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6">
              Full Stack Developer & AI Engineer
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              A passionate Computer Science student with expertise in AI-based web development, 
              full-stack solutions, and modern technologies. Ready to create innovative digital experiences.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm">
              <a
                href="mailto:midhunbalajisr@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                midhunbalajisr@gmail.com
              </a>
              <a
                href="tel:+919655890702"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9655890702
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Chennai, India
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/919655890702" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get In Touch
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#about">
                  <Download className="w-5 h-5" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/midhunbalaji-sankar-024153351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
