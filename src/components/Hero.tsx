"use client";

import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-base-gradient" />
      <div className="hero-texture-layer" />
      <ParticleCanvas className="hero-particles" />
      <div className="hero-content max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-12">
        <div className="text-center w-full">
          <a
            href="#features"
            className="hero-subtitle-gradient relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
          >
            <span className="hero-subtitle-text">Now Discoverable: LeadStream Beta</span>
          </a>
          <h1 className="text-white mb-6 text-4xl font-extrabold sm:text-6xl leading-tight">
            Stop Guessing. <br /> Start Tracking.
          </h1>
          <p className="mb-9 font-medium md:text-lg text-white/70 max-w-[600px] mx-auto">
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
              href="#downloads"
              className="text-white/80 hover:text-white font-medium underline decoration-primary/50 underline-offset-4 py-3"
            >
              Try LeadStream Lite Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
