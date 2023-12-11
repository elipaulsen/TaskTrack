<!-- TodoList.vue -->
<template>
  <div>
    <h1>Todo List</h1>
    <div>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <button @click="addTask">Add Task</button>
    </div>

    <div v-if="tasks.length">
      <h2>Tasks:</h2>
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </div>
    <div v-else>
      <p>No tasks available.</p>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task,
  },
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          id: Date.now(),
          title: this.newTask,
          completed: false,
        });
        this.newTask = '';
      }
    },
    toggleTask(taskId) {
      const taskIndex = this.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        this.$set(this.tasks, taskIndex, {
          ...this.tasks[taskIndex],
          completed: !this.tasks[taskIndex].completed,
        });
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
  },
};
</script>
