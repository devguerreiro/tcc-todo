<template>
  <div>
    <span
      tabindex="0"
      @click="callback"
    >
      <svg
        style="width:24px;height:24px"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PlusButton',

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
