<template>
  <v-app-bar app class="banner">
    <h1>Task Track</h1>
    <h3>{{ date }}</h3>
  </v-app-bar>
</template>

<script>
  const date = new Date().toLocaleDateString();

  export default {
    data() {
      return {
        date
      }
    },

    mounted() {
      // Update the current date every minute
      setInterval(() => {
        this.date = new Date().toLocaleDateString();
      }, 60000);
    }
  };
</script>

<style scoped>
  .banner {
    background-color: lightcyan !important;
  }
  .banner h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Ensure the content takes up the full width */
  }

  .banner h3 {
    margin-right: 15px;
  }
</style>