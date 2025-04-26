// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  BarChart,
  Mail,
  Globe,
  Search,
} from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function Services() {
  return (
    <main>
      {/* Services Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Data-driven strategies tailored to your business goals. We help you
            connect with your audience, drive traffic, and increase conversions.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-blue-900 font-medium gap-2">
            <a href="#services">Explore Our Services</a>
            <ArrowRight size={16} />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Strategic Approach
              </h2>
              <p className="text-gray-600 mb-6">
                We don't believe in one-size-fits-all solutions. Our approach
                starts with understanding your business, analyzing your market,
                and developing customized strategies that drive measurable
                results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: siteConfig.primaryColor }}
                  >
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Research & Analysis</h3>
                    <p className="text-gray-600">
                      Deep market research and competitor analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: siteConfig.primaryColor }}
                  >
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Strategy Development</h3>
                    <p className="text-gray-600">
                      Data-driven marketing plans tailored to your goals
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: siteConfig.primaryColor }}
                  >
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Implementation</h3>
                    <p className="text-gray-600">
                      Expert execution across all digital channels
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: siteConfig.primaryColor }}
                  >
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Monitoring & Optimization
                    </h3>
                    <p className="text-gray-600">
                      Continuous improvement based on performance data
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/strategic-approach.jpg"
                alt="Our strategic marketing approach"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a full suite of digital marketing services designed to
              help your business thrive online.
            </p>
          </div>

          {/* SEO Service */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div
                  className="inline-block p-3 rounded-lg mb-4"
                  style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                >
                  <Search
                    size={32}
                    style={{ color: siteConfig.primaryColor }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-gray-600 mb-6">
                  Our data-driven SEO strategies help improve your organic
                  visibility, drive targeted traffic, and increase your search
                  engine rankings for relevant keywords.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Comprehensive SEO Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Keyword Research & Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>On-Page & Technical SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Content Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Link Building & Off-Page SEO</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Learn More About Our SEO Services{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/seo-service.jpg"
                  alt="SEO Services"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* PPC Service */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:order-1 order-2">
                <Image
                  src="/images/ppc-service.jpg"
                  alt="PPC Services"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                <div
                  className="inline-block p-3 rounded-lg mb-4"
                  style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                >
                  <Target
                    size={32}
                    style={{ color: siteConfig.primaryColor }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Pay-Per-Click Advertising (PPC)
                </h3>
                <p className="text-gray-600 mb-6">
                  Our targeted PPC campaigns deliver immediate visibility and
                  drive high-quality traffic to your website, optimized for
                  maximum ROI and conversions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Google Ads & Bing Ads Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Campaign Strategy & Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Ad Copy & Creative Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Bid Management & Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Performance Tracking & Reporting</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Learn More About Our PPC Services{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Service */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div
                  className="inline-block p-3 rounded-lg mb-4"
                  style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                >
                  <Users size={32} style={{ color: siteConfig.primaryColor }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-gray-600 mb-6">
                  We help you build meaningful connections with your audience
                  through strategic social media marketing that enhances brand
                  awareness and drives engagement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Social Media Strategy Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Content Creation & Curation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Community Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Paid Social Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Performance Analytics & Reporting</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Learn More About Our Social Media Services{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/social-media-service.jpg"
                  alt="Social Media Marketing Services"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Content Marketing Service */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:order-1 order-2">
                <Image
                  src="/images/content-marketing-service.jpg"
                  alt="Content Marketing Services"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                <div
                  className="inline-block p-3 rounded-lg mb-4"
                  style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                >
                  <Mail size={32} style={{ color: siteConfig.primaryColor }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Our content marketing strategies help you attract, engage, and
                  convert your target audience through valuable, relevant
                  content that positions you as an industry authority.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Content Strategy Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Blog & Article Writing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>eBooks & White Papers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Infographics & Visual Content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Content Distribution & Promotion</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Learn More About Our Content Marketing Services{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Digital Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Complementary services that enhance your digital marketing
              strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <Mail size={28} style={{ color: siteConfig.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Build customer relationships and drive conversions with targeted
                email campaigns that deliver valuable content directly to your
                audience's inbox.
              </p>
              <Link
                href="/contact"
                className="flex items-center font-medium gap-2 group"
                style={{ color: siteConfig.primaryColor }}
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Web Design & Development */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <Globe size={28} style={{ color: siteConfig.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Web Design & Development
              </h3>
              <p className="text-gray-600 mb-6">
                Create stunning, high-performance websites that provide seamless
                user experiences, optimized for conversions and built to rank in
                search results.
              </p>
              <Link
                href="/contact"
                className="flex items-center font-medium gap-2 group"
                style={{ color: siteConfig.primaryColor }}
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <BarChart
                  size={28}
                  style={{ color: siteConfig.primaryColor }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Gain valuable insights into your marketing performance with
                comprehensive analytics and easy-to-understand reports that help
                guide your strategy.
              </p>
              <Link
                href="/contact"
                className="flex items-center font-medium gap-2 group"
                style={{ color: siteConfig.primaryColor }}
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how our digital marketing services can help your
            business reach its full potential. Schedule a free consultation
            today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-md font-medium gap-2 bg-white text-blue-900 hover:bg-blue-50 transition-colors"
          >
            Get Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
