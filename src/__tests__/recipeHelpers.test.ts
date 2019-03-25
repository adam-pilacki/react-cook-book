import { prepareIngredients, prepareName, addRecipe, updateRecipe, removeRecipe } from '../lib/recipeHelper';
import { RecipeEntity } from '../types/recipeTypes';


/**
 * MOCKS
 */
const getMockedRecipes = (): RecipeEntity[] => [
  {
    id: 'id1',
    name: 'one',
    ingredients: 'ingredient 11, ingredient 12, ingredient 13'
  },
  {
    id: 'id2',
    name: 'two',
    ingredients: 'ingredient 21, ingredient 22, ingredient 23'
  },
];

const getMockedNewRecipe = (): RecipeEntity => ({
  id: 'id3',
  name: 'three',
  ingredients: 'ingredient 31, ingredient 32, ingredient 33'
});


/**
 * TESTS
 */
test('prepareIngredients should return empty string when given empty argument', () => {
  expect(prepareIngredients(null)).toEqual('');
  expect(prepareIngredients(undefined)).toEqual('');
  expect(prepareIngredients('')).toEqual('');
});

test('prepareIngredients should return filtered, cleaned up value: comma separated strings', () => {
  const rawIngredients = 'ingredient 1,   ingredient 2,, , ,  ,ingredient 3, ,  ,ingredient 4';
  const filteredIngredients = 'ingredient 1,ingredient 2,ingredient 3,ingredient 4';

  const result = prepareIngredients(rawIngredients);

  expect(result).toEqual(filteredIngredients);
});

test('prepareName should return empty string when given empty argument', () => {
  expect(prepareName(null)).toEqual('');
  expect(prepareName(undefined)).toEqual('');
  expect(prepareName('')).toEqual('');
});

test('prepareName should return trimmed string', () => {
  const rawName = '  this is some name  ';
  const filteredName = 'this is some name';

  const result = prepareIngredients(rawName);

  expect(result).toEqual(filteredName);
});

test('addRecipe should add the passed recipe to the recipes collection', () => {
  const initialRecipes = getMockedRecipes();

  const newRecipe = getMockedNewRecipe();

  const expected = [
    ...initialRecipes,
    newRecipe
  ];

  const result = addRecipe(initialRecipes, newRecipe);

  expect(result).toEqual(expected);
});

test('addRecipe should not mutate the existing recipes collection', () => {
  const initialRecipes = getMockedRecipes();

  const newRecipe = getMockedNewRecipe();

  const result = addRecipe(initialRecipes, newRecipe);

  expect(result).not.toBe(initialRecipes);
});

test('updateRecipe should update recipe by id', () => {
  const initialRecipes = getMockedRecipes();

  const oldRecipes: RecipeEntity[] = [
    ...initialRecipes,
    getMockedNewRecipe()
  ];

  const updatedRecipe: RecipeEntity = {
    id: 'id3',
    name: 'three - updated',
    ingredients: 'ingredient 31, ingredient 32, ingredient 33 updated'
  };

  const expectedResult = [
    ...initialRecipes,
    updatedRecipe
  ];

  const result = updateRecipe(oldRecipes, updatedRecipe);

  expect(result).toEqual(expectedResult);
});

test('updateRecipe should not mutate the original collection', () => {
  const initialRecipes = [
    ...getMockedRecipes(),
    getMockedNewRecipe()
  ];

  const updatedRecipe: RecipeEntity = {
    id: 'id3',
    name: 'three - updated',
    ingredients: 'ingredient 31, ingredient 32, ingredient 33 updated'
  };

  const result = updateRecipe(initialRecipes, updatedRecipe);

  expect(result).not.toBe(initialRecipes);
});

test('removeRecipe should remove recipe by id', () => {
  const initialRecipes = [
    ...getMockedRecipes(),
    getMockedNewRecipe()
  ];

  const idToRemove = 'id3';

  const expectedRecipes = getMockedRecipes();

  const result = removeRecipe(initialRecipes, idToRemove);

  expect(result).toEqual(expectedRecipes);
});

test('removeRecipe should not mutate the original collection', () => {
  const initialRecipes = [
    ...getMockedRecipes(),
    getMockedNewRecipe()
  ];

  const idToRemove = 'id3';

  const result = removeRecipe(initialRecipes, idToRemove);

  expect(result).not.toBe(initialRecipes);
});