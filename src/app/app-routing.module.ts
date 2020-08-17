import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'home',
    component: HomepageComponent,
  },

  {
    path: 'BookMovie',
    component: BookingPageComponent,
  },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
