import CallFloatingButton from '@/components/callfloatingbutton'
import Footer from '@/components/footer'
import React from 'react'

function layout({children}) {
  return (
    <div>
      {children}
      <CallFloatingButton />
      <Footer />
    </div>
  )
}

export default layout
