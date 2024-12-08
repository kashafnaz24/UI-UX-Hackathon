/* eslint-disable @typescript-eslint/no-explicit-any */
import "./globals.css";

function RootLayout({children}:any){
  return(
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  )
}
export default RootLayout;