import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: "overview",
    component: OverviewComponent,
  },
  {
    path: "product",
    component: ProductComponent,
  },

  {
    path: "product/:productid",
    component: ProductComponent,
  },
  {
    path: "adminview",
    component :AdminviewComponent,
  },
  {
    path : "register",
    component : RegisterComponent,
  },
  {
    path: "loginpage",
    component : LoginpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
