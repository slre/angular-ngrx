import { decrementAction, divideAction, incrementAction, multiplyAction } from './counter/counter.actions';
import { Action } from './ngrx-fake/ngrx';

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
        default:
            return state;                 
    }   
}
let increment = reducer( 1 , incrementAction );
let decrement = reducer( 1 , decrementAction );
let multiply = reducer( 10 , multiplyAction );
let divide = reducer( 10 , divideAction );

console.log(
    'increment:',increment,
    'decrement:',decrement,
    'multiply:',multiply,
    'divide:',divide
    );