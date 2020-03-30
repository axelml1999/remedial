import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GitHubServiceService } from './services/git-hub-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';

var firebaseConfig = {
  apiKey: "AIzaSyANzVoiMo77EwvbQab_K3e-yi-GseiU5Gw",
  authDomain: "loguin-9cda1.firebaseapp.com",
  databaseURL: "https://loguin-9cda1.firebaseio.com",
  projectId: "loguin-9cda1",
  storageBucket: "loguin-9cda1.appspot.com",
  messagingSenderId: "399511998028",
  appId: "1:399511998028:web:111ec4c5ef732d0d562ee9"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
