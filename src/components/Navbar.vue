<template>
    <header>
        <nav>
        <div class="logo">
            <h1 class="lostworld">Lost World</h1>
        </div>
        <div class="searchField">
          <input type="text" placeholder="What are you looking for?">
          <i class="fas fa-search"></i>
        </div>
        
        <ul>
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/store"><li>Shop</li></router-link>
            <router-link to="/about"><li>About us</li></router-link>
            <router-link to="/contacts"><li>Contacts</li></router-link>
            <router-link to="/user">
             <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" x="0px" y="0px"
              viewBox="0 0 508.27 508.27" style="enable-background:new 0 0 508.27 508.27;" xml:space="preserve">
              <path style="fill:#C19D7B;" d="M254.135,417.399c47.809,0,88.159-27.804,102.4-66.458l-102.4-24.752l-102.4,24.752
                C165.976,389.595,206.326,417.399,254.135,417.399z"/>
              <path style="fill:#56545F;" d="M281.261,80.36h-54.252c-44.419,0-80.36,35.942-80.36,80.36v61.033H361.96v-61.033
                C361.621,116.302,325.679,80.36,281.261,80.36z"/>
              <g>
                <circle style="fill:#EEB490;" cx="178.183" cy="222.093" r="31.534"/>
                <circle style="fill:#EEB490;" cx="330.087" cy="222.093" r="31.534"/>
                <path style="fill:#EEB490;" d="M207.004,289.907v41.367c0,26.109,21.023,47.131,47.131,47.131l0,0
                  c26.109,0,47.131-21.023,47.131-47.131v-41.367H207.004z"/>
              </g>
              <path style="fill:#FACCB4;" d="M274.819,150.209c-19.327,29.499-72.223,35.603-101.044,36.959c0,1.356,0,2.713,0,4.069v58.999
                c0,44.419,35.942,80.36,80.36,80.36s80.36-35.942,80.36-80.36v-59.338c0-2.374,0-5.086-0.339-7.46
                C299.232,173.944,274.819,150.209,274.819,150.209z"/>
              <polygon style="fill:#FF667C;" points="305.674,112.572 254.135,0 202.596,112.572 128.678,57.981 146.649,150.209 254.135,150.209 
                361.621,150.209 379.592,57.981 "/>
              <path style="fill:#EEB490;" d="M254.135,468.26c-76.63,0-144.106-30.177-183.099-76.291c-5.425,9.833-8.477,21.701-8.477,33.907
                v82.395h383.152v-82.395c0-12.207-3.052-23.735-8.477-33.907C398.241,438.082,330.766,468.26,254.135,468.26z"/>
              <path style="fill:#8A6753;" d="M254.135,468.26c76.63,0,144.106-30.177,183.099-76.291c-8.138-15.258-22.04-26.787-38.654-30.856
                l-42.045-10.172c-14.241,38.654-54.591,66.458-102.4,66.458s-88.159-27.804-102.4-66.458l-42.045,10.172
                c-16.615,4.069-30.517,15.597-38.654,30.856C110.029,438.082,177.505,468.26,254.135,468.26z"/>
            </svg>

            </router-link>
            <router-link to="/">
              <svg version="1.1" id="cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" x="0px" y="0px"
              viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
                <path fill="#000000" d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
                H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
                c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
                c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
                c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
                c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
                S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
                s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"/>
              </svg>
            </router-link>
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

<style lang="scss" scoped>

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

    .searchField {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 25%;
      border-radius: 20px;

       input {
        border-radius: 20px;
        padding: 10px 15px;
        width: 100%;
        outline: none;
      }

      i {
        margin-left: 22%;
        padding: 10px;
        border-radius: 20px;
        color: black;
        cursor: pointer;
        position: absolute;
  
      }
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