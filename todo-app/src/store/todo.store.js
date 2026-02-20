import { Todo } from "../todos/models/todo.model";

export const Filters={
    All:'all',
    Completed:'completed',
    Pending:'pending'
}

const state={
    todos:[
        new Todo('Comprar leche'),
        new Todo('Estudiar Javascript'),
        new Todo('Poner una lavadora'),
        new Todo('Fregar el suelo'),
        new Todo('Limpiar el polvo')
    ],
    filter:Filters.All
}

const initStore=()=>{
    loadStore();
}

const loadStore=()=>{
    if(!localStorage.getItem('state')) return;
    const {todos=[],filter=Filters.All}=JSON.parse(localStorage.getItem('state'));
    state.todos=todos;
    state.filter=filter;
}

const saveStateToLocalStorage=()=>{
    localStorage.setItem('state',JSON.stringify(state));
}

/**
 * 
 * @param {Filters} filter 
 */
const getTodos=(filter=Filters.All)=>{
    if(filter===Filters.All){
        return [...state.todos];
    }else if(filter===Filters.Completed){
        return state.todos.filter(todo=>todo.done===true);
    }else if(filter===Filters.Pending){
        return state.todos.filter(todo=>todo.done===false);
    }
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo=>todo.done===true);
        case Filters.Pending:
            return state.todos.filter(todo=>todo.done===false);
        default:
            throw new Error(`Opción ${filter} no válida`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo=(description)=>{
    if(!description || description.length<3) throw new Error('Descripción es requerida y debe tener una logitud de al menos 3 carácteres');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo=(todoId)=>{
    state.todos=state.todos.map(todo=>{
        if(todo.id===todoId){
            todo.done=!todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo=(todoId)=>{
    state.todos=state.todos.filter(todo=>todo.id!==todoId);
    saveStateToLocalStorage();
}

const deleteCompleted=()=>{
    state.todos=state.todos.filter(todo=>todo.done===false);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter=(newFilter=Filters.All)=>{
    state.filter=newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter=()=>{
    return state.filter;
}

export default { 
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
 }