import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {
    path: 'invoices',
    loadComponent: () =>
      import('./features/invoice-list/invoice-list.component').then(
        m => m.InvoiceListComponent
      )
  },
  {
    path: 'invoices/:id',
    loadComponent: () =>
      import('./features/invoice-detail/invoice-detail.component').then(
        m => m.InvoiceDetailComponent
      )
  },
  { path: '**', redirectTo: 'invoices' }
];
