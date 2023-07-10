<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="nada">
        </h1>
        <button class="button" @click="alterarTema">
            {{textoBotao}}
        </button>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'BarraLateral',
        emits: ['aoTemaAlterado'],
        data () {
            return {
                modoEscuroAtivo: false
            }
        },
        computed: {
            textoBotao () {
                if(this.modoEscuroAtivo) {
                    return 'Desativar modo escuro'
                }
                return 'Ativar modo escuro'
            }
        },
        methods: {
            alterarTema () {
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>
header {
    background: #0d3b66;
    height: 100vw;
    padding:1rem;
    width: 100%;
    text-align: center;
}

@media only scrreen and (max-width: 768px){
      header {
        height:auto;
        padding:2.5rem;
    }
}
</style>
