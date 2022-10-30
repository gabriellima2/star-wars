<script setup lang="ts">
import { useCharacters } from "../composables/useCharacters";

import Characters from "../components/Characters.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

const {data, error, loading} = useCharacters();
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
			<Characters :characters="data.results" />
		</main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";
main {
	@include fullscreen;

	overflow: hidden;
}

.content {
	@include flex-center("column");

	height: auto;
	overflow: auto;
}
</style>
