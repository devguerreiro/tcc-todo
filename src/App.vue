<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Montserrat', sans-serif;
  font-display: swap;
  font-size: 16px;
}
html, body {
  margin: 0;
}
#app {
  --todo-red: #FF2345;
  --todo-green: #46FF88;
}
ul {
  list-style-type: none;
  padding: 0;
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
.justify-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
.align-end {
  align-items: flex-end;
}
.text-center {
  text-align: center;
}
</style>
