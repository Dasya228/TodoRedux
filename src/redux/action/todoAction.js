export const  getTodos = (todos)=>{
    return{type: 'GET_TODOS', payload:todos}
}

export const addTodos = (todos)=>{
    return{type: 'ADD_TODOS', payload:todos}
}
 export const deleteTodo=(id)=>{
    return{type: 'DELETE_TODO', payload:id}
 }

 export const editTodoAction = (todo)=>{
    return{type: 'EDIT_TODO', payload:todo}
 }

 export const save = (todo)=>{
    return{type: 'SAVE', payload:todo}
 }