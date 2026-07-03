import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Henry Aruna Nelson | IT Professional & Aspiring Cybersecurity Specialist",
  description:
    "Portfolio of Henry Aruna Nelson — IT graduate, National Service at Hollard Insurance Ghana, with a focus on cybersecurity, web development, and building practical tech solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t border-mint/10 py-8 text-center text-slate-muted text-sm font-mono">
            <span className="text-mint/60">{"</>"}</span>{" "}
            <span className="dark:text-slate-muted text-navy/50">
              Built with Next.js by Henry Aruna Nelson · {new Date().getFullYear()}
            </span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
