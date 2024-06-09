import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { usePathname } from "next/navigation";
import Footbar from "./components/Footbar/Footbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insure Chain",
  description: "Decentralised Identity Verification System",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-900 h-fit relative`}>
          
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
          {children}
          <Footbar />
          
      </body>
    </html>
  );
}
