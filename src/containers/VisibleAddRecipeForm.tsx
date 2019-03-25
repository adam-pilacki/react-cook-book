import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import AddRecipeForm from '../components/AddRecipeForm';
import { RecipeIngredients, RecipeName } from '../types/recipeTypes';

const mapDispatchToProps = (dispatch: any) => ({
  addRecipe: (name: RecipeName, ingredients: RecipeIngredients) => dispatch(addRecipe(name, ingredients)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddRecipeForm);