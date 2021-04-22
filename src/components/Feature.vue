<template>
    <li class="card">
        <img :src="icon" alt="">
		<h1 class="quote"> {{ title }} </h1>
		<p class="author"> {{ description }} </p>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Feature',
  props: {
      icon: String,
      title: String,
      description: String,
  }
});
</script>

<style lang="scss">
$primaryColor: #8448a0;
$textColor: #774fd4;
$textColor1: #d1c1f8;
$backgroundColor: #1c0f22;
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
	padding: 20px;
	margin: 10px 20px 10px 10px;
    width: 350px;
    height: 300px;
    border-radius: 20px;
    z-index: 120;
    background-color: $backgroundColor;
    box-shadow: -7px -7px 20px 0px rgba(0, 0, 0, 0.6),
            -4px -4px 5px 0px rgba(0, 0, 0, 0.6),
            7px 7px 20px 0px #0002,
            4px 4px 5px 0px #0001,
            inset 0px 0px 0px 0px rgba(10, 10, 10, 0.6),
            inset 0px 0px 0px 0px #0001,
            inset 0px 0px 0px 0px rgba(17, 17, 17, 0.6),
            inset 0px 0px 0px 0px #0001;

    img {
        height: 100px;
        color: darken($color: $textColor1, $amount: 28%) ;
        margin-bottom: 25px;
        z-index: 120;
    }
    h1 {
        color: #555;
        font-size: 20px;
        margin-bottom: 25px;
        z-index: 120;
        color: darken($color: $textColor1, $amount: 15%) ;
    }
    p {
        margin: 0;
        z-index: 120;
        color: $textColor1;
    }
}
</style>