const form = document.querySelector('#task-form');
const input = document.querySelector('#title');
const error = document.querySelector('#error');
const list = document.querySelector('#tasks');
const empty = document.querySelector('#empty');
const storageKey = 'beyond-code-tasks';
let tasks = [];
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) tasks = saved; } catch { error.textContent = 'Saved tasks could not be loaded.'; }
function save() { try { localStorage.setItem(storageKey, JSON.stringify(tasks)); } catch { error.textContent = 'Tasks could not be saved in this browser.'; } }
function render() {
  list.replaceChildren(); empty.hidden = tasks.length > 0;
  tasks.forEach(task => {
    const li = document.createElement('li'); li.className = task.done ? 'done' : '';
    const check = document.createElement('input'); check.type = 'checkbox'; check.checked = task.done; check.setAttribute('aria-label', 'Mark ' + task.title + ' complete');
    check.addEventListener('change', () => { task.done = check.checked; save(); render(); });
    const label = document.createElement('span'); label.textContent = task.title;
    const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = 'Delete'; remove.setAttribute('aria-label', 'Delete ' + task.title);
    remove.addEventListener('click', () => { tasks = tasks.filter(t => t.id !== task.id); save(); render(); });
    li.append(check, label, remove); list.append(li);
  });
}
form.addEventListener('submit', event => { event.preventDefault(); error.textContent = ''; try { tasks.push(TaskLogic.createTask(input.value, Date.now() + '-' + Math.random())); input.value = ''; save(); render(); input.focus(); } catch (e) { error.textContent = e.message; } });
render();
