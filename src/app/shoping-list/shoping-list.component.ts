import { Component, OnInit } from '@angular/core';
import { ShopingListService } from './shoping-list.service';
import { Ingredient } from '../shared/ingredient.model'; 

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
    ingredients:Ingredient[];
    
    constructor(private shopingListService:ShopingListService) { }

    ngOnInit() {  
        this.ingredients = this.shopingListService.ingredients;
        
    }

    onEditItem(i){  
        this.shopingListService.ingredientsChanged.next(i) 
    }      
}
