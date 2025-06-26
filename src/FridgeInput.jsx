import { useState } from 'react'
import ErrorMessage from './ErrorMessage.jsx'

function FridgeInput(props) {

    const ingredientListElements = props.ingredients.map( (ingredient,index) => {
        return <li className='text-center w-full' key={index}>{ingredient}</li>
    })

    return (
    <div className='flex flex-col items-center justify-center mt-10 bg-[#FAFAFA] border border-gray-300 rounded-2xl max-w-2xl mx-auto w-full'>

    <div className='flex flex-col items-center mt-20 mb-5'>  
        <h1 className='text-3xl font-medium'>What's in your fridge?</h1>
        <form action={props.addIngredient} className='w-full'>
            <input type='text'
            placeholder='e.g. chicken'
            name='ingredient'
            className='w-full mt-3 border border-gray-300 rounded-md px-2 py-2'/>
            <button type='submit'
            className='w-full mt-3 py-3 px-4 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500'>
            Add Recipe</button>
        </form>
        <ErrorMessage errorState={props.error}/>
    </div>
    <div className='w-full px-40'>
        {props.ingredients.length> 0 ? <h1 className='text-2xl font-semibold text-center mb-2 min-w-50 underline'>Your ingredients</h1> : null}
        <ul className='list-disc break-all w-full list-inside mb-20'>
            {ingredientListElements}
        </ul>
    </div>
    


    </div>
    )
}

export default FridgeInput