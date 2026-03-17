"use client";

import { useState, useEffect } from "react";

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
    description: "Perfect for testing the waters",
    features: [
      "1 phone number",
      "100 calls/month",
      "Basic analytics",
      "Email support"
    ],
    cta: "Start Free",
    highlighted: false
  },
  {
    name: "LeadStream Pro",
    price: "$99/mo",
    description: "For growing agencies and businesses",
    features: [
      "5 phone numbers",
      "Unlimited calls",
      "Advanced analytics",
      "Call recording",
      "CRM integration",
      "Priority support"
    ],
    cta: "View Pro Managed Setup",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited numbers",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise options"
    ],
    cta: "Contact Sales",
    highlighted: false
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
            <a href="/lite" className="text-white/70 hover:text-white transition-colors text-sm">
              Lite
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
              <a href="/lite" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Lite
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45 pb-20">
        <div className="glow-gradient absolute inset-0 z-0" />
        <div className="mx-auto max-w-[900px] px-4 relative z-1">
          <div className="text-center">
            <a
              href="#features"
              className="hero-subtitle-gradient relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
            >
              <span className="hero-subtitle-text">Now Discoverable: LeadStream Beta</span>
            </a>
            <h1 className="text-white mb-6 text-4xl font-extrabold sm:text-6xl">
              Stop Guessing. <br /> Start Tracking.
            </h1>
            <p className="max-w-[600px] mx-auto mb-9 font-medium md:text-lg text-white/70">
              Deterministic call tracking and attribution built for the New Zealand service industry. No
              over-engineered fluff. Just data you can bank on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="hero-button-gradient rounded-lg py-3 px-8 text-white font-bold shadow-xl hover:scale-105 transition-transform"
              >
                View Pro Managed Setup
              </a>
              <a
                href="/lite"
                className="text-white/80 hover:text-white font-medium underline decoration-primary/50 underline-offset-4"
              >
                Try LeadStream Lite Free
              </a>
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the plan that fits your business. No hidden fees, no surprises.
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
                <p className="text-white/60 text-sm mb-6">{plan.description}</p>
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2026 LeadStream. All rights reserved.</p>
          <p className="text-white/50 text-sm">
            Built & Maintained by{" "}
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
