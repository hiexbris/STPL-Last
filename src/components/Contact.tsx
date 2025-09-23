import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build a <span className="hero-text">Sustainable Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to transform agricultural waste into innovative carbon solutions. 
            Contact our team to explore collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div style={{ color: '#647a88' }}>sabujtech100@gmail.com</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Website</div>
                      <div style={{ color: '#647a88' }}>www.novogreentech.com</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Research Center</div>
                      <div style={{ color: '#647a88' }}>IIT Kharagpur, West Bengal, India</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="p-6 bg-primary/5 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Partnership Opportunities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li style={{ color: '#647a88' }}>• Industrial collaboration and licensing</li>
                <li style={{ color: '#647a88' }}>• Research and development partnerships</li>
                <li style={{ color: '#647a88' }}>• Technology transfer and commercialization</li>
                <li style={{ color: '#647a88' }}>• Sustainable supply chain integration</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="p-8 rounded-2xl shadow-card"
            style={{ background: "linear-gradient(to bottom right, white,  #d7f2e3)" }}
          >
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate Together?</h3>
                <p className="text-muted-foreground">
                  Join us in revolutionizing industrial applications with sustainable carbon solutions.
                  <span style={{ color: '#647a88' }}> Let's create a climate-positive future through innovation.</span>
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full text-white text-lg"
                  style={{ background: "linear-gradient(135deg, #1fa463, #145c2c)" }}
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href="/STPL_Brochure.pdf" download style={{ width: '100%', display: 'block' }}>
                  <Button variant="outline" size="lg" className="w-full text-lg">
                    Download Technical Brochure
                  </Button>
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Cost Effective</div>
                  <div className="text-xs text-muted-foreground">Easy Industrial Adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Sustainable</div>
                  <div className="text-xs" style={{ color: '#647a88' }}>Environmental Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;