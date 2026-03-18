"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";

const features = [
  {
    title: "Deterministic Attribution",
    description: "Know exactly which source drove every call. No guesswork, no probabilistic black boxes.",
    icon: "🎯"
  },
  {
    title: "NZ Telecom Integration",
    description: "Built specifically for New Zealand carriers. Local support, local numbers, local expertise.",
    icon: "📞"
  },
  {
    title: "Real-Time Dashboard",
    description: "Watch calls come in live. Track conversion paths and attribute revenue instantly.",
    icon: "📊"
  },
  {
    title: "Campaign-Level Tracking",
    description: "Track individual marketing campaigns down to the ad, keyword, and creative level.",
    icon: "🚀"
  },
  {
    title: "Call Recording & Transcription",
    description: "Automatically record and transcribe calls for quality assurance and training.",
    icon: "🎙️"
  },
  {
    title: "CRM Integration",
    description: "Push call data directly to your CRM. Sync with Salesforce, HubSpot, and more.",
    icon: "🔗"
  }
];

const pricingPlans = [
  {
    name: "LeadStream Lite",
    price: "Free",
    description: "Perfect for getting started and seeing how it works",
    features: [
      "Full call tracking (no limits on calls)",
      "Core analytics and attribution",
      "WordPress plugin included",
      "No advanced integrations",
      "Limited feature set compared to Pro"
    ],
    cta: "Get Started Free",
    highlighted: false
  },
  {
    name: "LeadStream Pro",
    price: "$99/mo",
    description: "For serious operators ready to scale",
    features: [
      "Everything in Lite",
      "Advanced CRM integrations",
      "Expanded analytics and reporting",
      "More automation and control",
      "Priority support"
    ],
    cta: "View Pro Features",
    highlighted: true
  },
  {
    name: "Lifetime Deals",
    price: "$630",
    description: "One-time payment. 8.5 years of access. You set it up yourself (DIY).",
    features: [
      "Unlimited phone numbers",
      "Unlimited calls",
      "All Pro features included",
      "Lifetime updates",
      "No onboarding included - you're on your own"
    ],
    cta: "Buy your license here",
    highlighted: false
  }
];

  const downloads = [
    {
      id: "leadstream-lite",
      title: "LeadStream Lite",
      description: "Free starter version for testing and early rollout.",
      file: "/assets/downloads/LeadStream-main.zip",
      cta: "Get Started Free"
    },
    {
      id: "leadstream-checklist",
      title: "Lead Tracking Checklist",
      description: "A simple checklist to tighten attribution and call tracking.",
      file: "/assets/downloads/leadstream-checklist.pdf",
      cta: "Download PDF"
    }
  ];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-900/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            LeadStream
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
              Features
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors text-sm">
              Pricing
            </a>
            <a href="#downloads" className="text-white/70 hover:text-white transition-colors text-sm">
              Lite
            </a>
            <a href="/thanks" className="text-white/70 hover:text-white transition-colors text-sm">
              Thanks
            </a>
            <a
              href="#pricing"
              className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-md border-b border-white/10">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#features" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#downloads" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Lite
              </a>
              <a href="/thanks" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Thanks
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Serious Operators</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything you need to track, attribute, and close more leads. No bloat, just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-neutral-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Free. Upgrade When You&apos;re Ready.</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Get real tracking in place today. Add advanced features and integrations as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl p-6 ${
                  plan.highlighted ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="bg-primary text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-white/60 text-sm mb-2">{plan.description}</p>
                {index === 0 && (
                  <p className="text-white/50 text-xs italic mb-4">
                    A practical, working version of LeadStream. Built to show you exactly how tracking works in your business before you upgrade.
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Downloads</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Grab the free LeadStream resources, starter files, and tools. More downloads will be added over time.
            </p>
          </div>

           <div className="grid md:grid-cols-2 gap-6">
             {downloads.map((item) => (
               <a
                 key={item.id}
                 href={item.file}
                 className="glass-card rounded-xl p-6 flex flex-col hover:bg-white/5 transition-colors"
               >
                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                 <p className="text-white/60 text-sm mb-4 flex-grow">{item.description}</p>
                 <a
                   href={item.file}
                   className="mt-6 inline-flex items-center justify-center py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                 >
                   {item.cta}
                 </a>
               </a>
             ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white/50 text-sm">© 2026 LeadStream. All rights reserved.</p>
            <a href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-white/50 text-sm">
            Built &amp; Maintained by{" "}
            <a
              href="https://projectstudios.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Project Studios
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
