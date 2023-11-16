import type { Metadata } from "next";
import { Archivo, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
