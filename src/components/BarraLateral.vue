<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Alura Tracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema">{{textoBotao}}</button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks">
                            tarefas
                        </i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram">
                            Projetos
                        </i>
                    </router-link>
                </li>
            </ul>
        </nav>
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

.panel li {
    margin: 10px 0;
}
.link {
    color:#fff;
}
.link:hover {
    color: #faf0ca;
}
.link-router-link-active{
    color: #faf0ca
}
</style>
