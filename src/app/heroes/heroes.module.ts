import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListaComponent } from "./lista/lista.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  declarations: [
    ListaComponent,
    HeroComponent
  ],
  exports: [
    ListaComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {}
