<template>
  <v-list-item>
    <v-card class="taskcard" :class="{completed:task.cmp}" @mouseenter="hover" @mouseleave="nhover" :elevation="cardElevation" shaped >
      <v-card-title>
        {{ task.name }}
      </v-card-title>

      <v-card-text>
        {{ task.details }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="completeTask(task)" text :disabled="task.cmp">
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
    width: 250px;
  }

.completed {
    background-color: rgb(183, 255, 176);
  }
</style>