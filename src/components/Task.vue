<!-- Task.vue -->
<template>
  <div class="task">
    <h2>{{ task }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: "this is a sample task"
    };
  },
};
</script>

<style scoped>
  .task {
    height: auto;
    margin-left: 250px;
    width: 500px;
    margin-bottom: 8px;
    border-radius: 15px 15px 15px 15px;
    background-color: rgb(35, 35, 35);
  }

  .task h2 {
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 25px;
    color: lightgray;
  }
</style>