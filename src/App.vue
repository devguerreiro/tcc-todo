<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-display: swap;
}
#app {
  --todo-red: #FF2345;
  --todo-green: #46FF88;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.justify-evenly {
  justify-content: space-evenly;
}
.align-end {
  align-items: flex-end;
}
.text-center {
  text-align: center;
}
</style>
