import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/invoice/customer-form', pathMatch: 'full' },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./modules/invoice/invoice.module').then(m => m.InvoiceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
