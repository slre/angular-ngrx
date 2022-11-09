import { createStore, Store } from "redux";
import { incrementAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";

const store : Store = createStore ( counterReducer );

store.subscribe( ()=>{
    console.log('Subscribe: ', store.getState());
})
store.dispatch( incrementAction );