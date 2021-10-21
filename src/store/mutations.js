function syncStateAndLocalStorage(state, key, value) {
  state[key] = JSON.stringify(value);
  localStorage.setItem([key], state[key]);
}

export default {
  END_TASK: (state, taskIndex) => {
    const toDoTasks = JSON.parse(state.toDoTasks);
    const completedTasks = JSON.parse(state.completedTasks);

    const [task] = toDoTasks.splice(taskIndex, 1);

    completedTasks.push(task);

    syncStateAndLocalStorage(state, 'toDoTasks', toDoTasks);
    syncStateAndLocalStorage(state, 'completedTasks', completedTasks);
  },
  REDO_TASK: (state, taskIndex) => {
    const completedTasks = JSON.parse(state.completedTasks);
    const toDoTasks = JSON.parse(state.toDoTasks);

    const [task] = completedTasks.splice(taskIndex, 1);

    toDoTasks.push(task);

    syncStateAndLocalStorage(state, 'toDoTasks', toDoTasks);
    syncStateAndLocalStorage(state, 'completedTasks', completedTasks);
  },
  ADD_TASK: (state, task) => {
    const toDoTasks = JSON.parse(state.toDoTasks);

    toDoTasks.push(task);

    syncStateAndLocalStorage(state, 'toDoTasks', toDoTasks);
  },
};
