import React, { useState } from 'react';
import classNames from 'classnames';
import RecipeForm from './RecipeForm';
import { partial } from '../lib/utils';
import { RecipeEntity, UpdateRecipeCallback, DeleteRecipeCallback } from '../types/recipeTypes';
import SimpleModal from './SimpleModal';

type RecipeProps = {
  recipe: RecipeEntity,
  updateRecipe: UpdateRecipeCallback,
  deleteRecipe: DeleteRecipeCallback,
}

const Recipe = ({ updateRecipe, deleteRecipe, recipe }: RecipeProps) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const updateRecipeById = partial(updateRecipe, recipe.id);

  return (
    <li className={classNames({
      'recipe': true,
      'recipe-hidden-ingredients': !showIngredients
    })}>
      {/* recipe name - clickable - ingredients list is shown after click */}
      <div className={classNames({
        'recipe-name': true,
        'recipe-name-shown-ingredients': showIngredients
      })}
           onClick={e => {
             e.preventDefault();
             setShowIngredients(!showIngredients);
           }}>{recipe.name}</div>

      {/* recipe ingredients list + the buttons (hidden by default) */}
      <div className={classNames({
        'recipe-ingredients': true,
        'display-block': showIngredients,
        'display-none': !showIngredients
      })}>
        <span>Ingredients</span>
        <hr />
        <ul className={recipe.ingredients ? 'display-block' : 'display-none'}>
          {recipe.ingredients && recipe.ingredients.split(',').map(
            (ingredient, index) => (<li key={index}>{ingredient}</li>)
          )}
        </ul>

        {/* 'Edit' && 'Delete' buttons */}
        <div className='buttons-row'>
          <button className='danger' onClick={e => {
            e.preventDefault();
            setShowDeleteForm(true);
          }}>Delete
          </button>

          <button onClick={e => {
            e.preventDefault();
            setShowEditForm(true);
          }}>Edit
          </button>
        </div>
      </div>

      {/* popup edit form - triggered by Edit button */}
      <RecipeForm
        showFormFlag={showEditForm}
        onSubmitCallback={(name, ingredients) => updateRecipeById(name, ingredients)}
        setShowEditFormCallback={setShowEditForm}
        name={recipe.name}
        ingredients={recipe.ingredients}
      />

      {/* popup delete form - triggered by Delete button */}
      <SimpleModal
        show={showDeleteForm}
        handleClose={() => setShowDeleteForm(false)}
        cssClass='recipe-form'
      >
        <h1>{'Delete Recipe'}</h1>
        <hr />
        <p>Are you sure you want to delete this amazing and so crucial for the world recipe? How do you know if Earth will not blow up after that?</p>
        {/* BUTTONS */}
        <div className='buttons-row'>
          <button className='danger' onClick={() => {
            deleteRecipe(recipe.id);
          }}>I don't care about the Earth - just DELETE this recipe PLEASE!</button>
          <button onClick={() => setShowDeleteForm(false)}>Close</button>
        </div>
      </SimpleModal>
    </li>
  );
};

export default Recipe;