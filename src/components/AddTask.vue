<template>
  <div>
    <v-row>
      <v-col sm="2">
        <h3>Add a task</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="2">
        <v-text-field label="Task Name" v-model="task.name" ></v-text-field>
      </v-col>

      <v-col sm="3">
        <v-text-field label="Task Details" v-model="task.details" ></v-text-field>
      </v-col>

      <v-col class="button">
        <v-btn @click="createTask">
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        task: null,
      };
    },
    methods: {
      createTask() {
        if (this.task.name === '' || this.task.details === '') {
          this.resetTaskObject();
          return;
        }
        this.$emit('task-added', this.task);
        this.resetTaskObject();
      },

      resetTaskObject() {
        this.task = {
          name: '',
          details: '',
          cmp: false,
          id: new Date(),
        }
      },
    },
    created() {
      this.resetTaskObject();
    }
  };
</script>

<style scoped>
  .button {
    margin-top: 10px;
  }
</style>
