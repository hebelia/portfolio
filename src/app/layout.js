import { Inter } from "next/font/google";
import "./globals.css";
import en from "../../public/locale/en.json";
import es from "../../public/locale/es.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hebe Lia Romeu *:･ﾟ✧",
  description: "Welcome to my portfolio website!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
