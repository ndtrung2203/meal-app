import React from 'react'
import { useGlobalContext } from '../context'
import '../components/Meals.css'
import { FaRegThumbsUp} from 'react-icons/fa'

function Meals() {
  const {isLoading, meals, selectMeal, addMealToFavoriteFood } = useGlobalContext()
  console.log("isLoading",isLoading)
  console.log("meals", meals)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if(meals?.length < 1){
    return <div>No Meals</div>
  }
  return (
    <div className='meals'>
      {
        meals.map(meal => {
          const { idMeal: id, strMeal: name, strMealThumb: image } = meal
          return (
            <div key={id} className='itemmeal'>
              <img src= { image } alt= { name } className="imagefood" onClick={() => selectMeal(id)}/>
              <div className='infofood'>
                <p>{name}</p>
                <button onClick={() => addMealToFavoriteFood(id)}>
                  <FaRegThumbsUp />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Meals