<script setup>
  import Banner from './components/Banner.vue';
  import TodoList from './components/TodoList.vue';
</script>

<template>
  <v-app class="app">
    <Banner/>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <TodoList/>
    </v-main>

  </v-app>

</template>

<style scoped>
  .app {
    background-image: linear-gradient(lightcyan, cadetblue);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
</style>
