<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/scss/_main.scss";

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	color: $font-color;
	font-family: $font-main;
	background-color: $main-color;
}

a {
	text-decoration: none;
	color: $font-color;
}

li {
	list-style: none;
}

@keyframes scaling {
	0%, 100% {
		transform: scale(0.4);
	}
	50% {
		transform: scale(0.8);
	}
}
</style>
