import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid} from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name: '',
    power: 0
  }

  emitCharacter():void{
    const { name } = this.character
    if(name.length === 0) return
    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }
}
