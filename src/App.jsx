import { useState } from 'react'
import './App.css'

import Header from './Header.jsx'
import FridgeInput from './FridgeInput.jsx'
import RecipeForm from './RecipeForm.jsx'
import GeneratedRecipe from './GeneratedRecipe.jsx'
import { getRecipeFromMistral } from './ai.js'

function App() {
   const [ingredients, setIngredients] = useState([])
   const [recipeStatus, setRecipeStatus] = useState(false)
   const [error, setError] = useState(false)

    function getRecipe() {
      setRecipeStatus(true)
      console.log('button clicked')
    }

   function addIngredient(formData) {
        const addedIngredient= formData.get("ingredient").trim()
        if (addedIngredient !== "") {
            setIngredients(prevIngredients => [...prevIngredients, addedIngredient])
            setError(false)
        } else {
            setError(true)
        }
    }

   const [generatedRecipe, setGeneratedRecipe] = useState("")
   async function handleGeneratedRecipe() {
      const markdown = await getRecipeFromMistral(ingredients);
      setGeneratedRecipe(markdown);
      console.log("Raw Markdown Output:\n", markdown);
      getRecipe();
   }

   return (
   <div className='bg-[#FFF7F0] min-h-screen'>
      <Header />
      <FridgeInput ingredients={ingredients} addIngredient={addIngredient} error={error}/>
      <RecipeForm handleGeneratedRecipe={handleGeneratedRecipe}/>
      <GeneratedRecipe status={recipeStatus} generatedRecipe={generatedRecipe}/>
   </div>
   )
}

export default App
