import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, editTodoAction, getTodos} from "./redux/action/todoAction";

const App = () => {
    const dispatch = useDispatch()
    const todosArray = useSelector(state => state.todos)
    const [todo, setTodo] = useState({})
    const [editTodo, setEditTodo] = useState({})
    const [editTodoTitle, setEditTodoTitle] = useState('')

    useEffect(() => {
        dispatch(getTodos(todos))
    }, []);

    const handleAddTodo = () => {
        const data = {id: todosArray.length + 1, title: todo.title, completed: false}
        dispatch(getTodos([...todosArray, data]))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEditTodo = (todo) => {
        console.log(todo)
        setEditTodo(todo)
        setEditTodoTitle(todo.title)
    }
    const handleSave = () => {
        const data = { id: editTodo.id, title: editTodoTitle, completed: editTodo.completed };
        dispatch(editTodoAction(data));
        setEditTodo({});
        setEditTodoTitle('');
    };

    return (
        <div>
            <input type='text' onChange={(e) => setTodo({...todo, title: e.target.value})}/>
            <button onClick={handleAddTodo}>Add</button>
            {
                todosArray.map(todo => (
                    <div key={todo.id} style={{ display: "flex", gap: '10px', alignItems: 'center' }}>
                        {editTodo.id === todo.id ? (
                            <>
                                <input type='text' value={editTodoTitle} onChange={(e) => setEditTodoTitle(e.target.value)} />
                                <button onClick={handleSave}>Save</button>
                            </>
                        ) : (
                            <>
                                <h3>{todo.title}</h3>
                                <input type="checkbox" checked={todo.completed} />
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                <button onClick={() => handleEditTodo(todo)}>Edit</button>
                            </>
                        )}
                    </div>
                ))
            }
        </div>
    );
}
export default App;


const todos = [
    {
        id: 1,
        title: 'title1',
        completed: false
    },
    {
        id: 2,
        title: 'title2',
        completed: false
    },
    {
        id: 3,
        title: 'title3',
        completed: false
    },
    {
        id: 4,
        title: 'title4',
        completed: false
    }


]