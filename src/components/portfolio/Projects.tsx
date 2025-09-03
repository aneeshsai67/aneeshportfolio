import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Crop Prediction Based on Agricultural Environment",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Implemented crop prediction in agriculture, which relies on soil and environmental conditions such as rainfall, humidity, and temperature.",
      achievements: [
        "The objective was to predict the variety of crops that would yield the best based on the Irrigational states.",
        "Introduced Voting classifiers and Gradient boosting as two new algorithms to enhance the existing technique.",
        "Achieved a model accuracy of 98.77% by training with provided datasets and incorporating the given values.",
        "The model was built, shaped, and framed to accurately predict the required crop species based on circumstantial conditions of irrigational ports."
      ],
      tags: ["Machine Learning", "Python", "Data Science", "Agriculture", "Gradient Boosting", "Voting Classifiers"],
      accuracy: "98.77%"
    },
    {
      title: "Students Performance Analysis And Prediction Using Linear Regression",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Identified relevant attributes such as study time, health status, and previous failures from a dataset comprising 33 features to forecast student final grades.",
      achievements: [
        "Extracted pertinent features to enhance model accuracy.",
        "Emphasized variables crucial for predicting student performance.",
        "Developed and trained a linear regression model utilizing the selected attributes, achieving a highest accuracy of 96.47% during testing.",
        "Employed techniques to optimize model performance.",
        "Validated model accuracy through rigorous testing procedures."
      ],
      tags: ["Linear Regression", "Data Analysis", "Python", "Feature Engineering", "Performance Prediction"],
      accuracy: "96.47%"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Academic Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Machine learning and data science projects with high-impact results
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
                        Accuracy: {project.accuracy}
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