<template>
    <section>
        <strong class="display">
            {{ tempoDeCorrido }}
        </strong>
    </section>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CronometroI',
        props:{
            tempoEmSegundos:{
                type: Number,
                default:0
            }
        },
        computed:{
            tempoDeCorrido() : string {
                return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8) 
            }
        },
    })

</script>

<style scoped>
.display{
    color: var(--texto-primario)
}
</style>