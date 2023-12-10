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
    background-color: rgb(31, 58, 59);
    text-align: center;
    border-radius: 0 0 100px 100px;
    width: 1000px;
  }

  h1 {
    color: salmon;
    font-size: 100px;
    margin: 0 0 0 0;
  }

  h2 {
    color: salmon;
    margin: 0 0 0 0;
  }
</style>