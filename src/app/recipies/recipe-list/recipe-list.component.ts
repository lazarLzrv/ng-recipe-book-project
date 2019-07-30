import { Component, OnInit} from '@angular/core';
import { RecpiesService } from '../recipies.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[];  

    constructor(private recpiesService:RecpiesService) { }

    ngOnInit() {   
        this.recipes=this.recpiesService.returnRecipes()

        
    }
 

}
