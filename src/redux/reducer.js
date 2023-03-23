import React from "react";
import {ADD, COMPLETE, DELETE, EDITED, FILTERTASK} from "./actionType"
const init = {
    todos: [],
    filter:false
  };
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD: 
        return{
            ...state,todos:[...state.todos , payload]
        };
        case DELETE:
            return{
                ...state,todos:state.todos.filter(el=>el.id!==payload)
            }
            case COMPLETE:
            return{
                ...state,todos:state.todos.map(el=>el.id===payload?{...el,isdone:!el.isdone}:el)
            }
            case EDITED:
                return{
                    ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)

                }
                case FILTERTASK:
      return { ...state, filter: !state.filter };
                  
              

        default: 
        return state;

    }
   
};
     