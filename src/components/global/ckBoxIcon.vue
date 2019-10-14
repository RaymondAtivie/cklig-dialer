<template>
	<div>
		<div class="d-flex">
			<div class="bg-primary align-items-center justify-content-center d-flex" style="width: 42px">
				<icon :name="icon" class="t-white" size="1.2" />
			</div>
			<ck-box stretch primary >
				<span class="stretch">
					<slot></slot>
				</span>
			</ck-box>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "source-branch"
		},
		light: {
			type: Boolean,
			default: true
		}
	}
};
</script>