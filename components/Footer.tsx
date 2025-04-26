// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span
                className="ml-3 text-xl font-bold"
                style={{
                  color: siteConfig.primaryColor,
                  fontFamily: siteConfig.fontFamily,
                }}
              >
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="px-4 py-2 text-sm rounded-md text-white transition-colors duration-200"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
