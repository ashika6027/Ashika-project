import React from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen p-6">
      {/* Hero Section */}
      <motion.header className="text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-extrabold text-blue-400 animate-fade-in">About Us</h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Empowering legal professionals and students with AI-driven legal research and education.
        </p>
      </motion.header>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["John Doe - Founder & Legal Expert", "Jane Smith - AI Researcher", "Alex Brown - Lead Developer"].map((member, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="bg-gray-800 p-6 rounded-xl text-center shadow-xl">
                <CardContent>
                  <h3 className="text-xl font-semibold text-blue-200">{member.split(" - ")[0]}</h3>
                  <p className="text-gray-400">{member.split(" - ")[1]}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">Our Journey</h2>
        <motion.ul className="text-gray-400 max-w-3xl mx-auto space-y-4 border-l-4 border-blue-400 pl-6" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <li><strong>2023:</strong> Project conceptualized and development began.</li>
          <li><strong>2024:</strong> AI-powered legal research platform launched.</li>
          <li><strong>2025:</strong> Expanded to include legal education and collaboration tools.</li>
        </motion.ul>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <CardContent>
                <h3 className="text-xl font-semibold text-blue-200">Reach Out</h3>
                <p className="text-gray-400 mt-2 flex items-center"><Mail className="mr-2" /> support@legalai.com</p>
                <p className="text-gray-400 mt-2 flex items-center"><Phone className="mr-2" /> +91 9876543210</p>
                <p className="text-gray-400 mt-2 flex items-center"><MapPin className="mr-2" /> New Delhi, India</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <CardContent>
                <h3 className="text-xl font-semibold text-blue-200">Message Us</h3>
                <Input type="text" placeholder="Your Name" className="bg-gray-700 text-white mb-4" />
                <Input type="email" placeholder="Your Email" className="bg-gray-700 text-white mb-4" />
                <Input type="text" placeholder="Your Message" className="bg-gray-700 text-white mb-4" />
                <Button className="bg-blue-500 hover:bg-blue-600 w-full">Send Message</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <Button className="bg-blue-600 hover:bg-blue-700">Twitter</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">LinkedIn</Button>
          <Button className="bg-red-500 hover:bg-red-600">YouTube</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;