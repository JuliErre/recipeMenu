import React from 'react'
import RecipeCard from './RecipeCard'

function CardList({recipes}) {
  return (
    <>
    {
      recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    }
    </>
  )
}

export default CardList