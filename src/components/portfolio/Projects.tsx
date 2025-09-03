import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SkillSync – Real-Time Skill-Sharing Platform",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Built a skill-sharing platform with comprehensive REST APIs for scheduling, bookings, reviews, and user management, serving real users in beta.",
      achievements: [
        "Built a skill-sharing platform with 12+ REST APIs for scheduling, bookings, reviews, and user management, serving 50+ beta users.",
        "Optimized PostgreSQL + Redis caching, cutting dashboard load time by 50% and boosting endpoint speed by 60%.",
        "Integrated JWT, Google OAuth 2.0, and Calendar API, raising session completion rates by 65%.",
        "Implemented real-time notifications and seamless user experience with modern web technologies."
      ],
      tags: ["REST APIs", "PostgreSQL", "Redis", "JWT", "OAuth 2.0", "Calendar API", "Real-time"],
      metrics: "50+ Users, 60% Speed Boost"
    },
    {
      title: "Freelance Forge – Full Stack Freelance Platform",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Built a comprehensive MERN-based marketplace with authentication, role-based access, and real-time communication features.",
      achievements: [
        "Built a MERN-based marketplace with JWT auth, role-based access, and real-time chat via Socket.io.",
        "Deployed on AWS EC2 with Docker & Jenkins CI/CD, integrated Stripe payments, and managed media with Cloudinary.",
        "Designed a responsive React UI and coordinated Agile sprints using Jira/Git for smooth Dev/QA collaboration.",
        "Implemented secure payment processing and file management for freelance workflows."
      ],
      tags: ["MERN Stack", "JWT", "Socket.io", "AWS EC2", "Docker", "Jenkins", "Stripe", "Cloudinary"],
      metrics: "Full CI/CD Pipeline"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Full-stack applications with real-world impact and scalable architecture
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                     <div className="flex items-center gap-4 mb-4">
                       <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                         {project.metrics}
                       </Badge>
                     </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;