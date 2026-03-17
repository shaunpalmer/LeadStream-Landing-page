"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Thanks() {
  const searchParams = useSearchParams();

  const source = searchParams.get("utm_source");
  const medium = searchParams.get("utm_medium");
  const campaign = searchParams.get("utm_campaign");
  const content = searchParams.get("utm_content");
  const term = searchParams.get("utm_term");

  const hasUtmData = source || medium || campaign;

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-xl font-bold">
            LeadStream
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-4">Thanks for Your Purchase!</h1>
          <p className="text-white/70 text-lg mb-8">
            Your order has been confirmed. Check your email for setup instructions.
          </p>

          {hasUtmData && (
            <div className="glass-card rounded-xl p-6 text-left mt-8">
              <h2 className="text-sm font-medium text-white/50 uppercase mb-4">
                Attribution Data (for your records)
              </h2>
              <div className="space-y-2 text-sm">
                {source && (
                  <p>
                    <span className="text-white/50">Source:</span>{" "}
                    <span className="text-white">{source}</span>
                  </p>
                )}
                {medium && (
                  <p>
                    <span className="text-white/50">Medium:</span>{" "}
                    <span className="text-white">{medium}</span>
                  </p>
                )}
                {campaign && (
                  <p>
                    <span className="text-white/50">Campaign:</span>{" "}
                    <span className="text-white">{campaign}</span>
                  </p>
                )}
                {content && (
                  <p>
                    <span className="text-white/50">Content:</span>{" "}
                    <span className="text-white">{content}</span>
                  </p>
                )}
                {term && (
                  <p>
                    <span className="text-white/50">Term:</span>{" "}
                    <span className="text-white">{term}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          <Link
            href="/"
            className="inline-block mt-8 bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
