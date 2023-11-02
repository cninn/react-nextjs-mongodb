import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";


const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "cninnmakes Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
      
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
        
        </ThemeProvider>
      </body>
    </html>
  );
}