import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    ProductsComponent,
    UserPageComponent,
    ContactsComponent,
    HomeComponent,
    NavigationComponent,
    ShoppingCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faTimes);
  }
}
