import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './myservice.service';
import { User } from './user';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
  providers: [ MyserviceService ]
  
})
export class NewCmpComponent implements OnInit {
  constructor(private heroesService: MyserviceService) { }
  months = ["January", "February", "March", "April","May"]; 
  data;
  nama;
  tes;
  obj;
  employees;
  showHeroes = false;
  

  ngOnInit() {  
    this.data='panji';
  }

  
  onClickSubmit(){
    this.nama = this.data.trim();
    const newHero: User = {nama:this.nama} as User;

    this.tes = this.heroesService.insert(newHero);
  }

  show(){
    this.showHeroes = !this.showHeroes;
  }
}