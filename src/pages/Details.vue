<script setup lang="ts">
import { useRoute } from "vue-router";
import { useSpecificCharacter } from "../composables/useSpecificCharacter";

import Fullscreen from "../components/Fullscreen.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

const { params } = useRoute();
const { data, error, loading } = useSpecificCharacter(params.id as string);
</script>

<template>
	<Fullscreen class="content">
		<Loading v-if="loading" />

		<Error v-else-if="error || !data">
			Ocorreu um problema para pegar os dados. Por favor, verifique sua conexão e recarregue a página.
		</Error>

		<div v-else class="character">
			<h1>{{ data.name }}</h1>
			<p>
				{{data.height}}CM {{data.mass}}Kg
			</p>
		</div>

	</Fullscreen>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";
.content {
	@include flex-center("row")
}
.character {
	width: fit-content;

	padding: 16px 32px;
	border-radius: 8px;

	text-align: center;
	background-color: $util-color;

	& > h1 {
		text-decoration: line-through;
		margin-bottom: 16px;
	}

	& > p {
		font-style: italic;
	}
}
</style>
