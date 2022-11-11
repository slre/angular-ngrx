import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions  from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter! : number ;

  constructor( private store : Store<AppState> ){
    // this.store.subscribe( state =>{
    //   console.log(state);

    //   this.counter = state.counter;
    //   console.log(this.counter);

    // })
    // this.store.select('counter').subscribe( (counter)=>{
    //   console.log(counter);

    //   this.counter = counter;
    //   console.log(this.counter);
    // });
    
    this.store.select('counter').
      subscribe( counter => this.counter = counter ); 
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
  }

  incremet(){
    //this.counter ++;

    this.store.dispatch( actions.increment() )
  }
  decrement(){
    //this.counter --;
    this.store.dispatch( actions.decrement() )
  }
  reset(){
    //this.counter --;
    this.store.dispatch( actions.reset() )
  }

  
}
