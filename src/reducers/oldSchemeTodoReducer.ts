import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from "../actions/oldSchemeTodoAction";

export interface Todo {
    id: number;
    text: string;
}

export interface TodoState {
    todos: Todo[]
}

const internalState: TodoState = {
    todos: []
}

export const TodoReducer = (state = internalState, action: TodoActionTypes): TodoState => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id:state.todos.length + 1, text: action.payload}]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload
                })
            }
        default:
            return state;
    }
}