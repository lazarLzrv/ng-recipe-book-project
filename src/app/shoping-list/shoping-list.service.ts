import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
    ingredientsChanged = new Subject(); 

    ingredients:Ingredient[] = [
        new Ingredient('salt', 5),
        new Ingredient('apples', 10),
    ]

    constructor() {}

    onAddIngridient(data){
        this.ingredients.push(data); 
    }

    addIngridients(ingr){
        this.ingredients.push(...ingr);    
    } 
    updatedIngredients(index, ingredient){
        this.ingredients[index]=ingredient
        this.ingredientsChanged.next(index)
    }
    deleteIngredients(index){
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next(index)
    }
}
