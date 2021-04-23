<template>

    <div class="reviewCard">
        <div class="cardContent">
            <blockquote cite="tripadvisor">
                {{quote }}Comics, toys, boardgames, card games, and anything Comic Book Related. A place where you can go with your friends and play games, read a comic, buy a comic, or simply just to talk with the owner (who's a great guy, btw! :D ) I absolutely recommend it!!!!!!
            </blockquote>
            <span>🌟🌟🌟🌟🌟</span>
            <div>
                <img src="" alt="">
                <p> {{ author }}mooleann (Tripadvisor)</p>
                
            </div>
        </div>
        
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({    
    name: 'Review',
    props: {
        quote: String,
        author: String,
        img: String,
    }
});
</script>

<style lang="scss" scoped>

$fontSize: 18px;

.reviewCard {
    height: 400px;
    width: 300px;
    border: 2px solid white;

    .cardContent {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        blockquote {
            margin: 20px;
            font-size: $fontSize;
        }
    }

}

</style>