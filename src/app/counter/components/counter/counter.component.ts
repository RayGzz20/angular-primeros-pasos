import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3> Counter : {{Counter}}</h3>
  <button (click)="increaseBy(true)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(false)">-1</button>

  `
})

export class CounterComponent  {
  constructor() { }

  public title: string = 'Hola mundo';
  public Counter: number = 10;

  increaseBy(isIncrease: boolean):void{
    isIncrease ? this.Counter += 1 : this.Counter -= 1;
  }

  reset():void{
    this.Counter = 10;
  }
}
