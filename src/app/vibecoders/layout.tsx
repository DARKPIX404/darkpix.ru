import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://darkpix.ru"),
  title: "VibeCoders — сообщество разработчиков, AI и DevOps",
  description:
    "VibeCoders — открытое сообщество vibe-кодеров: AI-first разработка, open source, DevOps, еженедельные челленджи и эксперименты с новыми моделями.",
  openGraph: {
    title: "VibeCoders — сообщество разработчиков, AI и DevOps",
    description:
      "Открытое сообщество vibe-кодеров. Присоединяйся к челленджам, AI-экспериментам и DevOps-обсуждениям.",
    url: "https://darkpix.ru/vibecoders/",
    siteName: "VibeCoders",
    images: [
      {
        url: "/vibecoders/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeCoders Discord Community",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCoders — сообщество разработчиков, AI и DevOps",
    description:
      "Открытое сообщество vibe-кодеров. Присоединяйся к челленджам, AI-экспериментам и DevOps-обсуждениям.",
    images: ["/vibecoders/og-image.png"],
  },
};

export default function VibeCodersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
