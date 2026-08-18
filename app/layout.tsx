import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import Preloader from "@/components/Preloader";
import { OrderProvider } from "@/lib/order-context";
import { PreloaderProvider } from "@/lib/preloader-context";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = `${SITE_NAME} — Bristol, PA`;
const description = "A neighborhood beverage distributor on Route 13. Domestic cases, imports, craft, malt, and six slush machines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: { title, description, type: "website", siteName: SITE_NAME },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PreloaderProvider>
          <OrderProvider>
            <Preloader />
            <AgeGate />
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[999] focus:rounded-[10px] focus:bg-[var(--color-orange)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white">
              Skip to content
            </a>
            <Nav />
            <main id="main">{children}</main>
            <Footer />
          </OrderProvider>
        </PreloaderProvider>
      </body>
    </html>
  );
}
