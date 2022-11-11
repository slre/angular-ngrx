import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [
  ]
})
export class GrandChildComponent implements OnInit {
  counter! : number;
  constructor( private store : Store<AppState> ) { 
    this.store.select('counter')
      .subscribe( counter => this.counter = counter);
  }

  ngOnInit(): void {
  }
  reset(){
    this.store.dispatch( reset() );
  }

}
