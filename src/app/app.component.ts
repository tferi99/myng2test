import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works v4!';
  value1 : string = "Value 1";
  value2 : string = "Value 2";
  value3 : string = "Value 3";

  num1 : number = 1;
  keyInputValue: string;

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  onClickme() {
    this.num1++;
  }

  onKeyUp(event : any) {
    this.keyInputValue = event.target.value;
  }
}
