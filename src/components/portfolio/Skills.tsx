import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: ["React.js", "Next.js", "Angular", "JavaScript (ES6+)", "TypeScript", "Redux", "React Hooks", "Material UI", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Back-End & APIs", 
      skills: ["Python", "Flask", "FastAPI", "Django", "Java", "Spring Boot", "Spring MVC", "Hibernate", "JSP", "Servlets", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Oracle", "Query Optimization", "Stored Procedures"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["NumPy", "Scikit-learn", "TensorFlow", "Keras", "NLP", "GenAI", "OpenAI", "LangChain", "Predictive Analytics"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "API Gateway", "Redshift", "CloudWatch", "Azure App Services", "Azure Functions", "Azure Blob Storage", "GCP"]
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Kubernetes (EKS)", "Jenkins", "GitHub Actions", "GitLab", "Maven", "Gradle", "CodeShip"]
    },
    {
      title: "Testing & QA",
      skills: ["PyTest", "unittest", "JUnit", "Mockito", "Jest", "Cypress", "React Testing Library", "Postman", "Swagger OpenAPI", "OAuth 2.0"]
    },
    {
      title: "Monitoring & Observability", 
      skills: ["New Relic", "Prometheus", "AWS CloudWatch"]
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "Bitbucket", "SVN", "Jira", "Agile/Scrum"]
    },
    {
      title: "Other",
      skills: ["API Integration", "ETL Workflows", "Data Pipelines", "Secure Coding Practices", "Performance Optimization", "Automation Scripting"]
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