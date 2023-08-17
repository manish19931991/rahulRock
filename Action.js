import {INCREMENT,DECREMENT } from "./Actiontypa";


export const Increment = steps=> ({
  
    type: INCREMENT,
    payload: steps
  
});
export const Decrement = steps => ({
  
    type: DECREMENT,
    payload: steps
  
});


