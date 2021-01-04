import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Container = ({ children }) => {
  return (
        <main>
            <Header></Header>
            {children}
            <Footer></Footer>
        </main>
  )
}

export default Container
