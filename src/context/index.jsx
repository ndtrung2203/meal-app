import React, { useContext, useEffect, useState } from 'react'
import fakeStore from '../api'
import { ALL_MEALS_URL } from '../constant/index';
 
export const AppContext = React.createContext()
export const useGlobalContext = () => {
    return useContext(AppContext)
}

function AppProvider({ children }) {
    const [meals, setMeals] = useState([])
    const [isLoading, setLoading] = useState(false)

    const [ showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState({})

    const selectMeal = (id) => {
        //console.log({id})
        const meal = meals.find(meal => meal.idMeal === id)
        //console.log({meal})
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const [favoriteFood, setFavoriteFood] = useState([])
    const addMealToFavoriteFood = (id) => {
        const meal = meals.find(meal => meal.idMeal === id)
        const alreadyFavorite = favoriteFood.find(meal => meal.idMeal ===id)
        if (alreadyFavorite) return
            const updateFavoriteFood = [...favoriteFood, meal]
            setFavoriteFood(updateFavoriteFood)
    }
    const removeMealFromFavoriteFood = (id) => {
        const updatedFavorite = favoriteFood.filter(food => food.idMeal !== id)
        setFavoriteFood(updatedFavorite)
    }
    const [mealSearch, setMealSearch] = useState('')
    console.log("search", mealSearch)
    const fetchMeals = async(url) => {
        setLoading(true)
        try {
            const response = await fakeStore().get(url)
            //console.log("response", response)
            setMeals(response.data.meals)
        } catch (error) {
            console.log("error", error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchMeals(ALL_MEALS_URL)
    }, [])
    useEffect(()=>{
        if(mealSearch)
            fetchMeals(`${ALL_MEALS_URL}${mealSearch}`)
    }, [mealSearch])
  return (
    <AppContext.Provider
    value={{
        isLoading,
        meals,
        selectMeal,
        selectedMeal,
        setSelectedMeal,
        showModal,
        setShowModal,
        favoriteFood,
        addMealToFavoriteFood,
        removeMealFromFavoriteFood,
        setMealSearch,
        fetchMeals,
    }}
    >
        { children }
    </AppContext.Provider>
  )
}

export default AppProvider