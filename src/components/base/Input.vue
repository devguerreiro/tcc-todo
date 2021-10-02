<template>
  <div>
    <input
      v-if="callback"
      type="text"
      autofocus
      :placeholder="placeholder"
      @keypress.enter="callback"
    >
    <input
      v-else
      type="text"
      autofocus
      :placeholder="placeholder"
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
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: solid 1.5px #323232;
  font-family: 'Montserrat', sans-serif;
}
</style>
