import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test 1', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg'),
    new Recipe('A test 2', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg'),
    new Recipe('A test 12', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg'),
    new Recipe('A test 1212', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/08/19/22/49/away-2660117_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onselectingRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
