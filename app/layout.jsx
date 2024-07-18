
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from "../redux/provider";
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "Opeak",
  description: "Opeak",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body className="layout-bg">
        <Providers>{children}</Providers>
        
        </body>
    </html>
  );
}
