import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service'; 
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
    @ViewChild('form') form;
   
    name:string;
    amount:number;
    nameEl:string;
    amountEl:number; 
    editMode=false;
    index;
    ingridient:Ingredient

    constructor(private shopingListService:ShopingListService) { }

    ngOnInit() {
        this.shopingListService.ingredientsChanged.subscribe(
            (i:number) => {
                console.log(i);
                   
                this.editMode=true; 
                this.index=i; 
                this.nameEl=this.shopingListService.ingredients[i].name
                this.amountEl=this.shopingListService.ingredients[i].amount
            }
        )
    }

    onSubmit(form){ 
        if(this.editMode){
            this.ingridient={
                name:this.nameEl,
                amount:this.amountEl,
            }
            this.shopingListService.updatedIngredients(this.index, this.ingridient) 
        }else{
            const value=form.value
            const newIngred = new Ingredient(value.name, value.amount); 
            this.shopingListService.onAddIngridient(newIngred)
        } 
        this.editMode=false;  
        this.form.reset();
    }

    onClear(){
        this.editMode=false;  
        this.form.reset();
    }

    onDelete(){
        this.onClear();
        this.shopingListService.deleteIngredients(this.index);
    }
    
}
