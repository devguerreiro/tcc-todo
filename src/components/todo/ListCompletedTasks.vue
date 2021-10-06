<template>
  <div>
    <div>
      <h2 id="completed-title">
        Concluídas
      </h2>
    </div>
    <div>
      <ul>
        <div
          v-for="(task, index) in completedTasks"
          :key="index"
        >
          <li
            :todo-index="index"
            completed-task
          >
            {{ task }}
          </li>
          <span @click="redoTask(index)" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListCompletedTasks',

  computed: {
    ...mapState(['completedTasks']),
  },

  methods: {
    ...mapActions(['redoTask']),
  },
};
</script>

<style scoped>
#completed-title {
  color: var(--todo-green)
}
</style>
