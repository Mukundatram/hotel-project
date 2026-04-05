import "./globals.css";

export const metadata = {
  title: "Hotel Shivalay Guest House Shegaon | Comfortable & Affordable Stay",
  description:
    "Book your stay at Hotel Shivalay Guest House, Shegaon – a budget-friendly hotel near Gajanan Maharaj Temple. AC rooms, free WiFi, and family-friendly atmosphere. Best accommodation in Shegaon, Maharashtra.",
  keywords:
    "Hotel Shegaon, Shivalay Guest House, Gajanan Maharaj Temple hotel, budget hotel Shegaon, guest house Shegaon Maharashtra, affordable stay Shegaon",
  authors: [{ name: "Hotel Shivalay Guest House" }],
  openGraph: {
    title: "Hotel Shivalay Guest House Shegaon | Comfortable & Affordable Stay",
    description:
      "Budget-friendly AC rooms near Gajanan Maharaj Temple. Free WiFi, room service, and family-friendly atmosphere.",
    url: "https://hotelshivalayshegaon.com",
    siteName: "Hotel Shivalay Guest House",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Shivalay Guest House Shegaon",
    description:
      "Comfortable & Affordable Stay near Gajanan Maharaj Temple, Shegaon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Shivalay Guest House",
              description:
                "Budget-friendly hotel ideal for pilgrims and families visiting Shegaon, near Gajanan Maharaj Temple.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khamgaon Road, near Gajanan Maharaj Vatika",
                addressLocality: "Shegaon",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              telephone: "+91 98765 43210",
              priceRange: "₹800 - ₹1500",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
                { "@type": "LocationFeatureSpecification", name: "AC Rooms" },
                { "@type": "LocationFeatureSpecification", name: "Room Service" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
