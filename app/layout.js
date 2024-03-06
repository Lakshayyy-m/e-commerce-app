import { Inter } from "next/font/google";
import "./globals.css";
import LoginHeader from "@/Components/LoginHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Garment Shop Website",
  description: "This is website depicts the products we offer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginHeader />
        {children}
      </body>
    </html>
  );
}
