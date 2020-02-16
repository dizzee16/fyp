import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';
import { HomeUserComponent } from './home-user/home-user.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
