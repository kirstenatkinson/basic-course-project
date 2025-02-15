import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Pepperoni Pizza', 
            'Your favorite classic but better.', 
            'https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg',
             [
                new Ingredient('Pizza Dough', 1),
                new Ingredient('Tomato Sauce', 1),
                new Ingredient('Mozzerella Cheese', 1),
                new Ingredient('Pepperoni', 20)
             ]),
        new Recipe(
            'Omlette', 
            'Breakfast is served!', 
            'https://cdn.loveandlemons.com/wp-content/uploads/2023/03/omelette-recipe-580x803.jpg',
            [
                new Ingredient('Eggs', 3),
                new Ingredient('Tomato', 1),
                new Ingredient('Spinach', 3)
            ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}