import { NgModule } from '@angular/core';

//router module
import { Routes, RouterModule } from '@angular/router';

//form module
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

//HTTP module
import { HttpClientModule,HttpHeaders } from '@angular/common/http';

//local service
import { LoginserviceService } from './loginservice.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule,FormsModule],
  providers: [LoginserviceService]
})

export class AppRoutingModule { }
