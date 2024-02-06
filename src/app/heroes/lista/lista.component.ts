import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroes: string[] = ['Spiderman', 'Batman'];
  public heroeBorrado: string | null = '';

  borrarHeroe():void {
    if(this.heroes.length > 0) {
      this.heroeBorrado = this.heroes[this.heroes.length - 1];
      this.heroes.pop();
      return
    }
    this.heroeBorrado = null;
  }
}
