<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import { getCharacterID } from "../utils/getCharacterID";
import type { CharacterData } from "../types";

const props = defineProps<{character: CharacterData}>();
const characterId: ComputedRef<string> = computed(() => getCharacterID(props.character.url));
</script>

<template>
	<RouterLink
		:to="{name: 'Details', params: { id: characterId }}"
		class="link"
	>
		<div class="character">
			<h1>{{props.character.name}}</h1>
			<p>
				{{props.character.height}}CM {{props.character.mass}}Kg
			</p>
		</div>
	</RouterLink>
</template>

<style scoped lang="scss">
@import "../assets/scss/_main.scss";
.link {
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.6;
	}
}

.character {
	padding: 16px;
	border-radius: 8px;
	background-color: $util-color;

	& > h1 {
		margin-bottom: 16px;
	}
}
</style>
