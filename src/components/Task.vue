<template>
  <v-card class="task-card" :elevation="cardElevation" shaped outlined @mouseenter="hover" @mouseleave="nhover" draggable="true">
    <v-card-title>
      {{ TaskName }}
    </v-card-title>

    <v-card-subtitle>
      {{ TaskNum }}
    </v-card-subtitle>

    <v-card-text>
      {{ TaskDetails }}
    </v-card-text>

    <v-card-actions>
      <v-btn text>
        Complete
      </v-btn>
      <v-btn text>
        Edit
      </v-btn>
      <v-btn text color="red">
        Remove
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        cardElevation: 3,
        TaskName: "Reserve tickets",
        TaskDetails: "Book tickets for real madrid game January 3, 2024 find difn idjhsad asjdioa ajsdoij ",
        TaskNum: "Task #1",
      };
    },

    methods: {
      hover() {
        this.cardElevation = 24; // Set the elevation value when the mouse enters the card
      },
      nhover() {
        this.cardElevation = 3;
      }
    },
  }

</script>

<style scoped>
  .task-card {
    background-color: lightcyan;
    margin-top: 30px;
    max-width: max-content;
  }
</style>