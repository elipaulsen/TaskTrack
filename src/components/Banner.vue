<template>
  <div class="banner">
    <h1>TASKS</h1>
    <h2>{{ date }}</h2>
  </div>
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
    background-color: rgb(35, 35, 35);
    text-align: center;
    border-radius: 0 0 100px 100px;
    border-width: 2px;
    border-style: solid;
    border-color: lime;
    width: 1000px;
  }

  .router {
    display: flex;
    justify-content: space-around; /* Adjust as needed */
    padding: 10px;
  }

  h1 {
    color: lime;
    font-size: 100px;
    margin: 0 0 0 0;
  }

  h2 {
    color: lightgrey;
    margin: 0 0 0 0;
  }
</style>