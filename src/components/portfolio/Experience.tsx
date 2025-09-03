import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Honeywell USA",
      location: "USA",
      period: "Jul 2025 – Current",
      type: "Full-time",
      description: [
        "Engineered enterprise modules with Java (Spring Boot, Hibernate, JPA), SQL, and MongoDB, integrating UI components and microservices into core workflows.",
        "Developed secure GraphQL and REST APIs for trip histories and user activities, embedding OAuth 2.0 and gateway rules to block unauthorized access.",
        "Integrated a GenAI chatbot with Java backend and OpenAI APIs, decreasing support tickets and improving response quality.",
        "Built scalable apps in Next.js, JavaScript, HTML, CSS, reducing latency across browsers and ensuring seamless rendering.",
        "Deployed serverless workflows using AWS Lambda, API Gateway, S3, boosting scalability and fault tolerance in distributed environments.",
        "Containerized microservices with Docker and orchestrated deployments on Kubernetes (EKS), achieving zero downtime and auto-scaling.",
        "Implemented CI/CD pipelines with Git, GitHub Actions, Jenkins, adding New Relic, Prometheus, AWS CloudWatch for monitoring and JUnit, Mockito, Jest, Cypress for QA, while collaborating with data teams to embed ML features using Pandas, Scikit-learn."
      ],
      tags: ["Java", "Spring Boot", "Next.js", "AWS", "Kubernetes", "GenAI", "OpenAI", "Docker", "GraphQL", "OAuth 2.0"]
    },
    {
      title: "Full Stack Developer",
      company: "OK Mama India",
      location: "India",
      period: "July 2021 – Oct 2023",
      type: "Full-time",
      description: [
        "Architected distributed microservices in Java (Spring Boot, Hibernate, JPA), sustaining 15M+ API calls daily with uninterrupted uptime.",
        "Orchestrated RESTful and GraphQL APIs integrated with OAuth 2.0 and JWT, preventing 20K+ unauthorized access attempts annually.",
        "Constructed ETL pipelines using Java, SQL, JDBC batch frameworks, transforming 50M+ records per cycle for reporting ecosystems.",
        "Automated reporting, campaign sync, and data validation with Java schedulers, cutting 30+ analyst hours per week.",
        "Provisioned serverless services via AWS Lambda, API Gateway, S3, enabling 2.2M+ transactions daily at scale.",
        "Deployed 40+ microservices with Docker, Kubernetes (EKS), embedding TensorFlow, Keras, Scikit-learn models for personalization and coordinating with cross-functional teams to ensure fault-tolerant scaling.",
        "Configured CI/CD pipelines with Git, GitHub Actions, Jenkins, applying automation frameworks, JUnit, Mockito for QA and New Relic, Prometheus, AWS CloudWatch for observability, reducing latency by 500ms per API request."
      ],
      tags: ["Java", "Spring Boot", "GraphQL", "AWS", "Docker", "Kubernetes", "TensorFlow", "ETL", "Microservices"]
    },
    {
      title: "Java Full Stack Developer, Intern",
      company: "Evouge Solutions India",
      location: "India",
      period: "Feb 2021 – Jun 2021",
      type: "Internship",
      description: [
        "Designed backend modules with Java (Spring Boot, Spring MVC, Hibernate, JPA), integrating REST APIs and legacy modernization using JSP, Servlets.",
        "Created onboarding and user management APIs secured with OAuth 2.0, enabling standardized vendor integration.",
        "Enhanced client-side apps with React.js, Angular, Redux, boosting UI performance and state management for enterprise workflows.",
        "Streamlined recurring processes by combining Java schedulers, JDBC batch jobs, AWS Lambda, reducing manual intervention.",
        "Integrated cloud storage with Azure Blob Storage and Functions, enabling secure and scalable data handling.",
        "Optimized persistence with PostgreSQL, MongoDB, Hibernate ORM, increasing query efficiency and reliability.",
        "Executed deployments on AWS EC2, S3, Azure App Services with Jenkins CI/CD, strengthening QA through JUnit, Mockito testing."
      ],
      tags: ["Java", "Spring Boot", "React.js", "Angular", "Azure", "AWS", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional journey in software development and data analytics
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
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

export default Experience;