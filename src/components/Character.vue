<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { sliceUrl } from "../utils/sliceUrl";

import type { CharacterData } from "../types";

const props = defineProps<{character: CharacterData}>();
const characterId: ComputedRef<string> = computed(() => sliceUrl(props.character.url, "/people/"));
console.log(characterId.value);
</script>

<template>
	<li>
		<RouterLink :to="{name: 'Details', params: { id: characterId }}">
			{{props.character.name}}
		</RouterLink>
	</li>
</template>

<style scoped lang="scss"></style>
