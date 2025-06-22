function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle('completed');

  const del = document.createElement('span');
  del.textContent = '❌';
  del.className = 'delete-btn';
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
