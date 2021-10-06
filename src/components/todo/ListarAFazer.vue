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
          v-for="(tarefa, indice) in tarefasAFazer"
          :key="indice"
        >
          <li
            :todo-id="indice"
            todo-tarefa-a-fazer
          >
            {{ tarefa }}
          </li>
          <span @click="concluirTarefa(indice)" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ListarAFazer',

  computed: {
    ...mapState(['tarefasAFazer']),
  },

  methods: {
    ...mapActions(['concluirTarefa']),
  },
};
</script>

<style scoped>
#todo-title {
  color: var(--todo-red)
}
</style>
