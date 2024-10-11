<script>
import SearchPokemon from "../components/SearchPokemon.vue";
import PokemonDetail from "../components/PokemonDetail.vue";
import SavedPokemonList from "../components/SavedPokemonList.vue";

export default {
  components: {
    SearchPokemon,
    PokemonDetail,
    SavedPokemonList,
  },
  data() {
    return {
      pokemon: null, // Per memorizzare i dati del Pokémon trovato
      savedPokemons: this.getSavedPokemons(),
    };
  },
  methods: {
    handlePokemonFound(pokemon) {
      this.pokemon = pokemon; // Aggiorna i dati del Pokémon quando viene trovato
    },
    handleSavePokemon(pokemon) {
      // Evita di salvare duplicati
      if (
        !this.savedPokemons.some(
          (savedPokemon) => savedPokemon.id === pokemon.id
        )
      ) {
        this.savedPokemons.push(pokemon); // Aggiunge il Pokémon alla lista dei salvati
        this.updateLocalStorage();
      }
    },
    handleRemovePokemon(id) {
      this.savedPokemons = this.savedPokemons.filter(
        (pokemon) => pokemon.id !== id
      );
      this.updateLocalStorage();
    },
    getSavedPokemons() {
      return JSON.parse(localStorage.getItem("savedPokemons")) || [];
    },
    updateLocalStorage() {
      localStorage.setItem("savedPokemons", JSON.stringify(this.savedPokemons));
    },
  },
};
</script>

<template>
  <div class="pokedex-layout">
    <!-- Sezione di sinistra: Ricerca e Dettagli del Pokémon -->
    <div class="pokedex-left">
      <SearchPokemon @pokemon-found="handlePokemonFound" />
      <PokemonDetail
        v-if="pokemon"
        :pokemon="pokemon"
        @save-pokemon="handleSavePokemon"
      />
    </div>
    <div class="pokedex-right">
      <div class="list-pokemon">
        <h2>My Pokemons</h2>
        <!-- Lista dei Pokémon salvati -->
        <SavedPokemonList :savedPokemons="savedPokemons" @remove-pokemon="handleRemovePokemon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pokedex-layout {
  display: flex;
  justify-content: space-between;
}

.pokedex-left {
  width: 50%;
  background-color: red;
  padding: 20px;
}

.pokedex-right {
  width: 50%;
  background-color: red;
  padding: 20px;
}

.list-pokemon {
  background-color: white;
}

h2 {
  text-align: center;
}
</style>
