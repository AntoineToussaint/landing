import clsx from "clsx";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivo = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Codefly",
  description: "Codefly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, archivo.variable)}>
        {children}
      </body>
      <script
        defer
        type="text/javascript"
        src="https://api.pirsch.io/pirsch-extended.js"
        id="pirschextendedjs"
        data-code="xxYlOgDJXp2i9vYD9zIRKNow7stI0EUR"
      ></script>
    </html>
  );
}
