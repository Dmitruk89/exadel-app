import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { shoppingCartFeature } from 'src/app/pages/shopping-cart/shopping-cart-state/shopping-cart.reducer';
import { AppState } from 'src/app/store/state/app.state';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(public authService: AuthService, private _store: Store<AppState>) {}

  isLoggedIn = this.authService.isLoggedIn;
  products$ = this._store.select(shoppingCartFeature.selectProducts);
}
