<template>
    <Navbar />
    <section class="store">

    </section>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from '@/components/Navbar.vue'

export default defineComponent ({
    name: 'Store',
    data() {
        return {

        }
    },
    components: {
        Navbar,
    }
});
</script>

<style lang="scss" scoped>

$backgroundColor: #1c0f22;
$textColor: #d1c1f8;
$textSize: 24px;

</style>