<template>
	<main>
		<slot></slot>
	</main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";

main {
	@include fullscreen;

	overflow: hidden;
}
</style>
