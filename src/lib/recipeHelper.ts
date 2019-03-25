import { RecipeEntity, RecipeId, RecipeIngredients, RecipeName } from '../types/recipeTypes';

export const prepareIngredients = (rawIngredients: RecipeIngredients | null | undefined) => {
  if (!rawIngredients) {
    return '';
  }

  return rawIngredients.split(',')
    .map(ingredient => ingredient.trim())
    .filter(ingredient => ingredient)
    .join(',');
};

export const prepareName = (rawName: RecipeName | null | undefined) => {
  if (!rawName) {
    return '';
  }

  return rawName.trim();
};

export const addRecipe = (recipes: RecipeEntity[], newRecipe: RecipeEntity): RecipeEntity[] => {
  return [
    ...recipes,
    newRecipe,
  ];
};

export const updateRecipe = (recipes: RecipeEntity[], updatedRecipe: RecipeEntity): RecipeEntity[] => {
  const updatedIndex = recipes.findIndex(
    (item: RecipeEntity) => item.id === updatedRecipe.id
  );
  return [
    ...recipes.slice(0, updatedIndex),
    updatedRecipe,
    ...recipes.slice(updatedIndex + 1)
  ];
};

export const removeRecipe = (recipes: RecipeEntity[], id: RecipeId) => {
  const removeIndex = recipes.findIndex(
    (item: RecipeEntity) => item.id === id
  );
  return [
    ...recipes.slice(0, removeIndex),
    ...recipes.slice(removeIndex + 1)
  ];
};