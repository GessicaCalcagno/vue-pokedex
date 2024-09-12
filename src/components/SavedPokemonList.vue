<script>
export default {
  props: {
    savedPokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="saved-pokemon-list">
    <ul>
      <!-- Mostra ogni Pokémon salvato nella lista -->
      <li v-for="pokemon in savedPokemons">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>