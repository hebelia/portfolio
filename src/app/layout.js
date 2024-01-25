import { Inter } from "next/font/google";
import "./globals.css";
import en from "../../public/locale/en.json";
import es from "../../public/locale/es.json";
import { LanguageProvider } from "../hooks/languageContext";
import { ThemeProvider } from "../hooks/themeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hebe Lia Romeu *:･ﾟ✧",
  description: "Welcome to my portfolio website!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/img/logo.svg" type="image/svg+xml" /> */}
        <link rel="alternate icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
