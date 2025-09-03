import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Pace University",
      location: "New York, USA",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SRM University",
      location: "Chennai, India",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Python",
      issuer: "University of Michigan from Coursera",
      date: "Nov 2021",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Mar 2022",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Java Language",
      issuer: "Sololearn",
      date: "Apr 2022",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "HTML",
      issuer: "Sololearn",
      date: "Mar 2024",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:shadow-elegant transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-foreground mb-2">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:shadow-elegant transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;