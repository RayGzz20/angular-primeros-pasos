import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public Counter: number = 10;

  increaseBy(isIncrease: boolean):void{
    isIncrease ? this.Counter += 1 : this.Counter -= 1;
  }

  reset():void{
    this.Counter = 10;
  }
}
