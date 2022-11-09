import { counterReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";
import { incrementAction, multiplyAction } from './counter/counter.actions';

class Store<T>{
    private state: T;

    constructor( private reducer : Reducer<T>,  state : T ){
        this.state = state;
    }


    getState(){
        return this.state;
    }
    dispatch( action : Action ){
        this.state = this.reducer( this.state,action )
    }
}


const store = new Store( counterReducer, 10 );

console.log('Before dispatch: ',store.getState());

store.dispatch( incrementAction );
store.dispatch( incrementAction );

console.log('After dispatch incrementAction: ',store.getState());

store.dispatch( multiplyAction );


console.log('After dispatch: multiplyAction',store.getState());

