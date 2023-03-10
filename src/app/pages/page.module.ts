import { FooterComponent } from '../components/footer/footer.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { LoginComponent } from '../components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { PagesRoutingModule } from './pages-routing.module';

import {
  faTimes,
  faBars,
  faUser,
  faShoppingCart,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ShoppingCartStateModule } from './shopping-cart/shopping-cart-state/shopping-cart.state.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageContainerComponent,
    FooterComponent,
    TopBarComponent,
    NavigationComponent,
    LoginComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    FontAwesomeModule,
    ShoppingCartStateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PageModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
    library.addIcons(faBars);
    library.addIcons(faCartPlus);
    library.addIcons(faShoppingCart);
    library.addIcons(faUser);
  }
}
