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
   try {
      const response = await fetch("/.netlify/functions/handleRecipes", {
         method: "POST",
         headers: {
         "Content-Type": "application/json"
         },
         body: JSON.stringify({ ingredients })
      });

      const data = await response.json();

      if (response.ok) {
         setGeneratedRecipe(data.content);
         console.log("Raw Markdown Output:\n", data.content);
         getRecipe(); 
      } else {
         console.error("API error:", data.error);
      }
   } catch (err) {
      console.error("Fetch error:", err.message);
   }
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
