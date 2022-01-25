import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: 'blog', component: BlogComponent
},{
  path: 'travels', component: TravelsComponent
},{
  path: 'cart', component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
