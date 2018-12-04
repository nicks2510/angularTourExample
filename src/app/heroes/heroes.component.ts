import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {HEROES  } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero={
    name:"nikhil",
    id:1
};
  heroes=HEROES

  constructor() { 
    alert("constructor")
  }

  ngOnInit() {
    alert("oninit")

  }

}