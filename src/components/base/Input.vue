<template>
  <div>
    <input
      v-if="callback"
      v-model="inputValue"
      type="text"
      autofocus
      :placeholder="placeholder"
      @keypress.enter="handleCallback"
    >
    <input
      v-else
      v-model="inputValue"
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

  data() {
    return {
      inputValue: '',
    };
  },

  methods: {
    handleCallback() {
      const inputWithNoSpaces = this.inputValue.trim();

      if (inputWithNoSpaces) {
        this.callback(inputWithNoSpaces);

        this.inputValue = '';
      }
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
