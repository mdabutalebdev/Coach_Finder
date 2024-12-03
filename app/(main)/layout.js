import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
         <Navbar />
            <main>{children}</main>
           <Footer />
    </div>
  )
}

export default layout