import { Leaf, Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-primary text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Sabuj Tech Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Sabuj Tech</h3>
            </div>
            <p className="text-white mb-6 max-w-md">
              Leading the transformation of agricultural waste into high-impact carbon innovations 
              for a sustainable, climate-positive future.
            </p>
            <div className="space-y-2 text-sm text-white">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sabujtech100@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>www.novogreentech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>IIT Kharagpur, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#technology" className="hover:text-primary-foreground transition-colors">Technology</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#team" className="hover:text-primary-foreground transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Antimicrobial Solutions</li>
              <li>Anticorrosive Coatings</li>
              <li>Fire Retardant Materials</li>
              <li>Green Carbon Formulations</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 text-center"
          style={{ borderColor: "#e0f2ff", borderTopWidth: 1, color: "#e0f2ff" }}
        >
          <p style={{ color: "#e0f2ff" }} className="text-sm">
            © 2024 Sabuj Tech Private Limited. All rights reserved. | Climate Tech Innovation for Sustainable Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;