import SiteTheme from "@/components/SiteTheme";

export const metadata = {
  title: "Home Vision Finance",
  description: "High-converting home loan landing page for Home Vision Finance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteTheme />
        {children}
      </body>
    </html>
  );
}
