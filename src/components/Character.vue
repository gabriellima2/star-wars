<script setup lang="ts">
import { Character } from "../types";

const props = defineProps<{character: Character}>();
</script>

<template>
	<li>
		{{props.character.name}}
	</li>
</template>

<style scoped lang="scss"></style>
