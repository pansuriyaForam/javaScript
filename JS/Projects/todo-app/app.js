document.addEventListener('DOMContentLoaded', () => {
        const addTodoBtn = document.getElementById('addTodoBtn');
        const todoInput = document.getElementById('todoInput');
        const todoList = document.getElementById('todoList');

        // Load todos from local storage
        const todos = JSON.parse(localStorage.getItem('todos')) || [];

        //Render todos to the list
        function renderTodos() {
                todoList.innerHTML = '';
                todos.forEach((todo, index) => {
                        const li = document.createElement('li');
                        li.classList.add(todo.completed ? 'completed' : '');

                        const text = document.createElement('span');
                        text.textContent = todo.text;

                        // Mark todo as completed
                        text.addEventListener('click', () => {
                                todo.completed = !todo.completed;
                                localStorage.setItem('todos', JSON.stringify(todos));
                                renderTodos();
                        });

                        const removeBtn = document.createElement('button');
                        removeBtn.textContent = 'Delete';
                        removeBtn.classList.add('remove');
                        removeBtn.addEventListener('click', () => {
                                todos.splice(index, 1);
                                localStorage.setItem('todos', JSON.stringify(todos));
                                renderTodos();
                        });

                        li.appendChild(text);
                        li.appendChild(removeBtn);
                        todoList.appendChild(li);
                });
        }

        // Add todo to the list
        addTodoBtn.addEventListener('click', () => {
                const todoText = todoInput.ariaValueMax.trim();
                if (todoText) {
                        todos.push({text: todoText, completed: false});
                        localStorage.setItem('todos', JSON.stringify(todos));
                        todoInput.value = '';
                        renderTodos();
                }
        });

        renderTodos();
});