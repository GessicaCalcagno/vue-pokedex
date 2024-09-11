<script>
    import axios from "axios";

    export default {
        data() {
            return {
                pokemonName: "",
                error: null
            };
        },
        methods: {
            searchPokemon() {
                this.error = null; // Resetta l'errore

                if (this.pokemonName.trim() === '') {
                    this.error = 'Inserisci un nome valido';
                    return;
                }

                // Eseguiamo la chiamata API usando then e catch
                axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
                    .then(response => {
                        console.log(response.data); //azioni in caso di successo
                        this.$emit('pokemon-found', response.data); // Invia i dati al componente padre
                    })
                    .catch(err => {
                        // Se la chiamata fallisce o il Pokémon non viene trovato, gestiamo l'errore con catch
                        this.error = 'Pokemon non trovato';
                    });
            }

        }



    };
</script>

<template>
    <div>
        <input type="text" v-model="pokemonName" placeholder="Inserisci il nome di un Pokémon" />
        <button @click="searchPokemon">Cerca</button>
        <p v-if="error">{{ error }}</p>
    </div>
</template>
