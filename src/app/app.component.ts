import { Component } from '@angular/core';

import { LoginserviceService } from './loginservice.service';
import { Hero } from './hero';

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

  constructor(private myservice: LoginserviceService) { }
  httpdata;
  todaydate;

  data_validasi;
  data_jenis_error;
  data_as_objek;

  get_status_service;

  data_all =[];

  public employees = [];
  public errorMsg;
  public name;
  

  ngOnInit() {
    //initial
    this.tema_bg = "gumilar.panji@yahoo.co.id";
                 
  } 

  heroes: Hero[];
  editHero: Hero;

  add(name: string):void{
    console.log(name);
    name = name.trim();
    const newHero: Hero = { name } as Hero;
    this.myservice.addHero(newHero).subscribe(hero => this.heroes.push(hero));
    console.log(this.heroes);
  }
  
  delete(hero: Hero): void {
    this.myservice.deleteHero(hero.id).subscribe();
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.myservice.searchHeroes(searchTerm)
        .subscribe(heroes => this.heroes = heroes);
    }
  }

  update(){
        this.myservice.updateHero(this.editHero)
        .subscribe(hero => {
          const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
          if (ix > -1) { this.heroes[ix] = hero; }
        });
      this.editHero = undefined; 
    
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

