import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
