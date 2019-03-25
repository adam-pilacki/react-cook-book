import React, { useState } from 'react';
import RecipeFormComponent from './RecipeForm';
import { AddRecipeCallback } from '../types/recipeTypes';

type AddRecipeFormProps = {
  addRecipe: AddRecipeCallback
}

const AddRecipeForm = ({ addRecipe }: AddRecipeFormProps) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      {/* 'Add Recipe' button */}
      <button className='primary' onClick={e => {
        e.preventDefault();
        setShowAddForm(true);
      }}>Add Recipe
      </button>

      {/* popup add form - triggered by 'Add Recipe' button */}
      <RecipeFormComponent
        showFormFlag={showAddForm}
        onSubmitCallback={(name, ingredients) => addRecipe(name, ingredients)}
        setShowEditFormCallback={setShowAddForm}
      />
    </div>
  );
};

export default AddRecipeForm;