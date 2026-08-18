import { SITE_NAME, SITE_URL } from "@/lib/site";

const business = {
  "@context": "https://schema.org",
  "@type": "LiquorStore",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: "+12674482337",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2664 Bristol Pike",
    addressLocality: "Bristol",
    addressRegion: "PA",
    postalCode: "19007",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "19:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", bestRating: "5" },
};

export default function StructuredData() {
  // JSON.stringify never escapes "<", so a literal "</script>" in a string value
  // would break out of this tag. Data here is static, but escape defensively.
  const json = JSON.stringify(business).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
