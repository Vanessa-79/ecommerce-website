import React, { useEffect, useRef } from "react";
import {
  Users,
  Star,
  Sparkles,
  ArrowRight,
  Moon,
  Cloud,
  Heart,
  Shield,
  Leaf,
} from "lucide-react";

const AboutPage = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Parallax scrolling effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Heart },
    { number: "100+", label: "Collections", icon: Star },
    { number: "15+", label: "Years Experience", icon: Shield },
    { number: "25+", label: "Countries Served", icon: Leaf },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/images/night1.jpg",
      quote: "Creating comfortable sleepwear that makes you feel amazing.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "/images/night1.jpg",
      quote: "Every piece tells a story of comfort and style.",
    },
    {
      name: "Emma Williams",
      role: "Product Director",
      image: "/images/night1.jpg",
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
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section with Enhanced Background */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Teal Base Background */}
        <div className="absolute inset-0 bg-teal-900"></div>

        {/* Animated Gradient Overlay with Improved Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 opacity-80 animate-pulse-slow"></div>

        {/* Dynamic Watermark Pattern with Depth Effect */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern with Perspective */}
          <div
            className="absolute inset-0 opacity-10 transform-gpu"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              transform: "perspective(1000px) rotateX(2deg)",
              animation: "moveBackground 20s linear infinite",
            }}
          ></div>

          {/* 3D Scattered Dreams Text Watermarks */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-opacity-5 font-bold transform-gpu will-change-transform"
              style={{
                fontSize: `${Math.random() * 60 + 80}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `perspective(1000px) rotate(${
                  Math.random() * 30 - 15
                }deg) rotateY(${Math.random() * 20 - 10}deg)`,
                animation: `float-${Math.floor(Math.random() * 3) + 1} ${
                  Math.random() * 10 + 15
                }s infinite alternate ease-in-out`,
                filter: "blur(1px)",
              }}
            >
              DreamWear
            </div>
          ))}
        </div>

        {/* Parallax Floating Elements */}
        <div className="absolute inset-0 overflow-hidden" ref={parallaxRef}>
          {/* Animated Stars with Glowing Effect and Rotation */}
          <div className="absolute top-1/4 left-1/3 animate-float-slow">
            <Star className="w-32 h-32 text-teal-200 opacity-20 filter drop-shadow-glow animate-spin-slow" />
          </div>
          <div className="absolute top-1/2 left-2/3 animate-float-medium">
            <Star className="w-20 h-20 text-teal-100 opacity-20 filter drop-shadow-glow animate-spin-slow" />
          </div>
          <div className="absolute bottom-1/4 left-1/5 animate-float-fast">
            <Star className="w-16 h-16 text-teal-300 opacity-20 filter drop-shadow-glow animate-spin-slow" />
          </div>

          {/* Animated Moons with Enhanced Visibility and Pulsing Glow */}
          <div className="absolute top-1/6 right-1/4 animate-float-slow-reverse">
            <Moon className="w-40 h-40 text-teal-200 opacity-25 filter drop-shadow-glow animate-pulse-glow" />
          </div>
          <div className="absolute bottom-1/3 right-1/6 animate-float-medium-reverse">
            <Moon className="w-24 h-24 text-teal-100 opacity-25 filter drop-shadow-glow animate-pulse-glow" />
          </div>

          {/* Cloud Elements with Drift Animation */}
          <div className="absolute top-2/3 left-1/4 animate-cloud-drift-slow">
            <Cloud className="w-36 h-36 text-white opacity-15 transform-gpu" />
          </div>
          <div className="absolute bottom-1/5 right-1/3 animate-cloud-drift-medium">
            <Cloud className="w-28 h-28 text-white opacity-15 transform-gpu" />
          </div>

          {/* Enhanced Sparkles with Animation and Color Shift */}
          <div className="absolute top-1/3 right-1/2 animate-pulse">
            <Sparkles className="w-48 h-48 text-teal-200 opacity-30 filter drop-shadow-glow animate-color-shift" />
          </div>
          <div className="absolute bottom-1/2 left-1/3 animate-pulse-slow">
            <Sparkles className="w-32 h-32 text-teal-100 opacity-25 filter drop-shadow-glow animate-color-shift" />
          </div>
        </div>

        {/* Enhanced Particle Effect Overlay */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-30 animate-particle will-change-transform"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)",
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content with Glass Card Effect */}
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl backdrop-blur-md bg-teal-500/30 p-8 rounded-lg border border-teal-300/20 shadow-glow transform-gpu hover:scale-105 transition-all duration-500 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 animate-text-shimmer">
              Crafting Dreams, <br />
              <span className="text-yellow-400 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-teal-300 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-700 after:ease-out hover:after:scale-x-100">
                Delivering Comfort
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fade-in-up delay-200">
              Since 2010, we've been dedicated to creating the most comfortable
              and stylish sleepwear for dreamers worldwide.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-yellow-300 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-glow-teal animate-fade-in-up delay-300 relative overflow-hidden group">
              <span className="relative z-10">Discover Our Story</span>
              <span className="absolute inset-0 bg-teal-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
        {/* Enhanced Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-900 to-transparent"></div>
      </section>

      {/* Stats Section with Hover Cards */}
      <section className="py-16 bg-white relative">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, teal 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300 scroll-reveal bg-white p-6 rounded-lg shadow-sm hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-4xl font-bold text-yellow-500 mb-2 counter">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with Circular Image */}
      <section className="py-20 bg-teal-800 text-white relative overflow-hidden">
        {/* Parallax Dots Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Our Story
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-yellow-500 rounded-full"></span>
              </h2>
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
              <button className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </button>
            </div>

            {/* Circular Image Container */}
            <div className="relative flex justify-center items-center scroll-reveal">
              {/* Yellow Circle Background with Animated Rotation */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-yellow-500 rounded-full animate-spin-slow opacity-70"></div>

              {/* Inner Decorative Ring */}
              <div className="absolute w-72 h-72 md:w-88 md:h-88 border-4 border-dashed border-teal-300 rounded-full animate-spin-slow-reverse opacity-30"></div>

              {/* Circle Image Container */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                <img
                  src="/images/products/night5.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Yellow Badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 p-4 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300 z-20 w-24 h-24 flex flex-col justify-center items-center">
                <p className="text-xl font-bold text-center">15+</p>
                <p className="text-xs text-center">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Card Flip Effect */}
      <section className="py-20 relative">
        {/* Subtle Teal Wave Background */}
        <div className="absolute top-0 left-0 w-full h-64 opacity-5">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#0d9488"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
            <span className="relative">
              Meet Our Team
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-yellow-500 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="scroll-reveal group perspective-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 transform-gpu preserve-3d relative h-96 group-hover:rotate-y-180">
                  <div className="absolute backface-hidden w-full h-full">
                    <div className="relative h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-yellow-400">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute backface-hidden w-full h-full bg-teal-700 p-6 flex flex-col justify-center items-center text-white rotate-y-180 rounded-lg">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-yellow-400 mb-4">{member.role}</p>
                    <p className="text-gray-200 italic text-center">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Enhanced Animations */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(teal 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
            <span className="relative inline-block">
              Our Journey
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-teal-500 rounded-full"></span>
            </span>
          </h2>
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-200 via-teal-300 to-yellow-200 rounded-full shadow-glow-sm"></div>

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 scroll-reveal`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                      <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full relative z-10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full animate-pulse-slow absolute"></div>
                    <div className="w-4 h-4 bg-white rounded-full relative z-20 shadow-md"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Hover Effects */}
      <section className="py-20 bg-teal-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-teal-600 opacity-10 animate-expand-slow"
              style={{
                width: "300px",
                height: "300px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-reveal">
            <span className="relative inline-block">
              Our Values
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-yellow-500 rounded-full"></span>
            </span>
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
                className="scroll-reveal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 rounded-lg bg-teal-700 hover:bg-teal-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-glow group h-full">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-yellow-400 rounded-full opacity-30 animate-ping-slow group-hover:animate-ping"></div>
                      <value.icon className="w-12 h-12 text-yellow-400 relative z-10 transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-yellow-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Masked Background and Enhanced UI */}
      <section className="py-20 bg-yellow-500 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Moon
              key={i}
              className="absolute text-white opacity-5 transform rotate-45"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Diagonal Split Effect */}
        <div className="absolute inset-0 bg-teal-600 opacity-10 skew-y-6 transform-gpu"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Join the DreamWear Family
              <div className="absolute h-1 w-1/2 bg-white rounded-full bottom-0 left-1/4"></div>
            </h2>
            <p className="text-xl mb-8 mx-auto">
              Experience the comfort and luxury of DreamWear. Subscribe to our
              newsletter for exclusive updates and offers.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all"
              />
              <button className="bg-white text-yellow-500 px-8 py-3 rounded-md font-medium hover:bg-teal-800 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Subscribe Now</span>
                <span className="absolute inset-0 bg-teal-700 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Animations CSS */}
      <style jsx global>{`
        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes float-1 {
          0% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-2 {
          0% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes float-3 {
          0% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0% {
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          }
          100% {
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
          }
        }

        @keyframes cloud-drift-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50px);
          }
        }

        @keyframes cloud-drift-medium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50px);
          }
        }

        @keyframes color-shift {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(30deg);
          }
        }

        @keyframes text-shimmer {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.2);
            opacity: 0.7;
          }
          70%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes expand-slow {
          0% {
            transform: scale(0);
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes appear {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-cloud-drift-slow {
          animation: cloud-drift-slow 20s ease-in-out infinite alternate;
        }

        .animate-cloud-drift-medium {
          animation: cloud-drift-medium 15s ease-in-out infinite alternate;
        }

        .animate-color-shift {
          animation: color-shift 10s ease-in-out infinite alternate;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-expand-slow {
          animation: expand-slow 20s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(56, 178, 172, 0.5);
        }

        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(56, 178, 172, 0.3);
        }

        .shadow-glow-teal {
          box-shadow: 0 0 15px rgba(13, 148, 136, 0.6);
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .animate-float-slow {
          animation: float-1 6s ease-in-out infinite alternate;
        }

        .animate-float-medium {
          animation: float-2 4s ease-in-out infinite alternate;
        }

        .animate-float-fast {
          animation: float-3 3s ease-in-out infinite alternate;
        }

        .animate-float-slow-reverse {
          animation: float-1 6s ease-in-out infinite alternate-reverse;
        }

        .animate-float-medium-reverse {
          animation: float-2 4s ease-in-out infinite alternate-reverse;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-appear {
          animation: appear 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Add these to your existing style JSX global section */

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow 25s linear infinite reverse;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
      `}</style>
    </div>
  );
};

export default AboutPage;