<script setup lang="ts">
import { useCharacters } from "../composables/useCharacters";

import Fullscreen from "../components/Fullscreen.vue";
import Characters from "../components/Characters.vue";
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";

const {data, error, loading} = useCharacters();
</script>

<template>
	<Fullscreen class="content">
		<Loading v-if="loading" />

		<Error v-else-if="error || !data">
				Ocorreu um problema para pegar os dados. Por favor, verifique sua conexão e recarregue a página.
		</Error>

		<Characters v-else :characters="data.results" />
	</Fullscreen>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";
.content {
	@include flex-center("column");
}
</style>
