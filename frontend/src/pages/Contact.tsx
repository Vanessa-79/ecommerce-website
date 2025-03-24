import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Staggered animation for contact info items
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-teal-600 mt-1" />,
      title: "Email",
      value: "vanessa@dreamwear.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-teal-600 mt-1" />,
      title: "Phone",
      value: "+256 (785) 507-825",
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-600 mt-1" />,
      title: "Address",
      value: "Salaama\nKampala, Uganda",
    },
  ];

  // Background elements for decoration
  const decorationElements = [
    { top: "10%", left: "5%", size: "100px", delay: 0 },
    { top: "80%", left: "10%", size: "150px", delay: 0.2 },
    { top: "30%", right: "5%", size: "120px", delay: 0.4 },
    { top: "70%", right: "10%", size: "80px", delay: 0.6 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      {decorationElements.map((elem, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 rounded-full bg-teal-400"
          style={{
            top: elem.top,
            left: elem.left,
            right: elem.right,
            width: elem.size,
            height: elem.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: 0.1,
          }}
          transition={{
            duration: 2,
            delay: elem.delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl font-bold mb-6 inline-block"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 0%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #f59e0b, #10b981, #f59e0b)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We'd love to hear from you. Please fill out the form below or reach
            out using our contact information.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 backdrop-blur bg-opacity-90 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start hover:translate-x-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line hover:text-teal-600 transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative world map */}
            <motion.div
              className="mt-12 opacity-10 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <svg
                width="240"
                height="120"
                viewBox="0 0 240 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120 0C53.7 0 0 26.9 0 60s53.7 60 120 60 120-26.9 120-60S186.3 0 120 0zm0 110c-55.2 0-100-22.4-100-50s44.8-50 100-50 100 22.4 100 50-44.8 50-100 50z"
                  fill="currentColor"
                />
                <path
                  d="M120 20c-47.5 0-86 17.9-86 40s38.5 40 86 40 86-17.9 86-40-38.5-40-86-40zm-38 50.5L70 55l-10 10-10-15 10-10 12 20zm48-30.5l-10 20-10-10-10 10-10-10 20-10 20 10z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 backdrop-blur bg-opacity-90 border border-gray-100 relative"
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-20 h-20 text-teal-500 mb-4" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Thank you for reaching out to us. We'll get back to you
                    shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {["name", "email", "subject", "message"].map(
                    (field, index) => (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="relative"
                      >
                        <motion.label
                          htmlFor={field}
                          className={`block text-sm font-medium transition-all duration-300 ${
                            focusedField === field
                              ? "text-teal-600"
                              : "text-gray-700"
                          }`}
                          animate={{
                            x: focusedField === field ? 5 : 0,
                          }}
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </motion.label>

                        {field === "message" ? (
                          <textarea
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            onFocus={() => handleFocus(field)}
                            onBlur={handleBlur}
                            required
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                          />
                        ) : (
                          <input
                            type={field === "email" ? "email" : "text"}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            onFocus={() => handleFocus(field)}
                            onBlur={handleBlur}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                          />
                        )}

                        {focusedField === field && (
                          <motion.div
                            className="absolute inset-0 border-2 border-teal-500 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ zIndex: -1 }}
                          />
                        )}
                      </motion.div>
                    )
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
