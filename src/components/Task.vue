<!-- Task.vue -->
<template>
  <div class="task">
    <input type="checkbox" v-model="task.completed" @change="toggleTask" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleTask() {
      this.$emit('toggle-task', this.task.id);
    },
    deleteTask() {
      this.$emit('delete-task', this.task.id);
    },
  },
};
</script>

<style scoped>
  .task {
    height: 100px;
    width: 500px;
    margin-bottom: 8px;
    border-radius: 15px 15px 15px 15px;
    background-color: white;
  }

  .completed {
  text-decoration: line-through;
}
</style>