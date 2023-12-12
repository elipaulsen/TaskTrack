<!-- Task.vue -->
<template>
  <div class="task" :class="{ completed: isCompleted }">
    <h2 :class="{ completed: isCompleted }">{{ task }}</h2>
    <button class="remBtn" @click="removeTask">remove</button>
    <button class="cmpBtn" @click="markAsComplete">complete</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCompleted: false,
      task: "this is a sample task to test a a a a"
    };
  },

  methods: {
    markAsComplete() {
      this.isCompleted = true;
      console.log("Task completed:", this.task);
    },

    removeTask() {
      // Add logic here to handle task removal
      console.log("Task removed:", this.task);
      // You might want to update the task list or perform other actions
    }
  }
};
</script>

<style scoped>
  .task {
    margin-top: 50px;
    display: flex;
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
    margin-right: 100px;
    color: lightgray;
  }

  .remBtn {
    border-color: red;
    color: red;
    background-color: rgb(35, 35, 35);
    width: 100px;
  }

  .cmpBtn {
    border-color: lime;
    color: lime;
    width: 100px;
    background-color: rgb(35,35,35);
  }

  .completed h2 {
    text-decoration: line-through;
    color: rgb(72, 72, 72);
  }
</style>