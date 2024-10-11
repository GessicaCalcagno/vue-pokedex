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
      <img :src="pokemon.sprites.front_default" alt="Immagine Pokémon frontale" />
    </div>
    <div class="pokemon-info">
      <h3>Name: {{ pokemon.name }}</h3>
      <p>Type: <span v-for="type in pokemon.types" :key="type.type.name">{{ type.type.name }} </span></p>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }} lbs</p>

      <!-- Sezione statistiche -->
      <div class="pokemon-stats">
        <h4>Stats</h4>
        <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat">
          <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: stat.base_stat + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    <button @click="savePokemon">Salva nel Pokedex</button>
  </div>
</template>

<style scoped lang="scss">
.pokemon-stats {
  margin-top: 20px;
}
.stat {
  margin-bottom: 10px;
}
.progress-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 10px;
  width: 100%;
}
.progress {
  background-color: #4caf50;
  height: 100%;
  border-radius: 10px;
}
</style>

