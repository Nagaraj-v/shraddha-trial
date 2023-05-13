import Navbar from './components/Navbar/Navbar'
import { fredoka, ubuntu } from './fonts'
import './globals.css'



export const metadata = {
  title: 'Shraddha',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
                                
  return (
    <html lang="en" className={`${ubuntu.variable} ${fredoka.variable}`}>
      <body className=' font-ubuntu'> 
      <>
        <Navbar/>

        {children}
        
        </>
      </body>
    </html>
  )
}
