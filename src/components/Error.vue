<template>
	<div class="container">
		<h1 role="alert" class="container__error-message">
			<slot></slot>
		</h1>
	</div>
</template>

<style scoped lang="scss">
@import "../assets/scss/_main.scss";
.container {
	width: 100%;
	height: 100%;

	@include flex-center("row");
}

.container__error-message {
	font-size: 1.2rem;
	font-weight: 500;
	color: $font-color;
}
</style>
