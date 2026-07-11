"use client";

export function PixelFairy() {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-12 h-12 pointer-events-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="w-full h-full pixel-fairy">
        <rect x="12" y="4" width="8" height="8" fill="#f472b6" />
        <rect x="8" y="8" width="4" height="4" fill="#f9a8d4" />
        <rect x="20" y="8" width="4" height="4" fill="#f9a8d4" />
        <rect x="12" y="12" width="8" height="8" fill="#ec4899" />
        <rect x="10" y="20" width="4" height="6" fill="#f472b6" />
        <rect x="18" y="20" width="4" height="6" fill="#f472b6" />
        <rect x="4" y="10" width="6" height="4" fill="#60a5fa" />
        <rect x="22" y="10" width="6" height="4" fill="#60a5fa" />
        <rect x="2" y="8" width="4" height="4" fill="#93c5fd" />
        <rect x="26" y="8" width="4" height="4" fill="#93c5fd" />
      </svg>

      <style jsx>{`
        .pixel-fairy {
          animation: fairy-float 3s ease-in-out infinite, fairy-flap 0.4s ease-in-out infinite alternate;
          image-rendering: pixelated;
        }
        @keyframes fairy-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fairy-flap {
          0% { transform: scaleX(1); }
          100% { transform: scaleX(0.85); }
        }
      `}</style>
    </div>
  );
}
