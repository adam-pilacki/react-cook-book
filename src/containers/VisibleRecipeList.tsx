import { connect } from 'react-redux';
import { updateRecipe, deleteRecipe } from '../actions';
import RecipeListComponent from '../components/RecipeList';
import { AppState } from '../types/appTypes';
import { RecipeIngredients, RecipeName } from '../types/recipeTypes';

const mapStateToProps = (state: AppState) => ({
  recipes: state.recipes
});

const mapDispatchToProps = (dispatch: any) => ({
  updateRecipe: (id: RecipeIngredients, name: RecipeName, ingredients: RecipeIngredients) => dispatch(updateRecipe(id, name, ingredients)),
  deleteRecipe: (id: RecipeIngredients) => dispatch(deleteRecipe(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListComponent);