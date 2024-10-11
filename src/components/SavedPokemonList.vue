<script>
export default {
  props: {
    savedPokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removePokemon(id) {
      this.$emit("remove-pokemon", id);
    },
  },
};
</script>

<template>
  <div class="saved-pokemon-list">
    <ul>
      <li v-for="pokemon in savedPokemons" :key="pokemon.id">
        <router-link
          :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }"
        >
          {{ pokemon.name }}
        </router-link>
        <button @click="removePokemon(pokemon.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
