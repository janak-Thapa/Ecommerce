import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome to the Redux toolkit Store</h2>
      <section>
        <h3 className='title'>Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home