<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
$font: "#f1f1f1";
$background: "#111111";

a {
	text-decoration: none;
	color: $font;
}

@keyframes scaling {
	0%, 100% {
		transform: scale(0.4);
	}
	50% {
		transform: scale(0.8);
	}
}

.fullscreen {
	width: 100vw;
	height: 100vh;

	overflow: hidden;
}
</style>
