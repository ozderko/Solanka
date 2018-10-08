import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {RouterModule, ROUTES} from '@angular/router';
import {routes} from './routes';
import {HttpWrapper} from './wrappers/http-wrapper';
import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import {ProductComponent} from './products/container/product.component';
import {FilterComponent} from './products/components/filter/filter.component';
import {DishComponent} from './dishes/container/dish.component';
import {DishComponentsComponent} from './dish-components/components/dish-components.component';
import {ProductService} from './products/services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {AddProductComponent} from './products/components/addProduct/addproduct.component';
import {AddDishComponent} from './dishes/components/addDish/adddish.component';
import {DishService} from './dishes/services/dish.service';
import {AddProductFromDishComponent} from './dishes/components/addProductFromDish/addproductfromdish.component';
import {LoginComponent} from './login/components/login.component';
import {LoginService} from './login/service/login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HoverDirective} from './products/container/hover.directive';
import {FocusDirective} from './products/container/focus.directive';
import {MatDialogModule} from '@angular/material';
import HelpCommand from '@angular/cli/commands/help';
import {HelpComponent} from './products/components/help/help.component';
import {LoadingComponent} from './loading/loading.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './products/container/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddProductComponent,
    FilterComponent,
    DishComponent,
    DishComponentsComponent,
    AddDishComponent,
    AddProductFromDishComponent,
    LoginComponent,
    HoverDirective,
    FocusDirective,
    LoadingComponent,
    HelpComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDialogModule,
  ],
  providers: [
    HttpWrapper,
    {
      provide: ROUTES,
      useValue: routes,
      multi: true
    },
    {
      provide: ANALYZE_FOR_ENTRY_COMPONENTS,
      useValue: routes,
      multi: true
    },
    ProductService,
    DishService,
    LoginService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [HelpComponent]
})
export class AppModule {
}
