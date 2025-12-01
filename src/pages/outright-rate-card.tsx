import React, { useState } from 'react';
import { Mail, Phone, Globe, Check, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OutrightCreators() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const packages = [
    {
      name: "Branding Only",
      price: "₹25,000",
      period: "/month",
      hook: "Build a brand that looks—and sells—like a leader.",
      ideal: "Consistent brand presence without ad spend",
      features: [
        "Brand identity alignment via discovery call",
        "Brand strategy foundation",
        "10 image creatives + 5 videos/month",
        "Posting included"
      ],
      highlighted: false
    },
    {
      name: "Brand Strategy + Lead Gen",
      price: "₹45,000",
      period: "/month",
      hook: "Strategy meets scale: Leads that actually convert.",
      ideal: "Meta Ads: ₹20K | Google PPC: ₹30K",
      features: [
        "Market potential study",
        "Lead gen strategy & conversion path",
        "10 creatives + 5 videos/month",
        "Posting + 22 days operational support"
      ],
      highlighted: false
    },
    {
      name: "Performance Marketing",
      price: "₹90,000",
      period: "/month",
      hook: "Serious growth for serious brands.",
      ideal: "Full ecommerce & performance optimization",
      features: [
        "Everything in Branding + Lead Gen",
        "Full ecommerce sales strategy",
        "Performance optimization across channels",
        "Market study + competitive analysis",
        "Advanced funnels & retargeting"
      ],
      highlighted: true
    },
    {
      name: "AI Content Package",
      price: "₹23,000",
      period: "/month",
      hook: "Smart content. Smaller budget.",
      ideal: "AI-powered content creation",
      features: [
        "10 AI-generated image creatives",
        "5 AI-generated videos",
        "Client handles posting"
      ],
      highlighted: false
    }
  ];

  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#410831] via-[#410831] to-[#410831]/50 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white text-purple-900 z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {/* Logo -> Home */}
              <Link to="/" className="flex items-center">
                <img
                  src="/images/Outright Creators Logo_Purple and Yellow (2).png"
                  alt="outright logo"
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={scrollToPackages} className="hover:text-purple-400 transition">Packages</button>
              <button onClick={scrollToContact} className="hover:text-purple-400 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <button onClick={scrollToPackages} className="block w-full text-left hover:text-purple-400 transition">Packages</button>
              <button onClick={scrollToContact} className="block w-full text-left hover:text-purple-400 transition">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 mb-12">
       
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-[90vh] object-cover"
          src="/images/outright.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
          <div className="absolute inset-0 bg-white/65 h-[90vh]"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center text-white ">
          <h1 className="mt-4 pt-16 text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#410831] via-[#FFCC29] to-[#410831] bg-clip-text text-transparent">
            Social Media Marketing
            <br />
            Rate Card
          </h1>

          <p className="text-2xl sm:text-3xl text-[#410831] mb-12">
            Bold Brands. Bigger Reach. Better Results.
          </p>

          <button
            onClick={scrollToPackages}
            className="bg-gradient-to-r from-[#ffcc29] to-[#410831] hover:from-[#ffcc29] hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            View Packages <ArrowRight size={20} />
          </button>
        </div>
      </section>


      {/* Why Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#410831]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strategic Brand Thinking",
                desc: "We align your brand with market reality and audience intent"
              },
              {
                title: "Strong Design Identity",
                desc: "Creatives that stop the scroll and reflect authority"
              },
              {
                title: "Performance-Driven Execution",
                desc: "Campaigns optimized for conversions, not vanity metrics"
              },
              {
                title: "Transparent Pricing",
                desc: "Clear packages. Measurable ROI. No fluff."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
                <div className="w-12 h-12 bg-[#ffcc29] rounded-lg flex items-center justify-center mb-4">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Growth Path</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">Select the package that matches your ambition</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 ${pkg.highlighted
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 transform scale-105 shadow-2xl'
                    : 'bg-slate-800/50 border border-purple-500/20'
                  } transition hover:transform hover:scale-105`}
              >
                {pkg.highlighted && (
                  <div className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-300">{pkg.period}</span>
                </div>

                <p className="text-sm italic mb-4 text-purple-200">"{pkg.hook}"</p>
                <p className="text-sm text-gray-300 mb-6 font-semibold">{pkg.ideal}</p>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <Check size={18} className="mt-1 flex-shrink-0 text-purple-300" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition ${pkg.highlighted
                    ? 'bg-white text-purple-900 hover:bg-gray-100'
                    : 'bg-purple-600 hover:bg-purple-700'
                  }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#410831]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Package Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-4 px-4 font-bold">Feature</th>
                  <th className="py-4 px-4 font-bold text-center">Branding</th>
                  <th className="py-4 px-4 font-bold text-center">Lead Gen</th>
                  <th className="py-4 px-4 font-bold text-center bg-[#ffcc29]">Performance</th>
                  <th className="py-4 px-4 font-bold text-center">AI Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-500/10">
                  <td className="py-4 px-4">Price</td>
                  <td className="py-4 px-4 text-center">₹25K</td>
                  <td className="py-4 px-4 text-center">₹45K</td>
                  <td className="py-4 px-4 text-center bg-[#ffcc29] font-bold">₹90K</td>
                  <td className="py-4 px-4 text-center">₹23K</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td className="py-4 px-4">Creatives</td>
                  <td className="py-4 px-4 text-center">10+5</td>
                  <td className="py-4 px-4 text-center">10+5</td>
                  <td className="py-4 px-4 text-center bg-[#ffcc29]">10+5</td>
                  <td className="py-4 px-4 text-center">10+5</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td className="py-4 px-4">Posting</td>
                  <td className="py-4 px-4 text-center"><Check className="mx-auto text-green-400" size={20} /></td>
                  <td className="py-4 px-4 text-center"><Check className="mx-auto text-green-400" size={20} /></td>
                  <td className="py-4 px-4 text-center bg-[#ffcc29]"><Check className="mx-auto text-green-400" size={20} /></td>
                  <td className="py-4 px-4 text-center"><X className="mx-auto text-red-400" size={20} /></td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td className="py-4 px-4">Ad Management</td>
                  <td className="py-4 px-4 text-center"><X className="mx-auto text-red-400" size={20} /></td>
                  <td className="py-4 px-4 text-center"><Check className="mx-auto text-green-400" size={20} /></td>
                  <td className="py-4 px-4 text-center bg-[#ffcc29]"><Check className="mx-auto text-green-400" size={20} /></td>
                  <td className="py-4 px-4 text-center"><X className="mx-auto text-red-400" size={20} /></td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Strategy Type</td>
                  <td className="py-4 px-4 text-center text-sm">Brand</td>
                  <td className="py-4 px-4 text-center text-sm">Lead Gen</td>
                  <td className="py-4 px-4 text-center bg-[#ffcc29] text-sm font-bold">Full Funnel</td>
                  <td className="py-4 px-4 text-center text-sm">AI-Powered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Build Your Growth Engine</h2>
          <p className="text-2xl text-purple-300 mb-12">Your brand deserves bold.</p>

          <div className="bg-slate-800/50 border border-purple-500/20 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:khash@outrightcreators.com" className="flex items-center justify-center gap-3 hover:text-purple-400 transition">
                <Mail size={24} />
                <span>khash@outrightcreators.com</span>
              </a>
              <a href="tel:+916300380596" className="flex items-center justify-center gap-3 hover:text-purple-400 transition">
                <Phone size={24} />
                <span>+91 63003 80596</span>
              </a>
              <a href="https://outrightcreators.com" className="flex items-center justify-center gap-3 hover:text-purple-400 transition">
                <Globe size={24} />
                <span>outrightcreators.com</span>
              </a>
            </div>

          </div>

          <Link to="tel:+916300380596" className="flex items-center align-items-center justify-center">
            <button className="bg-gradient-to-r from-[#ffcc29] to-[#410831] hover:from-[#ffcc29] hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-full text-xl font-semibold transition transform hover:scale-105">
              Book a Discovery Call
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 text-center text-gray-400">
        <p>© 2025 Outright Creators. All rights reserved.</p>
      </footer>
    </div>
  );
}