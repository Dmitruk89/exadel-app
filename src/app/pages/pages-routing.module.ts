/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'shoping-cart',
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
      },
      {
        path: 'user-page',
        loadChildren: () => import('./user-page/user-page.module').then((m) => m.UserPageModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full',
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
