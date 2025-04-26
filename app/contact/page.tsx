// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <main>
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or ready to start your next project? We're here to
            help you grow your business with our digital marketing expertise.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <main className="py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and one of our digital marketing
                specialists will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll be in touch
                    with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a Service</option>
                      <option value="SEO">
                        Search Engine Optimization (SEO)
                      </option>
                      <option value="PPC">
                        Pay-Per-Click Advertising (PPC)
                      </option>
                      <option value="Social Media">
                        Social Media Marketing
                      </option>
                      <option value="Content">Content Marketing</option>
                      <option value="Email">Email Marketing</option>
                      <option value="Web Design">
                        Web Design & Development
                      </option>
                      <option value="Not Sure">Not Sure / Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium transition-colors"
                      style={{ backgroundColor: siteConfig.primaryColor }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${siteConfig.primaryColor}20`,
                      }}
                    >
                      <Mail
                        size={24}
                        style={{ color: siteConfig.primaryColor }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${siteConfig.primaryColor}20`,
                      }}
                    >
                      <Phone
                        size={24}
                        style={{ color: siteConfig.primaryColor }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(
                          /\s/g,
                          ""
                        )}`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${siteConfig.primaryColor}20`,
                      }}
                    >
                      <MapPin
                        size={24}
                        style={{ color: siteConfig.primaryColor }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Office Location</h3>
                      <p className="text-gray-600">
                        123 Marketing Street
                        <br />
                        Digital City, DC 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </main>
  );
}
