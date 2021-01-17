import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },

  {
    path: 'customers',
    canActivate: [AuthGuard],
    component: CustomersComponent,
  },
  {
    path: 'customers-new',
    canActivate: [AuthGuard],
    component: CustomersNewComponent,
  },
  {
    path: 'customers/:id',
    canActivate: [AuthGuard],
    component: CustomersDetailsComponent,
  },
  {
    path: 'customer/:id/edit',
    canActivate: [AuthGuard],
    component: CustomersEditComponent,
  },
  { path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent },

  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
