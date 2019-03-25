export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export type RecipeId = string;
export type RecipeName = string;
export type RecipeIngredients = string;

export type AddRecipeCallback = (name: RecipeName, ingredients: RecipeIngredients) => any;
export type UpdateRecipeCallback = (id: RecipeId, name: RecipeName, ingredients: RecipeIngredients) => any;
export type DeleteRecipeCallback = (id: RecipeId) => void;

export type RecipeEntity = {
  id: RecipeId,
  name: RecipeName,
  ingredients?: RecipeIngredients
}

type AddRecipeAction = RecipeEntity & {
  type: typeof ADD_RECIPE
}

type UpdateRecipeAction = RecipeEntity & {
  type: typeof UPDATE_RECIPE
}

type DeleteRecipeAction = {
  type: typeof DELETE_RECIPE,
  id: string
}

export type RecipeActionsType = AddRecipeAction | UpdateRecipeAction | DeleteRecipeAction;