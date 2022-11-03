<script setup lang="ts">
import { useRoute } from "vue-router";
import { useSpecificCharacter } from "../composables/useSpecificCharacter";

const { params } = useRoute();
const { data, error, loading } = useSpecificCharacter(params.id as string);
</script>

<template>
	<main v-if="loading">
		<Loading />
	</main>

	<main v-else-if="error || !data">
		<Error>
			Ocorreu um problema para pegar os dados. Por favor, verifique sua conexão e recarregue a página.
		</Error>
	</main>

	<main v-else class="content">
		<div class="character">
			<h1>{{ data.name }}</h1>
			<p>
				{{data.height}}CM {{data.mass}}Kg
			</p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";
.content {
	@include flex-center("row");

	height: 100vh;
}

.character {
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
