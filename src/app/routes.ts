import {Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ProductComponent} from './products/container/product.component';
import {DishComponent} from './dishes/container/dish.component';
import {LoginComponent} from './login/components/login.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'dishes',
    component: DishComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
