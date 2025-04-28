import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mira Analytics Dashboard",
  description: "Analytics dashboard built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen bg-[#1a2233] text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
