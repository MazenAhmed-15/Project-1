import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './Forms/signup/signup.component';
import { SigninComponent } from './Forms/signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TopsComponent } from './tops/tops.component';
import { WideLegComponent } from './Products-Details/wide-leg/wide-leg.component';
import { WideHoodieComponent } from './Products-Details/wide-hoodie/wide-hoodie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent,
    BottomsComponent,
    TopsComponent,
    WideLegComponent,
    WideHoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
