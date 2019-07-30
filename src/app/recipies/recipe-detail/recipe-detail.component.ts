import { Component, OnInit } from '@angular/core';
import { RecpiesService } from '../recipies.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    recipeDetails;
    constructor(private recpiesService:RecpiesService,
        private route:ActivatedRoute) { }

    ngOnInit() {
         
        
        this.route.params.subscribe(
            params =>{
                this.recipeDetails = this.recpiesService.recipes[params.id]
            }
        )
    }
    onToShopList(){
        this.recpiesService.getSelectedIngridients(this.recipeDetails.ingridients); 
    }
}
