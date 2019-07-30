import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecpiesService { 
    recipes:Recipe[] = [
        new Recipe('Spagetti', 
        'this is Spagetti desription', 
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
        [
            new Ingredient("meatballs",20),
            new Ingredient("ketchup",1)
        ]
        ),
        new Recipe('Rise', 
        'this is Rise desription', 
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
        [
            new Ingredient("carret",20),
            new Ingredient("beans",20)
        ]),
    ];

    constructor(private shopingListService:ShopingListService) { }

    returnRecipes(){
        return this.recipes
    }

    getSelectedIngridients(ingr:Ingredient[]){
        this.shopingListService.addIngridients(ingr) 
    }
}
