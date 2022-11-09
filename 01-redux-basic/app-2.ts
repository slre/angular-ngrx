import { Action } from "./ngrx-fake/ngrx";
import { decrementAction, divideAction, incrementAction, multiplyAction, resetAction } from './counter/counter.actions';

function reducer( state = 10 , action: Action ){
    switch( action.type ){
        case 'INCREMENT':
            return state +=1;
        case 'DECREMENT':
            return state -=1;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        case 'RESET':
            return state =0;    
        default:
            return state;                 
    }   
}

console.log('Increment: ', reducer( 10, incrementAction ) );
console.log('Decrement: ', reducer( 10, decrementAction ) );
console.log('Multiply: ', reducer( 10, multiplyAction ) );
console.log('Divide: ', reducer( 10, divideAction ) );
console.log('RESET: ', reducer( 10, resetAction ) );
