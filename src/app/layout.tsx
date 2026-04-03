import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/layout/Navigation";
import { Footer } from "@/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Using a template ensures all sub-pages automatically get her name appended
  title: {
    template: "%s | Queensley Sofuratu Seghosime",
    default: "Queensley Sofuratu Seghosime, mni | Tax Policy Strategist",
  },
  description:
    "Vice President of the Institute of Chartered Accountants of Nigeria (ICAN), Tax Policy Strategist, and National Reformer with over three decades of experience.",
  keywords: [
    "Queensley Sofuratu Seghosime",
    "ICAN Vice President",
    "Tax Policy Nigeria",
    "Quebaan Professional Services",
    "FIRS",
    "Tax Appeal Tribunal",
  ],
  authors: [{ name: "Queensley Sofuratu Seghosime" }],

  // Open Graph (How the link looks on LinkedIn, Facebook, Slack)
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.queensleyseghosime.com", // TODO: Update with actual domain
    siteName: "Queensley Sofuratu Seghosime Portfolio",
    title: "Queensley Sofuratu Seghosime, mni",
    description:
      "Vice President of ICAN, Tax Policy Strategist, and National Reformer.",
    images: [
      {
        url: "/og-image.jpg", // TODO: Place a 1200x630 image in the /public folder
        width: 1200,
        height: 630,
        alt: "Queensley Sofuratu Seghosime Official Portrait",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Queensley Sofuratu Seghosime, mni",
    description:
      "Vice President of ICAN, Tax Policy Strategist, and National Reformer.",
    images: ["/og-image.jpg"],
  },

  // Robot instructions ensuring Google indexes the site properly
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. JSON-LD Schema (Invisible structured data for Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Queensley Sofuratu Seghosime",
    jobTitle: "Vice President",
    worksFor: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of Nigeria (ICAN)",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Harvard University" },
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute for Policy and Strategic Studies (NIPSS)",
      },
    ],
    description:
      "Vice President of ICAN, Tax Policy Strategist, and National Reformer.",
    url: "https://www.queensleyseghosime.com", // TODO: Update
    sameAs: [
      "https://www.linkedin.com/in/her-linkedin-profile", // TODO: Update
      "https://twitter.com/her-twitter-handle", // TODO: Update
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Inject the Schema into the head of the document */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
