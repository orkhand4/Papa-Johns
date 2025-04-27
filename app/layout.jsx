import "./globals.css";

export const metadata = {
  title: "PapaJohns | Pizza",
  description: "The best pizza in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
