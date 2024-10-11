<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFront: true, // Stato che indica se mostrare l'immagine frontale o posteriore
    };
  },
  mounted() {
    // Alterna automaticamente tra l'immagine frontale e posteriore ogni 2 secondi
    this.imageInterval = setInterval(() => {
      this.isFront = !this.isFront;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.imageInterval); // Pulisce l'intervallo quando il componente viene distrutto
  },
  methods: {
    savePokemon() {
      this.$emit("save-pokemon", this.pokemon);
    },
  },
};
</script>

<template>
  <div class="pokemon-detail">
    <div class="img-pokemon">
      <!-- Mostra l'immagine in base al valore di isFront -->
      <img
        :src="isFront ? pokemon.sprites.front_default : pokemon.sprites.back_default"
        alt="Immagine Pokémon"
      />
    </div>
    <div class="pokemon-info">
      <h3>Name: {{ pokemon.name }}</h3>
      <p>
        Type: <span v-for="type in pokemon.types">{{ type.type.name }}</span>
      </p>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }} lbs</p>
      <div class="pokemon-stats">
        <h4>Stats</h4>
        <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat">
          <span>{{ stat.stat.name }}: </span>
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
.pokemon-detail .img-pokemon {
  margin-bottom: 20px;
}

.pokemon-detail img {
  width: 150px;
  height: 150px;
}

.pokemon-stats .stat {
  margin-bottom: 10px;
}

.pokemon-stats .progress-bar {
  background-color: white;
  border-radius: 5px;
  height: 8px;
  width: 100%;
  border: 1px solid black;
}

.pokemon-stats .progress {
  background-color: black;
  height: 100%;
  border-radius: 5px;
}
</style>

