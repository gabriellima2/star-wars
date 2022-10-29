<template>
	<div class="container">
		<h1 role="alert" class="container__error-message">
			<slot></slot>
		</h1>
	</div>
</template>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	overflow: hidden;
}

.container__error-message {
	font-size: 1.2rem;
	font-weight: 500;
	color: #f1f1f1;
}
</style>
