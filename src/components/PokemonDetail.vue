<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    savePokemon() {
      console.log("Pokemon salvato");
      this.$emit("save-pokemon", this.pokemon); // Emissione evento per salvare il Pokémon
    },
  },
};
</script>


<!-- //:key="type.type.name" Quando Vue aggiorna il DOM per una lista di elementi, come nel caso del ciclo v-for, utilizza il valore di key per identificare in modo univoco ogni elemento della lista. Questo aiuta Vue a capire quali elementi sono stati aggiunti, rimossi o semplicemente riordinati, permettendo al framework di ottimizzare il rendering e di aggiornare solo ciò che è realmente cambiato, migliorando le prestazioni-->

<template>
  <div class="pokemon-detail">
    <div class="img-pokemon">
      <img
        :src="pokemon.sprites.front_default"
        alt="Immagine Pokémon frontale"
      />
    </div>
    <div class="pokemon-info">
      <h3>Name: {{ pokemon.name }}</h3>
      <p>
        Type: <span v-for="type in pokemon.types">{{ type.type.name }}</span>
      </p>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }} lbs</p>
    </div>
    <!-- Pulsante per salvare il Pokémon -->
    <button @click="savePokemon">Salva nel Pokedex</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
