import React from 'react';
import VisibleRecipeList from '../containers/VisibleRecipeList';
import VisibleAddRecipeForm from '../containers/VisibleAddRecipeForm';

const App = () => (
  <div>
    <div className='wrapper-container'>
      <VisibleRecipeList />
    </div>

    <div className='wrapper-container recipe-form-wrapper'>
      <VisibleAddRecipeForm />
    </div>
  </div>
);

export default App;