<script setup lang="ts">
import Character from "./Character.vue";
import type { Characters } from "../types";

const props = defineProps<{characters: Characters}>();
</script>

<template>
  <ul class="character-list">
		<li v-for="character in props.characters" :key="character.created">
			<Character :character="character" />
		</li>
	</ul>
</template>

<style scoped lang="scss">
.character-list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px 24px;

	margin-top: 64px;
}
</style>
