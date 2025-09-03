import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Mobile App Developer React Native | Python | AWS",
      company: "Startup – Gig Jobs & Services Marketplace",
      location: "Remote",
      period: "May 2023 – Present",
      type: "Full-time",
      description: [
        "Collaborated with a small team of developers to design, build, and launch the MVP of a mobile marketplace for gig jobs and local services using React Native for cross-platform compatibility.",
        "Developed key backend functionalities using Python (Flask/Django), including job postings, user profiles, scheduling, messaging, and reviews.",
        "Supported the deployment and maintenance of cloud infrastructure on AWS (EC2, S3, RDS, Lambda, API Gateway), ensuring high uptime and scalability as user traffic grew.",
        "Assisted in preparing the app for public release by handling build configurations, testing, and publishing to the Apple App Store and Google Play Store.",
        "Continued to enhance core features post-launch, improving user experience and adding new capabilities such as push notifications, real-time status updates, and payment integration (e.g., Stripe).",
        "Worked closely with product and design teams to implement UI from Figma designs, focusing on responsiveness, usability, and performance.",
        "Contributed to debugging, performance optimization, and release cycles using GitHub for version control and basic CI/CD workflows.",
        "Actively participated in Agile development practices, code reviews, and team stand-ups in a fast-paced startup environment."
      ],
      tags: ["React Native", "Python", "AWS", "Flask/Django", "Stripe", "Agile"]
    },
    {
      title: "Data Analyst Intern",
      company: "Centurion Software Solutions",
      location: "India",
      period: "Mar 2022 – June 2022",
      type: "Internship",
      description: [
        "Teamed up with data analysts to profile metadata and conduct data sensitivity audits, helping to classify and secure PII within MySQL and PostgreSQL systems.",
        "Wrote efficient SQL scripts to perform data cleaning, deduplication, and transformation tasks across multiple relational datasets.",
        "Collaborated on building lightweight ETL pipelines, ensuring accurate data flow from staging to production environments.",
        "Supported backend development using cloud services like AWS Lambda for processing triggers, S3 for storage, and RDS for managed database hosting.",
        "Participated in architectural discussions to assess the impact of new data integrations on the existing warehouse schema.",
        "Documented pipeline logic and transformation rules to improve transparency, maintainability, and team-wide understanding of data flows."
      ],
      tags: ["SQL", "MySQL", "PostgreSQL", "AWS Lambda", "ETL", "Data Analysis"]
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