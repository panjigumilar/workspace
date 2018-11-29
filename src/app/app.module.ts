import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ChangePictureDirective } from './change-picture.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { } 