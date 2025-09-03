import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aneeshsai673@gmail.com",
      href: "mailto:aneeshsai673@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "201-630-1641",
      href: "tel:201-630-1641"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "New Jersey, USA",
      href: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or just connect!
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {contact.label}
                </h3>
                {contact.href ? (
                  <a 
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {contact.value}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="mailto:aneeshsai673@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Send Message
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="/resume.pdf" download="Sai_Aneesh_Palla_Resume.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;