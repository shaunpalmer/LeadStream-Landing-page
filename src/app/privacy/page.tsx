"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            LeadStream
          </Link>
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60 mb-8">
            Clean, simple — we collect only what&apos;s necessary.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Information we collect</h2>
              <p className="text-white/70">
                We collect information you provide directly (email, contact forms) and anonymised usage data via standard analytics. We do not sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How we use information</h2>
              <p className="text-white/70">
                To respond to inquiries, process purchases, and improve products and site performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Third-party services</h2>
              <p className="text-white/70">
                We use third-party services (payment processors, analytics). Their policies apply where relevant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-white/70">
                Questions? Email{" "}
                <a
                  href="mailto:admin@projectstudios.co.nz"
                  className="text-primary hover:underline"
                >
                  admin@projectstudios.co.nz
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
