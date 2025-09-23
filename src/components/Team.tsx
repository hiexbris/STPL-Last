import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Jayanta Bhattacharya",
      role: "Co-Founder",
      expertise: "Materials Science & Green Chemistry",
      background: "IIT Kharagpur"
    },
    {
      name: "Dr. Bidus Kanti Das",
      role: "Co-Founder",
      expertise: "Agricultural Engineering & Sustainability",
      background: "Research Excellence"
    },
    {
      name: "Dr. Prakash Ajay Taksal",
      role: "Chief Executive Officer",
      expertise: "Technology Commercialization",
      background: "Industry Leadership"
    },
    {
      name: "Dr. Chandra Sekhar Tiwari",
      role: "Advisor",
      expertise: "Strategic Development & Innovation",
      background: "Advisory Excellence"
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Expert <span className="hero-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team combines deep scientific expertise with industry experience to drive 
            innovation in sustainable carbon technology and agricultural waste transformation.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">PhD Experts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-muted-foreground">IIT Partnership</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Avatar Image */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-primary/10">
                    <img
                      src={
                        index === 0 ? '/JB.png'
                        : index === 1 ? '/BKD.png'
                        : index === 2 ? '/PAT.png'
                        : index === 3 ? '/CST.png'
                        : '/placeholder.svg'
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {member.role}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-primary">Expertise:</span>
                        <p className="text-sm text-muted-foreground">{member.expertise}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Background:</span>
                        <p className="text-sm text-muted-foreground">{member.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institution Partnership */}
        <div
          className="mt-16 p-8 rounded-2xl shadow-card text-center"
          style={{ background: "linear-gradient(145deg , white, #d7f2e3)" }}
        >
          <div className="max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-muted-foreground mb-4">
              Backed by the research excellence of Indian Institute of Technology Kharagpur, 
              West Bengal, India - one of the premier technical institutions in the country.
            </p>
            <Badge variant="outline" className="text-primary border-primary">
              IIT Kharagpur Partnership
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;