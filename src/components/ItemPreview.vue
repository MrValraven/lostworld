<template>

    <div class="itemPreview">
        <div class="title">
            <h1>Dixit</h1>
            <i class="fas fa-tree"></i>
        </div>
        <div class="image">
            <img src="@/assets/dixIt.png" alt="">
        </div>
        <div class="subtitle">
            <h2>Jogo de tabuleiro</h2>
            <i class="fas fa-hand-sparkles"></i>
        </div>
        <div class="descricao">
            <p class="descrição">um jogo mega fixe um jogo mega fixeum jogo mega fixeum jogo mega fixeum jogo mega fixeum jogo mega fixe</p>
            <p>In Stock: 3</p>
        </div>
        <div class="preco">
            <p>19.99 €</p>
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

$fontSize: 14px;
$backgroundColor: #1c0f22;
$textColor: #d1c1f8;

.itemPreview {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 21vw;
    padding: 30px 10px 30px 10px;
    border-radius: 18px;
    background: #1c0f22;
    box-shadow:  
    20px 20px 60px #000,
    -20px -20px 60px #000;

    .title,
    .subtitle {
        width: 90%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: lighten($color: $backgroundColor, $amount: 25%);
        border-radius: 30px;
        font-size: $fontSize;
        border: 1px solid purple;
        box-shadow: 0px 3px lighten($color: $backgroundColor, $amount: 20%);
        
        // usar box shadow para outline
        z-index: 5;

        h1,
        h2 {
            padding-left: 15px;
            font-weight: lighter;
        }

        i {
            padding-right: 10px;
        }
    }

    .image {
        display: flex;
        justify-content: center;
        width: 75%;
        border: 2px solid purple;


        img {
        width: 75%;
        border: 2px solid purple;
        outline: 1px solid white;
        }
    }
    

    .descricao {
        width: 75%;
        border: 2px solid purple;
        outline: 1px solid white;
        padding: 5px;
    }

    .preco {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        text-align: right;

        p {
            position: relative;
            bottom: 0;
            text-align: center;
            width: 5vw;
            padding: 10px 5px 10px 5px;
            border-radius: 20px;
            border: 2px solid $backgroundColor;
            
            box-shadow: inset 20px 20px 17px #0b060e,
            inset -20px -20px 17px #2d1836;
        }
    }


}



</style>