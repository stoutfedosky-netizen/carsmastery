import "./globals.css";
export const metadata = { title: "CARS Mastery", description: "MCAT-style CARS practice." };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
