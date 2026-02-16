import { Providers } from "./providers";
import { Footer } from "@/components/ui/large-name-footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import "../styles/index.css";
import Navbar from "@/components/Common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "Hz-hzNiyCaTNP8nKYrwBsXnQvfdvVv4gzWStZUaYP8U"
  }
};
const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script src=" https://hoox.s3.us-east-1.amazonaws.com/157d5fdb2e0f9ab3-classyendeavors.com-hoox.js" async></script>
      </head>

      <body className={`${poppins.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <script src=" https://hoox.s3.us-east-1.amazonaws.com/6286884918483e7d-www.classyendeavors.com-hoox.js" async></script>
      </body>
    </html>
  );
}

