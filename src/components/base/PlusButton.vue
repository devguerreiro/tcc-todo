<template>
  <div>
    <span
      tabindex="0"
      @click="callback"
    >
      <base-plus-icon />
    </span>
  </div>
</template>

<script>
import BasePlusIcon from '@/components/base/PlusIcon.vue';

export default {
  name: 'PlusButton',

  components: { BasePlusIcon },

  props: {
    callback: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
span {
  color: var(--todo-green);
  display: flex;
  align-items: center;
  cursor: pointer;
  border: solid 1px var(--todo-green);
  border-radius: 20%;
}
span:hover {
  background-color: var(--todo-green);
  color: #fff;
}
</style>
