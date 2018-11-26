import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //define theme from class
  warna_tema = 'tema_background';

  //define isian dari nilai warna
  //titleStyle = 'red';

  //define calss tittle class
  titleStyles = {
    'color': 'red',
    'font-size' : '4em'
  }

  formdata;
  tema_bg;
  tema_font;

  constructor() { }
  ngOnInit() {
    this.tema_bg = "gumilar.panji@yahoo.co.id"; 
 }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.tema_bg); 
    alert("Entered Email id : " + data.tema_font);
    this.titleStyles = {
      'color': 'blue',
      'font-size' : '5em'
    }
    
   }
   


}

