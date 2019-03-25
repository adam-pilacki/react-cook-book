import { addRecipe, prepareIngredients, prepareName, removeRecipe, updateRecipe } from '../lib/recipeHelper';
import { RecipeActionsType, RecipeEntity, RecipeId, RecipeIngredients } from '../types/recipeTypes';

const recipesReducer = (state: RecipeEntity[] = [], action: RecipeActionsType): RecipeEntity[] => {
  // DEBUG::TMP [blue]
  /* eslint-disable */
  console.group(
    `%c reducers: recipes`,
    'background: #001021; color: #0096FF; padding: 4px;'
  );
  console.log('state', state);
  console.log('action', action);
  console.groupEnd();
  // DEBUG::TMP

  switch (action.type) {
    case 'ADD_RECIPE':
      const addedEntity: RecipeEntity = {
        id: action.id,
        name: prepareName(action.name),
        ingredients: prepareIngredients(action.ingredients as RecipeIngredients)
      };
      return addRecipe(state, addedEntity);
    case 'UPDATE_RECIPE':
      const updatedRecipe: RecipeEntity = {
        id: action.id,
        name: prepareName(action.name),
        ingredients: prepareIngredients(action.ingredients as RecipeIngredients)
      };
      return updateRecipe(state, updatedRecipe);
    case 'DELETE_RECIPE':
      return removeRecipe(state, action.id as RecipeId);
    default:
      return state;
  }
};

export default recipesReducer;