<template>
	<div>
		<div class="d-flex align-items-stretch">
			<div
				:class="disabled ? 'bg-disabled' : 'bg-accent'"
				class="align-items-center justify-content-center d-flex"
				style="width: 50px;"
			>
				<icon :name="icon" :class="disabled ? 't-disabled' : 't-white'" size="2" />
			</div>
			<div style="width: 120px; height: 50px;">
				<ck-box
					stretch
					:accent="!disabled"
					:disabled="disabled"
					style="height: 50px; font-weight: 600; font-size: 20px;"
				>
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