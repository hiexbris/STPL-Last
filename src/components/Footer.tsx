import {Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
  <footer style={{ backgroundColor: '#ffd21fgit ', color: '#07602b' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/image.png" alt="Sabuj Tech Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Sabuj Tech</h3>
            </div>
            <p className="mb-6 max-w-md text-[#07602b]">
              Together for change.
            </p>
            <div className="space-y-2 text-sm text-[#07602b]">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-[#07602b]">sabujtech100@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4" />
                <span className="text-[#07602b]">www.linkedin.com/company/sabuj-tech-private-limited</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[#07602b]">IIT Kharagpur, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#07602b]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#07602b]">
              <li><a href="#about" className="hover:text-[#065021] transition-colors">About Us</a></li>
              <li><a href="#technology" className="hover:text-[#065021] transition-colors">Technology</a></li>
              <li><a href="#products" className="hover:text-[#065021] transition-colors">Products</a></li>
              <li><a href="#team" className="hover:text-[#065021] transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#07602b]">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-[#07602b]">
              <li>Antimicrobial Solutions</li>
              <li>Anticorrosive Coatings</li>
              <li>Fire Retardant Materials</li>
              <li>Green Carbon Formulations</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 text-center"
          style={{ borderColor: "#07602b", borderTopWidth: 1, color: "#07602b" }}
        >
          <p style={{ color: "#07602b" }} className="text-sm">
            © 2024 Sabuj Tech Private Limited. All rights reserved. | Climate Tech Innovation for Sustainable Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;