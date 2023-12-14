<template>
  <v-container>
    <AddTask
      v-on:task-added="addTask">
    </AddTask>

    <v-divider></v-divider>

    <v-list>
      <Task v-for="t in tasklist" :task="t"
        v-on:task-completed="completeTask"
        v-on:task-removed="removeTask">
      </Task>
    </v-list>

  </v-container>
</template>

<script>
  import Task from './Task.vue';
  import AddTask from './AddTask.vue';
  
  export default {
    data() {
      return {
        tasklist: []
      };
    },
    methods: {
      addTask(t) {
        this.tasklist.push(t);
        console.log('added task ',t.name);
      },

      completeTask(t) {
        t.cmp = true;
        console.log('completed task ', t.name)
      },

      removeTask(t) {
        this.tasklist = this.tasklist.filter(task => task.id !== t.id);
        console.log('removed task ', t.name);
      },

    },
    components: { AddTask , Task}
  }
</script>