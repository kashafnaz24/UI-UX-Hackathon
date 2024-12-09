import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";

function RootLayout({children}:any){
  return(
    <html lang="en">
      <body>
        <Header/>
        
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
export default RootLayout;