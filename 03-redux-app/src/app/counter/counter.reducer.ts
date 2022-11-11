import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply,divide } from './counter.actions';

export const initialState = 0;



// export function counterReducer( state : number = 1 , action : Action ){
//     switch( action.type ) {
//         case increment.type:
//             return state +1;
//         case decrement.type:
//             return state -1;
//         case reset.type:
//             return state =0;
//         default:
//             return state;
                 
//     }
// }

export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 2),
  on(decrement, (state) => state - 2),
  on(reset, (state) => 0),
  on(multiply,(state,{ number })=> state*number ),
  on(divide,(state,{ number })=> state/number )
);


export function counterReducer(state : any, action : Action){
    return _counterReducer( state, action )
};
