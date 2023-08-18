import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { AuthenticateContentComponent } from './components/authenticate-content/authenticate-content.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
import { NavbarContentComponent } from './components/navbar-content/navbar-content.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CommonButtonComponent } from './common-button/common-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    AuthenticateContentComponent,
    LoginFormComponent,
    FooterContentComponent,
    NavbarContentComponent,
    SignupFormComponent,
    CommonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
