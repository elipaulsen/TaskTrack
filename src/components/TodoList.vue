<template>
  <v-container>
    <AddTask
      v-on:task-added="addTask">
    </AddTask>

    <v-divider></v-divider>

    <ul>
      <Task v-for="t in tasklist" :task="t"
        v-on:task-completed="completeTask"
        v-on:task-removed="removeTask">
      </Task>
    </ul>

  </v-container>
</template>

<script>
  import Task from './Task.vue';
  import AddTask from './AddTask.vue';
  import VueCookies from 'vue-cookies'
  
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
        this.persistTaskList();
      },

      completeTask(t) {
        t.cmp = true;
        console.log('completed task ', t.name)
        this.persistTaskList();
      },

      removeTask(t) {
        this.tasklist = this.tasklist.filter(task => task.id !== t.id);
        console.log('removed task ', t.name);
        this.persistTaskList();
      },

      persistTaskList() {
      VueCookies.set('tasklist', this.tasklist);
      },

      loadTaskList() {
        const cookies = VueCookies.get('tasklist');
        if (cookies) {
          this.tasklist = cookies;
        }
      },
    },
    mounted() {
      this.loadTaskList();
    },

    components: { AddTask , Task},
  }
</script>