<template>
  <div>
    <ul>
      <li
        v-for="(tarefa, indice) in tarefasConcluidas"
        :key="indice"
        todo-tarefaConcluida
      >
        {{ tarefa }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListarConcluidas',
};
</script>
