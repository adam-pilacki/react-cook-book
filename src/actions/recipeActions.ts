import { v4 } from 'node-uuid';
import { RecipeActionsType, RecipeId, RecipeIngredients, RecipeName } from '../types/recipeTypes';

export const addRecipe = (name: RecipeName, ingredients: RecipeIngredients): RecipeActionsType => ({
  type: 'ADD_RECIPE',
  id: v4(),
  name,
  ingredients
});

export const updateRecipe = (id: RecipeId, name: RecipeName, ingredients: RecipeIngredients): RecipeActionsType => ({
  type: 'UPDATE_RECIPE',
  id,
  name,
  ingredients
});

export const deleteRecipe = (id: RecipeIngredients): RecipeActionsType => ({
  type: 'DELETE_RECIPE',
  id
});