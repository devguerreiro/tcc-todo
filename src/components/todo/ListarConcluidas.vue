<template>
  <div>
    <ul>
      <div
        v-for="(tarefa, indice) in tarefasConcluidas"
        :key="indice"
      >
        <li
          :todo-index="indice"
          todo-tarefaConcluida
        >
          {{ tarefa }}
        </li>
        <span @click="refazerTarefa(indice)" />
      </div>
    </ul>
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
