export default {
  toDoTasks: (state) => JSON.parse(state.toDoTasks),
  completedTasks: (state) => JSON.parse(state.completedTasks),
};
