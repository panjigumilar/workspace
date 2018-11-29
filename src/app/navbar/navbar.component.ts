import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  /* Initial Tema*/
  tema_bg;
  tema_font;
  /*end inital tema*/

  ngOnInit() {
  /*initial tema */  
  this.tema_bg="#ff8040";
  this.tema_font="#ff8040";
  /*initial tema */   
  }
  
  SubmitTema(data) {
    alert("Entered Email id : " + data.tema_bg); 
    alert("Entered Email id : " + data.tema_font);   
  }
}
