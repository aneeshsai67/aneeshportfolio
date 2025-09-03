import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, MapPin } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Crop Prediction Based on Characteristics of the Agricultural Environment Using Machine Learning",
      conference: "11th International Conference on Contemporary Engineering and Technology (ICCET 2023)",
      organizer: "OSIET, Chennai in collaboration with Samarkand State University, Uzbekistan",
      date: "May 2023",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Publications
          </h2>
          <p className="text-lg text-muted-foreground">
            Research contributions in machine learning and agricultural technology
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {pub.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {pub.title}
                    </CardTitle>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{pub.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1" />
                        <div>
                          <p className="font-medium">{pub.conference}</p>
                          <p className="text-sm">{pub.organizer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Published Research
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;