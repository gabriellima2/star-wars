<script setup lang="ts">
import { useCharacters } from "../hooks/useCharacters";

import Character from "./Character.vue";

const {data, error, loading} = useCharacters();
</script>

<template>
	<p v-if="loading">Carregando...</p>

	<p v-if="error">{{error}}</p>

  <ul v-for="character in data?.results" :key="character.created">
		<Character :character="character" />
	</ul>
</template>

<style scoped lang="scss"></style>
