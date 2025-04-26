// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Award,
} from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-pattern.png"
            alt="Background Pattern"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grow Your Business with Data-Driven Marketing
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                We help businesses like yours achieve measurable growth through
                strategic digital marketing solutions tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md font-medium text-center transition-all"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-md font-medium bg-white text-blue-900 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Our Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/marketing-dashboard.png"
                alt="Digital Marketing Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Brands Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="w-32 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={`/images/client-${index}.png`}
                  alt={`Client ${index}`}
                  width={120}
                  height={48}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to increase
              your online presence, drive qualified traffic, and boost
              conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Service Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <TrendingUp
                  size={28}
                  style={{ color: siteConfig.primaryColor }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Search Engine Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Improve your website's visibility in search results and drive
                organic traffic with our data-driven SEO strategies.
              </p>
              <Link
                href="/services#seo"
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

            {/* Social Media Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <Users size={28} style={{ color: siteConfig.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engage your audience and build your brand with strategic social
                media campaigns that drive awareness and loyalty.
              </p>
              <Link
                href="/services#social"
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

            {/* PPC Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div
                className="inline-block p-3 rounded-lg mb-4"
                style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
              >
                <Target size={28} style={{ color: siteConfig.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Pay-Per-Click Advertising
              </h3>
              <p className="text-gray-600 mb-4">
                Drive immediate results with targeted paid advertising campaigns
                optimized for maximum ROI and conversion.
              </p>
              <Link
                href="/services#ppc"
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

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md gap-2 text-white transition-all"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Agency?
              </h2>
              <p className="text-gray-600 mb-8">
                With years of experience and a results-driven approach, we've
                helped businesses of all sizes achieve their marketing goals and
                grow their online presence.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 mt-1"
                    size={20}
                    style={{ color: siteConfig.primaryColor }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">
                      Data-Driven Strategies
                    </h3>
                    <p className="text-gray-600">
                      We analyze market trends and user behavior to create
                      strategies backed by real data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 mt-1"
                    size={20}
                    style={{ color: siteConfig.primaryColor }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      Every business is unique. We create custom marketing plans
                      designed for your specific goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 mt-1"
                    size={20}
                    style={{ color: siteConfig.primaryColor }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Transparent Reporting</h3>
                    <p className="text-gray-600">
                      Regular, easy-to-understand reports that show exactly how
                      your campaigns are performing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="flex-shrink-0 mt-1"
                    size={20}
                    style={{ color: siteConfig.primaryColor }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">ROI Focused</h3>
                    <p className="text-gray-600">
                      We focus on driving real business results that impact your
                      bottom line, not just vanity metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/team-meeting.jpeg"
                alt="Our marketing team in a strategy session"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-end gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: siteConfig.primaryColor }}
                  >
                    96%
                  </span>
                  <span className="text-gray-600 pb-1">
                    Client
                    <br />
                    Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study/Results Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve measurable
              growth through our strategic marketing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 relative">
                <Image
                  src="/images/case-study-1.jpeg"
                  alt="Case Study: E-commerce Growth"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                    E-Commerce
                  </span>
                  <span className="font-semibold text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    SEO
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  243% Increase in Organic Traffic
                </h3>
                <p className="text-gray-600 mb-4">
                  How we helped an e-commerce store triple their organic traffic
                  and increase revenue by 156% in just 6 months.
                </p>
                <Link
                  href="/case-studies/ecommerce-growth"
                  className="flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Read Case Study{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Case Study Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 relative">
                <Image
                  src="/images/case-study-2.webp"
                  alt="Case Study: B2B Lead Generation"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                    B2B
                  </span>
                  <span className="font-semibold text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    PPC
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  187% More Qualified Leads
                </h3>
                <p className="text-gray-600 mb-4">
                  How our targeted PPC campaign helped a B2B SaaS company almost
                  double their qualified leads while reducing cost per
                  acquisition.
                </p>
                <Link
                  href="/case-studies/b2b-lead-generation"
                  className="flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Read Case Study{" "}
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

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 text-gray-800 relative shadow-xl">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
              <p className="italic mb-6">
                "Working with this team has transformed our online presence.
                Their strategic approach to SEO and content marketing has helped
                us rank for competitive keywords we never thought possible."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Client portrait"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">
                    Marketing Director, TechCorp
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 text-gray-800 relative shadow-xl">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
              <p className="italic mb-6">
                "Our PPC campaigns were bleeding money before we found this
                agency. They completely restructured our approach and now our
                cost per lead is down 40% while conversions are up."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpg"
                    alt="Client portrait"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Mark Williams</h4>
                  <p className="text-gray-600 text-sm">
                    CEO, GrowthBiz Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 text-gray-800 relative shadow-xl">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
              <p className="italic mb-6">
                "Their social media team doesn't just post content—they create
                engagement strategies that have built a true community around
                our brand. The results speak for themselves."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-3.jpg"
                    alt="Client portrait"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lisa Chen</h4>
                  <p className="text-gray-600 text-sm">Founder, StyleHouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how our digital marketing expertise can help your
            business reach its full potential. Schedule a free consultation
            today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-md font-medium gap-2 text-white transition-all"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Get Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Latest Marketing Insights
              </h2>
              <p className="text-gray-600">
                Expert tips and trends to help your business stay ahead.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 flex items-center font-medium gap-2 group"
              style={{ color: siteConfig.primaryColor }}
            >
              View All Articles{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 relative">
                <Image
                  src="/images/blog-1.png"
                  alt="SEO Strategies for 2025"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Apr 20, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  5 SEO Strategies That Will Dominate in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay ahead of the competition with these emerging SEO
                  techniques that are reshaping the digital landscape.
                </p>
                <Link
                  href="/blog/seo-strategies-2025"
                  className="flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Read Article{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 relative">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Social Media Trends"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Apr 15, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  The Social Media Trends Reshaping Marketing
                </h3>
                <p className="text-gray-600 mb-4">
                  From AI-driven content to immersive experiences, discover how
                  social platforms are evolving and what it means for your
                  brand.
                </p>
                <Link
                  href="/blog/social-media-trends"
                  className="flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Read Article{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 relative">
                <Image
                  src="/images/blog-3.png"
                  alt="Conversion Rate Optimization"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Apr 8, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  7 CRO Techniques to Double Your Conversion Rate
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple yet powerful conversion rate optimization strategies
                  that can transform your website's performance.
                </p>
                <Link
                  href="/blog/cro-techniques"
                  className="flex items-center font-medium gap-2 group"
                  style={{ color: siteConfig.primaryColor }}
                >
                  Read Article{" "}
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
    </main>
  );
}
