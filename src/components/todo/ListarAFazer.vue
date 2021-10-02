<template>
  <div>
    <ul>
      <div
        v-for="(tarefa, indice) in tarefasAFazer"
        :key="indice"
      >
        <li
          :todo-id="indice"
          todo-tarefaAFazer
        >
          {{ tarefa }}
        </li>
        <span @click="concluirTarefa(indice)" />
      </div>
    </ul>
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
