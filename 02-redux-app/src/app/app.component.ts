import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter! : number;

  constructor(){
    this.counter = 100;
  }

  incremet(){
    this.counter ++;
  }
  decrement(){
    this.counter --;
  }
}
