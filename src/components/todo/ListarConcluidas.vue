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
          v-for="(tarefa, indice) in tarefasConcluidas"
          :key="indice"
        >
          <li
            :todo-index="indice"
            todo-tarefa-concluida
          >
            {{ tarefa }}
          </li>
          <span @click="refazerTarefa(indice)" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListarConcluidas',

  computed: {
    ...mapState(['tarefasConcluidas']),
  },

  methods: {
    ...mapActions(['refazerTarefa']),
  },
};
</script>

<style scoped>
#completed-title {
  color: var(--todo-green)
}
</style>
