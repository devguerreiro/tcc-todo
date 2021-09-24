<template>
  <div>
    <input
      v-if="callback"
      type="text"
      @keypress.enter="callback"
    >
    <input
      v-else
      type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    callback: {
      type: Function,
      default: null,
    },
  },
};
</script>
