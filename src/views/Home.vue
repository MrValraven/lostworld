<template>
  <header>
    <nav>
      <div class="logo">
        <h1>Lost World</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
    </nav>
  </header>
  <section class="hero">
    <div class="heroImage">
      <img src="@/assets/adventurePortal.jpg" alt="">
    </div>
    <div class="heroContent">
      <h1>Lost World Comics</h1>
      <p>Welcome Adventurer , are you ready to dwelve into the mists of the <span>Lost World</span>?</p>
      <a> Explore now </a>
    </div>
  </section>
  <section class="info">
    <img src="@/assets/fantasticLandscape.jpg" alt="">
    <div>
      <h1>titulo</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perspiciatis iusto, nobis quas distinctio vero neque hic cum at rerum quae ad fugit voluptates dicta ullam, quod praesentium repellat cumque impedit saepe, veniam voluptas unde aliquam dolores. Repudiandae quo temporibus dolor, fugit amet minima odio suscipit ipsam obcaecati quisquam possimus.</p>
    </div>
  </section>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      backgroundImage: '@/assets/adventurePortal.jpg'
    }
  },
  components: {
  },
   computed: {
      style () :String {
        return `background-image: url(${this.backgroundImage})`;
      }
    },
});
</script>

<style lang="scss" scoped>

$buttonColor: #4545cc;

section {
  height: 100vh;
}

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

      li {
        padding: 6px 15px;
        margin: 0 10px 0 10px;
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.15s ease-out;

        &:hover {
          background-color: #ffffff;
          color: #2b1055;
        }
      }
    }
  }
}

.hero {

  .heroImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    img {
      height: 100vh;
      max-width: 100%;
      z-index: -1;
      
    }

    // blurred gradient at the bottom of hero image
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #1c0f22, transparent);
      z-index: 100;
    }

  }

  .heroContent {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 50px;

    h1 {
      font-size: 68px;
      margin: 0;
    }

    p {
      font-size: 24px;
      width: 30%;
      margin-bottom: 10px;
    }
  }
}

h1,
span {
  font-family: 'Bangers', cursive;
  font-weight: 100;
}


a {

max-width: 300px;
      position: relative;
      display: inline-block;
      text-align: center;
      text-transform: uppercase; 
      padding: 15px;
      margin: 30px 25px 30px 0px;
      font-size: 100% + 10%;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: $buttonColor;
      transition: all 0.5s;

      &::before {
        position: absolute;
        content:"";
        border-radius: 5px;
        border-top: 5px solid lighten($buttonColor, 5%);
        border-left: 5px solid lighten($buttonColor, 5%);	
        border-right: 5px solid darken($buttonColor, 5%);
        border-bottom: 5px solid darken($buttonColor, 5%);
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;	
        transition: 0.5s;
      }
      &:hover {
        box-shadow: 7px 7px darken($buttonColor, 10%), -7px -7px lighten($buttonColor, 10%);
        background-color: $buttonColor;
        color: #f7f7f7;
        cursor: pointer;
          &::before {
          border: 0px;
        }
      }
    }

.info {
  background-color: #1c0f22;

  img {
    width: 500px;
  }
}
</style>
