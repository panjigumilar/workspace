import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello!';

  //define isian dari class
  //titleClass = 'red-title';

  //define isian dari nilai warna
  //titleStyle = 'red';

  //define calss tittle class
  titleStyles = {
    'color': 'red',
    'font-size' : '4em'
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
    alert("Entered Email id : " + data.passwd);
    this.titleStyles = {
      'color': 'blue',
      'font-size' : '5em'
    }
    
   }
   


}

