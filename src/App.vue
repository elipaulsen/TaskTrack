<script setup>
  import Banner from './components/Banner.vue';
  import Task from './components/Task.vue';
  import AddTask from './components/AddTask.vue';
</script>

<template>
  <v-app class="app">
    <Banner/>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <AddTask/>
        <v-divider></v-divider>
        <Task/>
      </v-container>
    </v-main>

  </v-app>

</template>

<style scoped>
  .app {
    background-image: linear-gradient(lightcyan, cadetblue);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
</style>
