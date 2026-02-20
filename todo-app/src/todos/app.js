import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingsSpan: '#pending-count'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount=()=>{
        renderPending(ElementIDs.PendingsSpan);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
        displayTodos('.todo-list');
    })()

    //Referencias html
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const botonClearCompleted = document.querySelector(ElementIDs.ClearCompleted);
    const filtersUL = document.querySelectorAll(ElementIDs.TodoFilters);
    const pendingsSpan = document.querySelector(ElementIDs.PendingsSpan);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length < 3) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        if (event.target.getAttribute('class') === 'destroy') {
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        }
    });
/*
    todoListUL.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.getAttribute('class') === 'toggle') {

        }
        
        pendingsSpan.textContent = todoStore.getTodos(Filters.Pending).length;

    });
*/
    botonClearCompleted.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersUL.forEach(element => {
        element.addEventListener('click', (event) => {
            filtersUL.forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
            switch (event.target.textContent) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();

        });

    });

}