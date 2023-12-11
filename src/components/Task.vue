<template>
  <div class="task">
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>

  export default {
    data () {
      return {
        msg: "hello"
      }
    },

    mounted () {

    },
  };
</script>

<style scoped>
  .task {
    height: 100px;
    width: 450px;
    border-radius: 15px 15px 15px 15px;
    background-color: tan;
  }

  .task h1{
    margin-left: 25px;
  }
</style>