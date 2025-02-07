import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./components/styledComponentsRegistry";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import AuthProvider from "./context/AuthProvider";

//Componets
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import PageContentContainer from "./components/PageContentContainer";
import GoogleLogin from "./components/GoogleLogin";
import User from "./components/User";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paracelis Wonders",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <AuthProvider>
            <MainContainer>
              <Header />
              <PageContentContainer>
                {children}
              </PageContentContainer>
              <Footer />
              {
                session?.user? <User name={session.user.name as string} email={session.user.email as string} dp={session.user.image? session.user.image : '/user.png' } /> :  <GoogleLogin />
              }
            </MainContainer>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
