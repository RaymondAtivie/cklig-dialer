<template>
	<div class="d-flex justify-content-center align-items-center my-4">
		<div class="flex-fill">
			<div class="hr-accent" />
		</div>
		<div class>
			<ck-box accentDark class="px-5">
				<slot></slot>
			</ck-box>
		</div>
		<div class="flex-fill">
			<div class="hr-accent"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hr {
	width: 100%;
	height: 1px;
	background-color: $text-primary;
	&-accent {
		@extend .hr;
		background-color: $accent-orange;
	}
	&-blue {
		@extend .hr;
		background-color: $primary;
	}
}
</style>