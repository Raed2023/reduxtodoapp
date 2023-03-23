import { ADD, COMPLETE, DELETE, EDITED, FILTERTASK } from "./actionType"


export const handleAdd =(newtask)=>{
    return{
        type:ADD,
        payload:newtask,
    }
}
export const handleDelete =(DEL)=>{
    return{
        type: DELETE,
        payload:DEL,
    }
}
export const handleComplete=(COMP)=>{
    return{
        type: COMPLETE,
        payload : COMP,

    }
}
export const handleEdit=(EDIT)=>{
    return{
        type: EDITED,
        payload : EDIT,

    }
}
export const filterTask = () => {
    return { type: FILTERTASK,
             
};
  };