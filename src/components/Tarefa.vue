<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                dicrição da tarefa
            </div>
            <div class="column">
                <Cronometro tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: 'TarefaI',
    components: {
        Cronometro,
    }
})

</script>

<style scoped>
.box {
    background:#fdcf72;
}
</style>