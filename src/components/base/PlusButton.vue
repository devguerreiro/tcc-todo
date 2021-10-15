<template>
  <div>
    <i
      tabindex="0"
      @click="callback"
    >
      <base-plus-icon />
    </i>
  </div>
</template>

<script>
import BasePlusIcon from '@/components/base/PlusIcon.vue';

export default {
  name: 'BasePlusButton',

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
i {
  color: var(--todo-green);
  display: flex;
  align-items: center;
  cursor: pointer;
  border: solid 1px var(--todo-green);
  border-radius: 20%;
}
i:hover {
  background-color: var(--todo-green);
  color: #fff;
}
</style>
