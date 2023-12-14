<template>
  <v-list-item>
    <v-card class="taskcard" :class="{completed:task.cmp}" @mouseenter="hover" @mouseleave="nhover" :elevation="cardElevation" shaped :disabled="task.cmp" >
      <v-card-title>
        {{ task.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ task.id }}
      </v-card-subtitle>

      <v-card-text>
        {{ task.details }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="completeTask(task)" text>
          Complete
        </v-btn>
        <v-btn @click="removeTask(task)" text color="red">
          Remove
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-list-item>
</template>

<script>
  export default {
    data () {
      return {
        cardElevation: 3,
      };
    },

    props: {
      task: Object
    },

    methods: {
      completeTask(t) {
        this.$emit('task-completed', t);
      },

      removeTask(t) {
        this.$emit('task-removed', t);
      },

      hover() {
        this.cardElevation = 24; // Set the elevation value when the mouse enters the card
      },
      nhover() {
        this.cardElevation = 3;
      },
    },
  }
</script>

<style scoped>
  .taskcard {
    margin-top: 18px;
    width: 500px;
  }

.completed {
    background-color: rgb(150, 208, 145);
    border-width: 1px;
    border-color: lime;
  }
</style>