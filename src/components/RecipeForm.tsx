import React from 'react';
import SimpleModal from './SimpleModal';
import {
  AddRecipeCallback,
  RecipeName,
  RecipeIngredients
} from '../types/recipeTypes';

type RecipeFormProps = {
  showFormFlag: boolean,
  onSubmitCallback: AddRecipeCallback,
  setShowEditFormCallback: (flag: boolean) => void,
  name: RecipeName,
  ingredients: RecipeIngredients
}

const RecipeForm = ({ showFormFlag, onSubmitCallback, setShowEditFormCallback, name, ingredients }: RecipeFormProps) => {
  let nameInput: HTMLInputElement | null;
  let ingredientsTextarea: HTMLTextAreaElement | null;

  return (<SimpleModal
    show={showFormFlag}
    handleClose={() => setShowEditFormCallback(false)}
    cssClass='recipe-form'
  >
    <h1>{name ? 'Edit Recipe' : 'Add a Recipe'}</h1>
    <hr />
    <form
      onSubmit={e => {
        e.preventDefault();

        if (!nameInput || !nameInput.value || !ingredientsTextarea) {
          return;
        }

        onSubmitCallback(nameInput.value, ingredientsTextarea.value);

        setShowEditFormCallback(false);
      }}
    >
      <label htmlFor='nameInput'>Recipe</label>
      <input id='nameInput' placeholder='Recipe Name' ref={node => {
        nameInput = node;
        if (nameInput) {
          nameInput.value = name;
        }
      }} />

      <label htmlFor='recipeTextarea'>Ingredients</label>
      <textarea id='recipeTextarea' placeholder='Enter Ingredients, Separated, By Commas' ref={node => {
        ingredientsTextarea = node;
        if (ingredientsTextarea) {
          ingredientsTextarea.value = ingredients;
        }
      }} />

      {/* BUTTONS */}
      <div className='buttons-row'>
        <button className='primary' type='submit'>Save</button>
        <button onClick={() => {
          if (nameInput) {
            nameInput.value = '';
          }

          if (ingredientsTextarea) {
            ingredientsTextarea.value = '';
          }

          setShowEditFormCallback(false);
        }}>Close
        </button>
      </div>
    </form>
  </SimpleModal>);
};

RecipeForm.defaultProps = {
  name: '',
  ingredients: '',
};

export default RecipeForm;