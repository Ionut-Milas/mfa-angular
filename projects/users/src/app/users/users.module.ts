import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, DetailsComponent } from './pages';

const EXPORTS: any[] = [];
@NgModule({
  declarations: [
    ...EXPORTS,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTS,
    ListComponent,
    DetailsComponent
  ]
})
export class UsersModule {
  static exports: any[] = EXPORTS; // prevents from components being tree-shaken in production
}
