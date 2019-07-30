import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { BlankComponent } from './recipies/blank/blank.component'; 
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo:'/recipes', pathMatch:'full'}, 
    {path: 'recipes' , component: RecipiesComponent, children:[ 
        {path: '', component: BlankComponent, pathMatch:'full'},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
        
    ]}, 
    {path: 'shopping-list' , component: ShopingListComponent}, 

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule {
  
  }