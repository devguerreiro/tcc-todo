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
          <i @click="endTask(index)">
            <svg
              style="width:24px;height:24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
              />
            </svg>
          </i>
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
i {
  cursor: pointer;
  color: var(--todo-green);
}
</style>
