<template>
  <div class="container">
    <div
      id="todo-main"
      class="flex justify-evenly"
    >
      <div
        id="todo-input"
        class="flex flex-column"
      >
        <header>
          <h1 class="text-center">
            <strong>ToDo</strong> List
          </h1>
        </header>
        <main>
          <base-input
            placeholder="Insira aqui sua tarefa..."
          />
        </main>
      </div>
      <div
        class="flex align-end"
      >
        <base-plus-button
          :callback="addTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/base/Input.vue';
import BasePlusButton from '@/components/base/PlusButton.vue';

export default {
  name: 'Home',

  components: { BaseInput, BasePlusButton },

  methods: {
    addTask() {},
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
#todo-main {
  width: 100%;
  max-width: 450px;
}
#todo-input {
  width: 75%;
}
header, main {
  width: 100%;
}
h1 {
  font-weight: 400;
}
header > h1 > strong {
  color: var(--todo-red);
}
</style>
