<template>
	<div role="alert" class="loading">
		<span class="loading__circle" />
		<span class="loading__circle" />
		<span class="loading__circle" />
	</div>
</template>

<style scoped lang="scss">
@import "../assets/scss/_main.scss";
.loading {
	width: 100%;
	height: 100%;

	@include flex-center("row");
}

.loading__circle {
	display: inline-block;

	margin-left: 4px;
	padding: 12px;
	border-radius: 100%;

	animation: scaling 1.2s ease-in-out infinite;
	background-color: aliceblue;
}
</style>
