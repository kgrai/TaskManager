(function (root) {
  function createTask(title, id) {
    const clean = title.trim();
    if (!clean) throw new Error('Enter a task name.');
    if (clean.length > 100) throw new Error('Use at most 100 characters.');
    return { id, title: clean, done: false };
  }
  const api = { createTask };
  if (typeof module !== 'undefined') module.exports = api;
  else root.TaskLogic = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
