import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 public name: string = 'iroman';
 public age:  number = 45;

 get capitalizedName(): string  {
    return this.name.toUpperCase();
 } 

 public getHeroDescription(): string {
  return `${this.name} - ${this.age}`    
 }
 
 changeName() {
    return this.name = 'spiderman';
 }

 changeAge() {
     return this.age = 25;
 }

 reset () {
    this.age = 45;
    this.name = 'ironman';
 }

}
