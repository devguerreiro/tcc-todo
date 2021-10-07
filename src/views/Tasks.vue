<template>
  <div class="container">
    <header>
      <h1 class="text-center">
        <strong>ToDo</strong> List
      </h1>
    </header>
    <main>
      <div id="todo-add">
        <base-input
          placeholder="Insira aqui outra tarefa..."
          :callback="addTask"
        />
      </div>
      <div
        id="todo-list"
        class="flex justify-between"
      >
        <list-todo-tasks id="list-todo-tasks" />
        <list-completed-tasks id="list-completed-tasks" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import BaseInput from '@/components/base/Input.vue';
import ListTodoTasks from '../components/todo/ListTodoTasks.vue';
import ListCompletedTasks from '../components/todo/ListCompletedTasks.vue';

export default {
  name: 'Tasks',

  components: { BaseInput, ListTodoTasks, ListCompletedTasks },

  methods: {
    ...mapActions(['addTask']),
  },
};
</script>

<style scoped>
#todo-list {
  width: 100%;
  padding: 0 20%;
}
#todo-add {
  width: 33.3%;
  margin: 0 auto;
}
#list-todo-tasks, #list-completed-tasks {
  width: 25%;
}
.container {
  width: 100%;
}
header > h1 > strong {
  color: var(--todo-red);
}
</style>
