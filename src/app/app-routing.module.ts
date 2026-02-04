import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Forms/signin/signin.component';
import { SignupComponent } from './Forms/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TopsComponent } from './tops/tops.component';
import { CartComponent } from './cart/cart.component';
import { WideLegComponent } from './Products-Details/wide-leg/wide-leg.component';
import { WideHoodieComponent } from './Products-Details/wide-hoodie/wide-hoodie.component';

const routes: Routes = [
    {path : '', redirectTo:'Home' ,pathMatch:'full'},
  {path : "Home", component : HomeComponent, title: "Home" },
  {path : "Login", component : SigninComponent, title: "Login"},
  {path : "Register", component : SignupComponent, title: "Register"},
  {path : "Products", component : ProductsComponent, title: "Shop"},
  {path : "Bottoms", component : BottomsComponent, title: "Bottoms"},
  {path : "Tops", component : TopsComponent, title: "Tops"},
  {path : "Cart", component : CartComponent, title: "Cart"},


  //Products-Details
   {path : "WideLeg", component : WideLegComponent, title: "WideLeg"},
   {path : "WideHoodie", component : WideHoodieComponent, title: "WideHoodie"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
