import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Walmart 2.0",
  description: "My Walmart clone",
};

export default function RootLayout({ children, modal}) {
  return (
    <html lang="en">
      <body
        className=''
      >
            <Header/>
        <div className="flex"> 
        {modal}
        {children}
        </div>
        
      </body>
    </html>
  );
}
