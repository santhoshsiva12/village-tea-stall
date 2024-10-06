import localFont from "next/font/local";
import "./globals.css";
import MettaTags from "./components/MettaTags";
import { Providers } from "./redux/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children, title, description }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Pass dynamic meta tags */}
          <MettaTags title={title} description={description} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
