import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import{ Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
