import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dzamfbr.my.id";
const siteName = "Dzamfbr Portfolio";
const siteTitle = "Dzamfbr Portfolio | Dimas Azzam - Web & Software Developer";
const siteDescription =
  "Portofolio resmi Dimas Azzam, siswa SMK Negeri 1 Jakarta yang berfokus pada Software Development dan Web Development. Menampilkan karya, skill, proyek modern, dan pengalaman teknologi.";
const defaultImage = `${siteUrl}/screenshoot_portofolio_web_dzamfbr.png`;
const logoUrl = `${siteUrl}/logo_dzamfbr.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: "%s | Dzamfbr Portfolio",
  },
  description: siteDescription,
  keywords: [
    "dzamfbr",
    "dimas azzam",
    "portfolio dzamfbr",
    "web developer indonesia",
    "software developer indonesia",
    "smk negeri 1 jakarta",
    "nextjs developer",
    "react developer",
    "programmer indonesia",
    "ui ux designer",
    "frontend developer jakarta",
  ],
  authors: [{ name: "Dimas Azzam", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
    },
  },
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
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "id_ID",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Dzamfbr Portfolio - Dimas Azzam Web & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@dzamfbr",
    site: "@dzamfbr",
    images: [
      {
        url: defaultImage,
        alt: "Dzamfbr Portfolio preview",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo_dzamfbr.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo_dzamfbr.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#0f172a",
    "msapplication-TileColor": "#0f172a",
  },
  verification: {
    google: "aKhU8L1yQwyP-eVMJTNdVclbeNCx0tFHwavXih5q-zM",
  },
};

// Menggabungkan JSON-LD Terpadu dengan Skema Graph (Optimal untuk Google & AI Engine)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: "Dzamfbr",
      url: siteUrl,
      inLanguage: "id-ID",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dimas Azzam",
      alternateName: ["Dzamfbr", "dzamfbr", "Dimas Azzam Portfolio"],
      url: siteUrl,
      jobTitle: ["Software Developer", "Web Developer"],
      description:
        "Siswa SMK Negeri 1 Jakarta yang berfokus pada Software Development dan Web Development. Berpengalaman dalam membangun aplikasi dan website modern yang mengutamakan performa, fungsionalitas, serta pengalaman pengguna yang optimal.",
      image: defaultImage,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "SMK Negeri 1 Jakarta",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressCountry: "ID",
        },
      },
      knowsAbout: [
        "Software Development",
        "Web Development",
        "Frontend Development",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "UI/UX Design",
        "User Experience",
        "Web Performance Optimization",
      ],
      sameAs: [
        "https://www.instagram.com/dzamfbr/",
        "https://github.com/dzamfbr",
        "https://www.youtube.com/@rayoonn_5",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: siteTitle,
      url: siteUrl,
      description: siteDescription,
      inLanguage: "id-ID",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#primaryimage`,
        url: defaultImage,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="light" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Menyuntikkan 1 script JSON-LD terpadu untuk SEO & AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
