<template>
  <div>
    <div>
      <h2 id="todo-title">
        Pendentes
      </h2>
    </div>
    <div>
      <ul>
        <div
          v-for="(task, index) in toDoTasks"
          :key="index"
        >
          <li
            :todo-id="index"
            todo-task
          >
            {{ task }}
          </li>
          <span @click="endTask(index)" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ListTodoTasks',

  computed: {
    ...mapState(['toDoTasks']),
  },

  methods: {
    ...mapActions(['endTask']),
  },
};
</script>

<style scoped>
#todo-title {
  color: var(--todo-red)
}
</style>
