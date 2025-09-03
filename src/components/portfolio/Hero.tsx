import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            SAI ANEESH PALLA
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            FULL STACK DEVELOPER
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <MapPin className="w-4 h-4" />
              NJ, USA
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Phone className="w-4 h-4" />
              201-630-1641
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Mail className="w-4 h-4" />
              aneeshsai673@gmail.com
            </Badge>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full Stack Developer with 3 years of experience in Java (Spring Boot, Hibernate, JPA, Spring MVC), SQL, and MongoDB, delivering
            scalable applications across enterprise and cloud platforms. Proficient in RESTful/GraphQL APIs, OAuth 2.0, JWT, and GenAI
            integration (OpenAI APIs). Skilled in AWS (Lambda, API Gateway, S3, EC2), Azure (Blob Storage, Functions, App Services),
            Docker, Kubernetes (EKS), and CI/CD automation with strong expertise in monitoring and ML feature integration.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="mailto:aneeshsai673@gmail.com">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://www.linkedin.com/in/sai-aneesh-palla-683881269/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;