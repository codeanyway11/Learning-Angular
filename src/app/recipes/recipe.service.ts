import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor( private shoppingListService: ShoppingListService ){

    }

    private recipes:Recipe[] = [
        new Recipe('A test 1', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg', [new Ingredient('Meat',5)]),
        new Recipe('A test 2', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg', [{name:'banana', amount: 5}]),
        new Recipe('A test 12', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg', [{name:'banana', amount: 5}]),
        new Recipe('A test 1212', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg', [{name:'banana', amount: 5}])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);

    }

}
