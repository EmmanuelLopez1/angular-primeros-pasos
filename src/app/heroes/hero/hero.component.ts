import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private name:string = "maxo";
  private edad:number = 18;

  get getName():string { return this.name; }
  get getEdad():number { return this.edad; }
  setName(value:string) { this.name = value; }
  setEdad(value:number) { this.edad = value;}

}
