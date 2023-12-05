const initialState = {
    todos: []
}

export const TodoReducer = (state = initialState , action) => {
    switch (action.type){
        case 'GET_TODOS':
            return {
              ...state,
                todos: action.payload
            }
            case "ADD_TODOS":
                return {
                  ...state,
                    todos: [...state.todos, action.payload]
                }
                case "DELETE_TODO":
                    return {
                      ...state,
                        todos: state.todos.filter(todo => todo.id!== action.payload)
                    }
                    case  "EDIT_TODO":
                        return {
                            ...state,
                            todos: state.todos.map(todo =>
                                todo.id === action.payload.id ? action.payload : todo
                            )}
        case "SAVE":
            return {
                todos: action.payload
            }
        default:
            return state
    }
}