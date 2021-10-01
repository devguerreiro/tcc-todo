<template>
  <div>
    <ul>
      <div
        v-for="(tarefa, index) in tarefasAFazer"
        :key="index"
      >
        <li
          :todo-id="index"
          todo-tarefaAFazer
        >
          {{ tarefa }}
        </li>
        <span @click="concluirTarefa(index)" />
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
