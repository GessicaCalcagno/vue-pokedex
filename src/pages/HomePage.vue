<script>
   import SearchPokemon from "../components/SearchPokemon.vue"; // Importo il componente di ricerca Pokemon
   import PokemonDetail from "../components/PokemonDetail.vue";

   export default {
      components: {
         SearchPokemon,
         PokemonDetail,
      },
      data() {
         return {
            pokemon: null // Per memorizzare i dati del Pokémon trovato
         };
      },
      methods: {
         handlePokemonFound(pokemon) {
            this.pokemon = pokemon; // Aggiorna i dati del Pokémon quando viene trovato
         }
      }
   };
</script>

<template>
   <div>
      <SearchPokemon @pokemon-found="handlePokemonFound" />
      <PokemonDetail v-if="pokemon" :pokemon="pokemon" />
   </div>
</template>

<style scoped></style>
