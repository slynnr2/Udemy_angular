import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lobster_bisque.jpg/250px-Lobster_bisque.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
