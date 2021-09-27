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
        <span @click="marcarComoConcluida(index)" />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListarAFazer',

  methods: {
    marcarComoConcluida(index) {
      this.tarefasAFazer.splice(index, 1);
    },
  },
};
</script>
