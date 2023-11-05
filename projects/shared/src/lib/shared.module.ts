import { NgModule } from '@angular/core';
import { SidebarComponent } from './components';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterLink,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
