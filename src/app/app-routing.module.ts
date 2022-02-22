import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { OrdersComponent } from './components/main/orders/orders.component';
import { ShoppingCartComponent } from './components/main/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
