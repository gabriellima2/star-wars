<script setup lang="ts">
import { useCharacters } from "../composables/useCharacters";

import Characters from "../components/Characters.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

const {data, error, loading} = useCharacters();
</script>

<template>
	<main>

		<span v-if="loading" class="fullscreen">
			<Loading />
		</span>

		<span v-if="error || !data" class="fullscreen">
			<Error>
				Ocorreu um problema para pegar os dados. Por favor, verifique sua conexão e recarregue a página.
			</Error>
		</span>

		<section v-else>
			<Characters :characters="data.results" />
		</section>
	</main>
</template>

<style scoped></style>
