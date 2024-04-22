import React from 'react'
import { useGlobalContext } from '../context'

function Modal() {
  const { selectedMeal, setSelectedModal, setSelectedMeal } = useGlobalContext()
  const { strMealThumb: image, strMeal: name, strInstructions: description, strSource: foodLink } = selectedMeal
  return (
    <div className='modal-overlay'>
      <div className="modal-container">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h3>Cooking Instruction</h3>
        <p>{description}</p>
        <a href={foodLink} target='_blank'>Original Source</a>
        <button onClick={() => {
          setSelectedMeal({})
          selectedMeal(false)
        }}>close</button>
      </div>
    </div>
  )
}

export default Modal