import React, { useState } from 'react'
import { useGlobalContext } from '../context'
//import { text } from 'express'
import { ALL_MEALS_URL, RANDOM_MEALS_URL } from '../constant'
import '../components/Search.css'

function Search() {
  const [text, setText] = useState('')
  const { setMealSearch, fetchMeals } = useGlobalContext()
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text){
      setMealSearch(text)
      setText('')
    }
  }
  const handleShowAllMeal = () => {
    fetchMeals(RANDOM_MEALS_URL)
  }
  const handleRandomMeal = () => {
    fetchMeals(ALL_MEALS_URL)
  }
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Search' value={text} onChange={handleInputChange}/>
        <button className="btn btn-search" type='submit'>Search</button>
        <button onClick={handleRandomMeal} className="btn btn-random"type='button'>Random Meal</button>
        <button onClick={handleShowAllMeal} className='btn' type='button'>Show All Meal</button>
      </form>
    </div>
  )
}

export default Search