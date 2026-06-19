import "./globals.css";

export const metadata = {
  title: "CARS Mastery V5",
  description: "MCAT-style CARS practice with auth, admin structure, and subscription-ready pages."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
