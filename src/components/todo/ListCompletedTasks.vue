<template>
  <div>
    <div class="text-center">
      <h2 id="completed-title">
        Concluídas
      </h2>
    </div>
    <div>
      <ul>
        <div
          v-for="(task, index) in completedTasks"
          :key="index"
          class="flex justify-evenly align-center"
        >
          <li
            :todo-index="index"
            completed-task
          >
            {{ task }}
          </li>
          <i
            class="redo-task-icon flex"
            @click="redoTask(index)"
          >
            <svg
              style="width:24px;height:24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,
                15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,
                11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"
              />
            </svg>
          </i>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ListCompletedTasks',

  computed: {
    ...mapGetters(['completedTasks']),
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
i.redo-task-icon {
  cursor: pointer;
  color: var(--todo-red);
}
</style>
