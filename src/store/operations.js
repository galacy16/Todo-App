/* eslint-disable array-callback-return */
import {
    ADD_TODO,
    DELETE_ALL,
    REMOVE_TODO,
    UPDATE_CHECKBOX,
    UPDATE_TODO,
} from ".";

//  Initial state that was mentioned in the pdf
const initialState = [
    {
        nextId: 2,
        data: {
            1: {
                content: "Content 1",
                completed: false,
            },
        },
    },
];

// Handle the todo list using a switch statement
export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter(
                (todo) => todo.id !== action.payload
            );
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            // Mapping through the array
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            });
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            });
            return todoArray;
        default:
            return state;
    }
};
