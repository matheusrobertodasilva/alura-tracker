<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BoxI',
        data () {
            return {
                estilos: {
                    background: '#fdcf72'
                }
            }
        }
    })
</script>

