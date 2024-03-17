import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app w-full">
          <NavBar />

          {children}
        </main>
      </body>
    </html>
  );
}
