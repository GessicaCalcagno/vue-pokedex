<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemonName: "",
      error: null,
    };
  },
  methods: {
    searchPokemon() {
      this.error = null; // Resetta l'errore

      if (this.pokemonName.trim() === "") {
        this.error = "Inserisci un nome valido";
        return;
      }

      const url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`;

      axios
        .get(url)
        .then((response) => {
          this.$emit("pokemon-found", response.data); // Invia i dati del Pokémon al componente padre HomePage
        })
        .catch((error) => {
          console.error("Errore durante la ricerca del Pokémon:", error);
          this.error = "Pokemon non trovato";
        });
    },
  },
};
</script>

<template>
  <div>
    <input v-model="pokemonName" placeholder="Inserisci il nome del Pokémon" />
    <button @click="searchPokemon">Cerca</button>

    <!-- Messaggio Pokemon non trovato! -->
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>
