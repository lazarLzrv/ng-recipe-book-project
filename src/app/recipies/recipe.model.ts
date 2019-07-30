import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description:string;
    public imagePath:string;
    public ingridients:Ingredient[];

    constructor(name:string, desk:string, image:string, ingridients:Ingredient[]){
        this.name=name;
        this.description=desk;
        this.imagePath=image;
        this.ingridients=ingridients;
    }
}