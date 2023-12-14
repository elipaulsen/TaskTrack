<template>
  <div>
    <v-row>
      <v-col sm="2">
        <h3>Add a task</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="1">
        <v-text-field label="Task Name" v-model="task.name" ></v-text-field>
      </v-col>

      <v-col sm="3">
        <v-text-field label="Task Details" v-model="task.details" ></v-text-field>
      </v-col>

      <v-col class="button">
        <v-btn  @click="createTask">
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
        task: {
          name: "",
          details: "",
        },
      };
    },
    methods: {
      createTask() {
        if (this.task.name === "") {
          console.log('return')
          return;
        }
        this.$emit("task-added", this.task);
        console.log('added')
        this.task.name = "";
        this.task.details = "";
      },
    },
  };
</script>

<style scoped>
  .button {
    margin-top: 10px;
  }
</style>