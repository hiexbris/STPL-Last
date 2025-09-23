import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-agrotech.jpg";

const Hero = () => {
  return (
    <section
      className="pt-16 min-h-screen flex items-center"
      style={{ background: "linear-gradient(to bottom, white,  #d7f2e3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                <Leaf className="w-4 h-4" />
                <span>Climate Tech Innovation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforming{" "}
                <span className="hero-text">Agricultural Waste</span>{" "}
                into <span className="hero-text">Green Carbon</span>
              </h1>
              <p className="text-xl max-w-lg" style={{ color: '#647a88' }}>
                Sabuj Tech delivers patented, sustainable carbon solutions from agricultural residues,
                creating high-value applications while ensuring environmental sustainability.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Patented Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Zero Waste Solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Carbon Neutral</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hero-gradient text-lg">
                Explore Our Technology
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="/STPL_Brochure.pdf" download>
                <Button variant="outline" size="lg" className="text-lg">
                  Download Brochure
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">143×</div>
                <div className="text-sm text-muted-foreground">Stronger Shield</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Patents Filed</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Sabuj Tech Agricultural Technology"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;