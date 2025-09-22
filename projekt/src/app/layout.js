import HeaderComponent from "@/components/ui/header";
import "./globals.css";
import FooterComponent from "@/components/ui/footer";

export const metadata = {
  title: "SwapHub",
  description: "SwapHub is a flea market website that let's people swap used stuff with eachother",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <main>
        {children}
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
