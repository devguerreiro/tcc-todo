export default {
  END_TASK: (state, taskIndex) => {
    const task = state.toDoTasks.splice(taskIndex, 1);

    state.completedTasks.push(task);
  },
  REDO_TASK: (state, taskIndex) => {
    const task = state.completedTasks.splice(taskIndex, 1);

    state.toDoTasks.push(task);
  },
  ADD_TASK: (state, task) => {
    state.toDoTasks.push(task);
  },
};
