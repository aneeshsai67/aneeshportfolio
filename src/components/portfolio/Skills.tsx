import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Technologies",
      skills: ["HTML5", "CSS3", "Bootstrap", "UI Material", "JavaScript", "TypeScript", "React JS", "React Native"]
    },
    {
      title: "Back-End Technologies", 
      skills: ["Python", "Java", "Spring Framework", "Node.js"]
    },
    {
      title: "IDEs",
      skills: ["Cursor", "Windsurf", "Visual Studio Code", "IntelliJ IDEA", "Eclipse", "Maven", "Gradle", "NetBeans"]
    },
    {
      title: "Web Services",
      skills: ["RESTful", "SOAP", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["SQL", "Mongo DB (NoSQL)", "PostgreSQL", "MySQL", "Oracle", "DynamoDB"]
    },
    {
      title: "CI/CD & Tools",
      skills: ["Jenkins", "Code Ship", "GitHub Actions"]
    },
    {
      title: "Testing Tools",
      skills: ["JUnit", "Mockito", "React Testing Library", "Jest"]
    },
    {
      title: "Cloud & Deployment", 
      skills: ["AWS", "Docker", "AWS LAMBDA", "Kubernetes"]
    },
    {
      title: "Web Server",
      skills: ["Apache Tomcat", "WebLogic"]
    },
    {
      title: "Other",
      skills: ["Agile", "Jira", "SVN", "Ant", "Git", "Scrum", "GitHub", "Kubernetes", "Bitbucket", "Swagger Open API", "LINUX", "PostgreSQL"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "LINUX", "Mac OS"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive expertise across the full technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
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

export default Skills;