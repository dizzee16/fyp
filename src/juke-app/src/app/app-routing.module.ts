import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { HomeUserComponent } from './home-user/home-user.component';


const routes: Routes = [
  {path: '', component: VenueComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'home-user', component: HomeUserComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
