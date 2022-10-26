<script setup lang="ts">
import { Characters } from "../types";
import Character from "./Character.vue";

const props = defineProps<{characters: Characters}>();
</script>

<template>
  <ul v-for="character in props.characters" :key="character.created">
		<Character :character="character" />
	</ul>
</template>

<style scoped lang="scss"></style>
