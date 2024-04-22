import React from 'react'
import { useGlobalContext } from '../context'

function Favorite() {
  const { favoriteFood, removeMealFromFavoriteFood, selectMeal } = useGlobalContext()
  return (
    <div className='favorite-food-container'>
      <h2>Favorite Food</h2>
      <div className="favorite-food-list">
        {
          favoriteFood.map(food => {
            const { idMeal: id, strMealThumb: image } = food
            return (
              <div key={id} className='food-item'>
                <img src={image} alt="" className='food-thumbnail'onClick={()=>selectMeal(id)}/>
                <button onClick={() => removeMealFromFavoriteFood(id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Favorite