import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
