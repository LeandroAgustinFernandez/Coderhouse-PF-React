import React from 'react'
import ItemsListContainer from './Components/Items/ItemsListContainer'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <ItemsListContainer greetings="Bienvenido a Libre Mercado!"/>
      </header>
    </>
  )
}

export default App
