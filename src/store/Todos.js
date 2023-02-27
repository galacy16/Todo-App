import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, handleCheckbox } from ".";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
    // dispatch function to dispatch an action
    const dispatch = useDispatch();

    // getting todos from the store
    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div key={todo.id} className="todo-box">
            <div className="content">
                {editFormVisibility === false && (
                    <input
                        className="done"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(handleCheckbox(todo.id))}
                    ></input>
                )}
                <p
                    style={
                        todo.completed === true
                            ? { textDecoration: "line-through" }
                            : { textDecoration: "none" }
                    }
                >
                    {todo.todo}
                </p>
            </div>
            <div className="actions-box">
                {/* Edit and delete todo */}
                {editFormVisibility === false && (
                    <>
                        <span onClick={() => handleEditClick(todo)}>
                            <button className="btn btn-secondary btn-sm">
                                Edit
                            </button>
                        </span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}>
                            <button className="btn btn-secondary btn-sm">
                                Delete
                            </button>
                        </span>
                    </>
                )}
            </div>
        </div>
    ));
};
