<template>
  <Navbar />
  <router-view/>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}

</script>



<style lang="scss">
$backgroundColor: #1c0f22;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");

#app {
  
  font-family: 'Poppins', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
  cursor: url("./assets/swordCursor.svg"), auto;
  background-color: $backgroundColor;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #1c0f22;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d1c1f8;
    border-radius: 5px;
  }
}

ul,
li {
  list-style-type: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

</style>
