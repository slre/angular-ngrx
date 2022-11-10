import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [
  ]
})
export class GrandChildComponent implements OnInit {
  @Input() counter! : number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
