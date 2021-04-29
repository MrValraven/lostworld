<template>
    <section class="pageContent">
        <section class="store">
            <div class="indice">
                <ul>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                    <li>Categoria 1</li>
                </ul>
            </div>
            <div class="items">
                <ItemPreview />
            </div>

        </section>
    </section>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from '@/components/Navbar.vue'
import ItemPreview from '@/components/ItemPreview.vue'

export default defineComponent ({
    name: 'Store',
    data() {
        return {

        }
    },
    components: {
        Navbar,
        ItemPreview,
    }
});
</script>

<style lang="scss" scoped>

$backgroundColor: #1c0f22;
$textColor: #d1c1f8;
$textSize: 24px;

.store {
    display: flex;
    align-items: center;
    height: 100vh;

    border: 2px solid red;

    .indice {
            width: 20%;
            margin-right: 50px;
        ul {
            padding: 0;

            li {
                padding: 15px;
                border: 1px solid white;
            }
        }
    }
}

</style>