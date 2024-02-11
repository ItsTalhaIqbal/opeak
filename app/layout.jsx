
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Opeak",
  description: "Opeak",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body className="layout-bg">{children}</body>
    </html>
  );
}
