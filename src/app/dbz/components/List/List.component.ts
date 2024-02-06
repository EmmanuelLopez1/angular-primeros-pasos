import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './List.component.html',
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] =[
    {name: 'Trunks', power:10, id: uuid()}
  ];

  deleteCharacter(id?:string):void{
    if(!id) return
    this.onDeleteCharacter.emit(id);
  }
}
