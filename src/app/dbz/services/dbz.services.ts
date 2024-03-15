import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name:'Nappa',
      power: 2500
    }
  ];

  addCharacter(character:Character):void{
    //this.characters.unshift(character);

    // const newCharacter:Character={
    //   id:uuid(),
    //   name:character.name,
    //   power:character.power
    // }
    const newCharacter:Character={id:uuid(), ...character }

    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index:number):void{
    //console.log('MainPage');
    //console.log(index);
    //splice (start,deleteCount,AddElement1,AddElement2)
    /*
    start donde inicia
    deleteCount cuantos elimina
    AddElement añade uno o mas elementos por comas
    */
    this.characters.splice(index,1);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
