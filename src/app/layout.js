
import "./globals.css";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import { RequestContextProvider } from "./context/index";

export const metadata = {
  title: "Queenios App",
  description: "Queenios App",
};

export default function RootLayout({ children }) {
  return (
    <RequestContextProvider>  
      <html lang="en">
        <body >
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
          </body>
      </html>
    </RequestContextProvider>
  );
}
