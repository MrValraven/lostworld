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
      <p>On the verge of a dark canyon, an arcane force pulls you towards a mysterious portal.<br> Are you ready to delve into the mystical lands of the <span>Lost World</span>?</p>
      <a> Enter the Portal </a>
    </div>
  </section>
  <section class="info">
    <div class="infoImage">
      <img src="@/assets/fantasticLandscape.jpg" alt="">
    </div>
    <div class="infoImage2">
      <img src="@/assets/fantasticLandscape.jpg" alt="">
    </div>
    <div class="featuresContent">
        <Feature v-for="feature in features" :key="feature.id" :icon="getImgURL(feature.icon)" :title="feature.subtitle" :description="feature.description" />
    </div>
  </section>
  <section class="reviews">
    <Review />
  </section>
  <section class="comics">
    <img src="@/assets/courtOfOwls.jpg" alt="">
    <div>
      <h1>Court of Owls buys its comics at Lost World!</h1>
      <p> Immerse yourself in marvel , dc , conan , saga, invincible</p>
      <a> shop now</a>
    </div>
  </section>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Review from '@/components/Review.vue'
import Feature from '@/components/Feature.vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      backgroundImage: '@/assets/adventurePortal.jpg',
      features: [
        {id: 1, icon: "sword-shield.svg", subtitle: "As Modinhas", description: "Aquisição e desenvolvimento de novas competências e conhecimentos musicais e a comemoração da cultura alentejana e das tradições da academia eborense."},
        {id: 2, icon: "wizard.svg", subtitle: "A Camaradagem", description: "Experiências, histórias, memórias e aventuras únicas e originais das viagens pelo país e estrangeiro. Um grupo de amigos que estará sempre disposto a ajudar, nos bons e maus momentos"},
        {id: 3, icon: "book.svg", subtitle: "O Vinho", description: "Celebração daquilo que temos de mais belo nesta vida: a capa, a batina, a guitarra, o amor, a açorda, o cante alentejano e o vinho. Para cantar basta beber um copo, e ao cantar ultrapassamos as amarguras da vida."},
      ]
    }
  },
  components: {
    Review,
    Feature,
  },
   computed: {
      style () :String {
        return `background-image: url(${this.backgroundImage})`;
      }
    },
    methods: {
      getImgURL(image: String) {
        return require('../assets/' + image);
      },
    }
});
</script>

<style lang="scss" scoped>

$buttonColor: #4545cc;
$backgroundColor: #1c0f22;

section {
  padding-left: 125px;
  height: 100vh;
  background-color: #1c0f22;
  max-width: 100%;
  overflow-x: hidden;
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
  background-color: $backgroundColor;
  overflow: hidden;

  .heroImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    img {
      height: 100vh;
      max-width: 100%;
      z-index: 1;
      overflow: hidden;
      
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
    text-shadow: 2px 2px black;
    z-index: 10;

    h1 {
      font-size: 68px;
      margin: 0;
      z-index: 10;
    }

    p {
      font-size: 24px;
      width: 30%;
      margin-bottom: 10px;
      z-index: 10;
    }
  }
}

h1,
span {
  font-family: 'Bangers', cursive;
  font-weight: 100;
}


a {

text-shadow: 0px 0px;
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
      z-index: 10;

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0px;

  .infoImage {
    position: absolute;
    top: 110vh;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 2;
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
      top: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(to bottom, #1c0f22, transparent);
      z-index: 100;
    }

  }

  .infoImage2 {
    position: absolute;
    top: 110vh;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    img {
      height: 100vh;
      max-width: 100%;
      z-index: -2;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(to top, #1c0f22, transparent);
      z-index: 100;
    }
  }

  .featuresContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.reviews {
  display: flex;
  justify-content: center;
  align-items: center;
}

.comics {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30%;
  }
}
</style>
