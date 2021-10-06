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
          :callback="addTarefa"
        />
      </div>
      <div
        id="todo-list"
        class="flex justify-between"
      >
        <listar-a-fazer />
        <listar-concluidas />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import BaseInput from '@/components/base/Input.vue';
import ListarAFazer from '../components/todo/ListarAFazer.vue';
import ListarConcluidas from '../components/todo/ListarConcluidas.vue';

export default {
  name: 'Tasks',

  components: { BaseInput, ListarAFazer, ListarConcluidas },

  methods: {
    ...mapActions(['addTarefa']),
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
.container {
  width: 100%;
}
header > h1 > strong {
  color: var(--todo-red);
}
</style>
