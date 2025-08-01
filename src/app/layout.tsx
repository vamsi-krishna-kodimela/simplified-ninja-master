import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { Montserrat, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.className} ${montserrat.className}`}>
      <head>
        <link rel="icon" href="/simplified-ninja-icon.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
