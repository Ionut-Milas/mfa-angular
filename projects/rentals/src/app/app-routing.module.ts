import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent, ListComponent } from './rentals/pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rentals',
    pathMatch: 'full'
  },
  {
    path: 'rentals/:userId',
    title: 'User details',
    component: DetailsComponent
  },
  {
    path: 'rentals',
    title: 'User list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
