import { Inter } from "next/font/google";
import "./globals.css";
import ProductStoreProvider from "@/store/ProductStoreProvider";
import { getServerSession } from "next-auth";
import MySessionProvider from "@/Components/SessionProvider";
import MainHeader from "@/Components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Garment Shop Website",
  description: "This website depicts the products we offer",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <MySessionProvider session={session}>
          <ProductStoreProvider>
            <MainHeader />
            {children}
          </ProductStoreProvider>
        </MySessionProvider>
      </body>
    </html>
  );
}
