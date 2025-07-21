document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        // Botão de concluir
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.style.marginLeft = '10px';
        completeBtn.onclick = function(e) {
            e.stopPropagation();
            li.classList.toggle('completed');
        };

        // Botão de excluir
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Excluir';
        removeBtn.style.marginLeft = '10px';
        removeBtn.onclick = function(e) {
            e.stopPropagation();
            li.remove();
        };

        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        list.appendChild(li);
        input.value = '';
    });
});