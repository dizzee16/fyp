import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue/venue.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'venue', component: VenueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
