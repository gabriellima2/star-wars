<script setup lang="ts">
import Characters from "../components/Characters.vue";
import { useCharacters } from "../hooks/useCharacters";

const {data, error, loading} = useCharacters();
</script>

<template>
	<p v-if="loading">Carregando...</p>

	<p v-if="error || !data">{{error}}</p>

	<main v-else>
		<Characters :characters="data.results" />
	</main>
</template>

<style scoped></style>
