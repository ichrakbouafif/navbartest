import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipesModule } from '../recipes/recipes.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule,RecipesModule,
  ],
  exports:[NavbarComponent,SearchComponent]
})
export class GeneralModule { }
