import React from 'react';
import RecipeComponent from './Recipe';
import { RecipeEntity, UpdateRecipeCallback, DeleteRecipeCallback } from '../types/recipeTypes';

type RecipeListProps = {
  recipes: RecipeEntity[],
  updateRecipe: UpdateRecipeCallback,
  deleteRecipe: DeleteRecipeCallback,
}

const RecipeList = ({ recipes, updateRecipe, deleteRecipe }: RecipeListProps) => {
  // DEBUG::TMP [gold]
  /* eslint-disable */
  console.group(
    `%c components: RecipeList`,
    'background: #332a00; color: #f7d497; padding: 4px;'
  );
  console.log('recipes', recipes);
  console.groupEnd();
  // DEBUG::TMP

  if (recipes && recipes.length) {
    return (
      <ul className='recipe-list'>
        {recipes.map(recipe => (
          <RecipeComponent key={recipe.id}
                           recipe={recipe}
                           updateRecipe={updateRecipe}
                           deleteRecipe={deleteRecipe} />
        ))}
      </ul>
    );
  }

  return (
    <span className='recipe-list'>
            <h3>No recipes added yet...</h3>
        </span>
  );
};

export default RecipeList;