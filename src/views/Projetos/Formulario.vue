<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input 
                    type="text" 
                    class="input" 
                    v-model="nomeDoProjeto" 
                    id="nomeDoProjeto"
                >
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/index'
//import IProjeto from '';

export default defineComponent({
    name: 'FormularioI',
    data(){
        return {
            nomeDoProjeto: ''
        };
    },
    methods: {
        salvar(){
            // const projeto: IProjeto = {
            //     nome: this.nomeDoProjeto,
            //     id: new Date().toISOString()
            // }
            // this.projetos.push(projeto)
            this.store.commit('ADICIONAR_PROJETO', this.nomeDoProjeto)
            this.nomeDoProjeto = '';
            this.$router.push('/projetos')

        },
    },
    setup(){
        const store = useStore()
        return {
            store
        }
    }
})

</script>

<style>
.projetos{
    padding: 1.25rem;
}
</style>