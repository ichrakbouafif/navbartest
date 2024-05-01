import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { RecetteListeComponent } from './recipes/recette-liste/recette-liste.component';
import { RecipePageComponent } from './recipes/recipe-page/recipe-page.component';
import { SearchComponent } from './general/search/search.component';




const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'recettes',component: RecetteListeComponent},
  {path: 'recettes/:id', component: RecipePageComponent},
  {path: 'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
