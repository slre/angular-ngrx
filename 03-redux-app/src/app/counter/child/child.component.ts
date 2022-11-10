import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() counter! : number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  multiply(){
    this.counter *=2;
    this.counterChange.emit(this.counter);
  }
  divide(){
    this.counter /=2;
    this.counterChange.emit(this.counter);

  }

  resetGrandChild( event : number ){
    this.counter = event;
    this.counterChange.emit(this.counter);

  }

}
