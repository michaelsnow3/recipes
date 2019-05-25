import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Testing recipe name 1',
      'testing description',
      'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
      [new Ingredient('something', 1), new Ingredient('something else', 2)]
    ),
    new Recipe(
      'Testing recipe name 2',
      'testing description 2',
      'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
      [new Ingredient('asdf', 1), new Ingredient('fda', 2)]
    )
  ];
  getRecipes = () => {
    return this.recipes.slice();
  };
}
