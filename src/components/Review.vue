<template>

    <div class="reviewCard">
        <div class="cardContent">
            <blockquote cite="tripadvisor">
                Comics, toys, boardgames, card games, and anything Comic Book Related. A place where you can go with your friends and play games, read a comic, buy a comic, or simply just to talk with the owner (who's a great guy, btw! :D ) I absolutely recommend it!!!!!!
            </blockquote>

            <div>
                <img src="" alt="">
                <p> mooleann (tripadvisor)</p>
                
            </div>
        </div>
        
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({    
    name: 'Review',
    props: {

    }
});
</script>

<style lang="scss" scoped>

.reviewCard {
    height: 400px;
    width: 300px;
    border: 2px solid white;

    .cardContent {

        blockquote {
            margin: 20px;
        }
    }
}

</style>