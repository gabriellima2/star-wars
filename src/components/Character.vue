<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { getCharacterID } from "../utils/getCharacterID";

import type { CharacterData } from "../types";

const props = defineProps<{character: CharacterData}>();
const characterId: ComputedRef<string> = computed(() => getCharacterID(props.character.url));
</script>

<template>
	<li>
		<RouterLink :to="{name: 'Details', params: { id: characterId }}">
			{{props.character.name}}
		</RouterLink>
	</li>
</template>

<style scoped lang="scss"></style>
