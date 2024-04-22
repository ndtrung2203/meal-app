import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './components/Meals'
import { useGlobalContext } from './context'
import Modal from './components/Modal'
import Favorite from './components/Favorite'
import Search from './components/Search'

function App() {
  const {showModal, favoriteFood} = useGlobalContext()
  return (
    <div>
      <Search/>
      {favoriteFood.length > 0 && <Favorite/>}
      <Meals/>
      {showModal && <Modal/>}
    </div>
  )
}

export default App
