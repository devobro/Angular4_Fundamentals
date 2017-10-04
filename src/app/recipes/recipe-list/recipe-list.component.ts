import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test',
		 'https://cdn.jamieoliver.com/recipe-database/430_575/0OEPoPvq4BI92nI9B0yN-l.jpg'),
		new Recipe('Another Test Recipe', 'This is simply a test',
		 'https://cdn.jamieoliver.com/recipe-database/430_575/0OEPoPvq4BI92nI9B0yN-l.jpg')
	];

	onRecipeSelected(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe);
	}

  constructor() { }

  ngOnInit() {
  }

}
