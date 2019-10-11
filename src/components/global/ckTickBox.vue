<template>
	<div>
		<div class="d-flex align-items-stretch">
			<div :class="''" class="align-items-center justify-content-center d-flex" style="width: 50px;">
				<icon :name="icon" class="t-white" size="2" />
			</div>
			<div style="min-width: 100px; height: 50px;" class>
				<ck-box stretch :accent="!disabled" style="height: 50px; font-weight: 600; font-size: 20px;">
					<span class="stretch">{{label}}</span>
				</ck-box>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "check"
		},
		label: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
};
</script>