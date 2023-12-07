// Supports weights 100-900
// Supports weights 300-900
import "@fontsource-variable/rubik";
import "./globals.css";

export const metadata = {
  title: "MundevUX | Fullstack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-primary-white dark:bg-primary-black">{children}</body>
    </html>
  );
}
