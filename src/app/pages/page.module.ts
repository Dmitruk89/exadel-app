import { FooterComponent } from '../components/footer/footer.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { LoginComponent } from '../components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { PagesRoutingModule } from './pages-routing.module';

import { faTimes, faBars, faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PageContainerComponent,
    FooterComponent,
    TopBarComponent,
    NavigationComponent,
    LoginComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FontAwesomeModule],
})
export class PageModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
    library.addIcons(faBars);
    library.addIcons(faCartArrowDown);
    library.addIcons(faUser);
  }
}
