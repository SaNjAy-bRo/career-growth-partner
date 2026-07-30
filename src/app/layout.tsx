import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Growth Partners | LinkedIn Profile Makeover for Students & Job Seekers",
  description:
    "At Career Growth Partners, we turn LinkedIn profiles into recruiter-ready opportunity magnets. Helping students, freshers, and job seekers get noticed by hiring managers.",
  keywords: [
    "Career Growth Partners",
    "LinkedIn Profile Optimization",
    "Student Branding",
    "Fresher Positioning",
    "Job Search Strategy",
    "Personal Branding",
    "Resume Writing",
    "Bengaluru Career Coaching",
  ],
  authors: [{ name: "Career Growth Partners" }],
  openGraph: {
    title: "Career Growth Partners - Building Professionals",
    description:
      "We turn LinkedIn profiles into opportunity magnets. Get noticed by recruiters and land more interview calls.",
    url: "https://careergrowthpartners.com",
    siteName: "Career Growth Partners",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-cgp-bg text-white selection:bg-cgp-cyan selection:text-cgp-bg">
        {children}
      </body>
    </html>
  );
}
