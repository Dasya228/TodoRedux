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
        <div className={'container'}>
        <div className={'box'}>
            <h1>ToDo List</h1>
            <div className={'add-container'}>
                <input type='text' placeholder={'Add a ToDo...'} onChange={(e) => setTodo({...todo, title: e.target.value})}/>
                <button className={'addSave'} onClick={handleAddTodo}>Add</button>
            </div>
            {
                todosArray.map(todo => (
                    <div key={todo.id}>
                        {editTodo.id === todo.id ? (
                            <div className={'save-container'}>
                                <input type='text' value={editTodoTitle} onChange={(e) => setEditTodoTitle(e.target.value)} />
                                <button className={'addSave'} onClick={handleSave}>Save</button>
                            </div>
                        ) : (
                            <div className={'title-container'}>
                                <input type="checkbox" checked={todo.completed} />
                                <h3>{todo.title}</h3>
                             <div className={'btn-container'}>
                                 <button onClick={() => handleDelete(todo.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg></button>
                                 <button onClick={() => handleEditTodo(todo)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg></button>
                             </div>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
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