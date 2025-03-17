import React from "react";
import {
  Users,
  Star,
//   Award,
//   Clock,
  Sparkles,
  ArrowRight,
  Moon,
  Cloud,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Collections" },
    { number: "15+", label: "Years Experience" },
    { number: "25+", label: "Countries Served" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/assets/images/night1.jpg",
      quote: "Creating comfortable sleepwear that makes you feel amazing.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "/assets/images/night1.jpg",
      quote: "Every piece tells a story of comfort and style.",
    },
    {
      name: "Emma Williams",
      role: "Product Director",
      image: "/assets/images/night1.jpg",
      quote: "Quality is at the heart of everything we do.",
    },
  ];

  const milestones = [
    { year: "2010", event: "DreamWear was founded" },
    { year: "2015", event: "Expanded to international markets" },
    { year: "2018", event: "Launched sustainable collection" },
    { year: "2023", event: "Opened 50th retail store" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Enhanced Background */}
      {/* Hero Section with Enhanced Background */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Navy Blue Base Background */}
        <div className="absolute inset-0 bg-navy-900"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-purple-800 to-navy-700 opacity-80 animate-pulse-slow"></div>

        {/* Dynamic Watermark Pattern */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "moveBackground 15s linear infinite",
            }}
          ></div>

          {/* Scattered Dreams Text Watermarks */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-opacity-5 font-bold transform rotate-15 animate-float-slow"
              style={{
                fontSize: `${Math.random() * 50 + 80}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
                animation: `float-${Math.floor(Math.random() * 3) + 1} ${
                  Math.random() * 10 + 15
                }s infinite alternate`,
              }}
            >
              DreamWear
            </div>
          ))}
        </div>

        {/* Floating Elements with Better Visibility */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Stars with Glowing Effect */}
          <div className="absolute top-1/4 left-1/3 animate-float-slow">
            <Star className="w-32 h-32 text-yellow-200 opacity-20 filter drop-shadow-glow" />
          </div>
          <div className="absolute top-1/2 left-2/3 animate-float-medium">
            <Star className="w-20 h-20 text-yellow-100 opacity-20 filter drop-shadow-glow" />
          </div>
          <div className="absolute bottom-1/4 left-1/5 animate-float-fast">
            <Star className="w-16 h-16 text-yellow-300 opacity-20 filter drop-shadow-glow" />
          </div>

          {/* Animated Moons with Enhanced Visibility */}
          <div className="absolute top-1/6 right-1/4 animate-float-slow-reverse">
            <Moon className="w-40 h-40 text-blue-200 opacity-25 filter drop-shadow-glow" />
          </div>
          <div className="absolute bottom-1/3 right-1/6 animate-float-medium-reverse">
            <Moon className="w-24 h-24 text-blue-100 opacity-25 filter drop-shadow-glow" />
          </div>

          {/* Cloud Elements with Better Contrast */}
          <div className="absolute top-2/3 left-1/4 animate-float-slow">
            <Cloud className="w-36 h-36 text-white opacity-15" />
          </div>
          <div className="absolute bottom-1/5 right-1/3 animate-float-medium">
            <Cloud className="w-28 h-28 text-white opacity-15" />
          </div>

          {/* Enhanced Sparkles with Animation */}
          <div className="absolute top-1/3 right-1/2 animate-pulse">
            <Sparkles className="w-48 h-48 text-orange-200 opacity-30 filter drop-shadow-glow" />
          </div>
          <div className="absolute bottom-1/2 left-1/3 animate-pulse-slow">
            <Sparkles className="w-32 h-32 text-orange-100 opacity-25 filter drop-shadow-glow" />
          </div>
        </div>

        {/* Particle Effect Overlay */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-30 animate-particle"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl backdrop-blur-md bg-navy-900/50 p-8 rounded-lg border border-white/20 shadow-glow">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-400 mb-6 animate-fade-in">
              Crafting Dreams, <br />
              <span className="text-orange-400">Delivering Comfort</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fade-in-up delay-200">
              Since 2010, we've been dedicated to creating the most comfortable
              and stylish sleepwear for dreamers worldwide.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-glow-orange animate-fade-in-up delay-300">
              Discover Our Story
            </button>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                DreamWear began with a simple idea: everyone deserves a perfect
                night's sleep. Our founder, Sarah Johnson, turned this vision
                into reality by creating sleepwear that combines luxurious
                comfort with timeless style.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to serve customers worldwide, maintaining our
                commitment to quality, sustainability, and innovation in
                everything we create.
              </p>
              <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 group">
                Learn More
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/assets/images/about-story.jpg"
                alt="Our Story"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-lg">
                <p className="text-xl font-bold">15+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-orange-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  <div className="flex-1 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Quality First",
                description:
                  "We never compromise on the quality of our products.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description:
                  "Your comfort and satisfaction are our top priorities.",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description:
                  "Constantly evolving to bring you the best in sleepwear.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-navy-700 hover:bg-navy-600 transition-colors duration-300"
              >
                <value.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the DreamWear Family
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the comfort and luxury of DreamWear. Subscribe to our
            newsletter for exclusive updates and offers.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-navy-800 hover:text-white transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
