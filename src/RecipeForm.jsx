import { useState } from 'react'

function RecipeForm(props) {

    return (
        <>
        <div className='bg-[#f2e0bf] flex flex-row justify-center items-center mx-auto max-w-2xl my-10 p-8 rounded-4xl border border-gray-300'>
            <div className='flex flex-col gap-3 w-[60%]'>
                <h1 className='font-bold text-xl'>Ready for a Recipe?</h1>
                <h3 className='text-black/50'>Generate a recipe with your ingredients</h3>
            </div>
            <div>
                <button className="bg-[#cca77e] hover:bg-[#fcce9d] text-white font-semibold p-4 rounded-2xl" 
                onClick={props.handleGeneratedRecipe}
                >Generate Recipe</button>
            </div>
        </div>
        </>

    )
}

export default RecipeForm