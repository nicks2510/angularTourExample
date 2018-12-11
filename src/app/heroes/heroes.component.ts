import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

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
heroes;
  

  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    this.heroes=this.heroService.getHeroes();
  }
  getHeroes() : void{
    
  }
  selectedHero : Hero
  onSelect(hero : Hero):void{
    this.selectedHero=hero ;
  }
}
