<template>
    <header>
        <nav>
        <div class="logo">
            <h1 class="lostworld">Lost World</h1>
        </div>
        <ul>
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/store"><li>Shop</li></router-link>
            <router-link to="/store"><li>About us</li></router-link>
            <router-link to="/store"><li>Contacts</li></router-link>
        </ul>
        </nav>
    </header>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Navbar',
});
</script>

<style lang="scss">

header {
  position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 1;
	color: #fff;
	padding-top: 25px;

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    div:first-child {
      margin-right: 200px;
    }
    
    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 6px 15px;
        margin: 0 10px 0 10px;
        font-family: 'Poppins', sans-serif;
        border-radius: 20px;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.15s ease-out;

        &:hover {
          background-color: #ffffff;
          color: #2b1055;
        }

        &.router-link-exact-active {
          background-color: #ffffff;
          color: #2b1055;
        }
      }

      
    }
  }
}

.lostworld {
  font-family: 'Bangers', cursive;
  font-weight: 100;
  letter-spacing: 1.2px;
}
</style>