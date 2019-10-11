<template>
	<div>
		<div class="d-flex">
			<ck-box bg-white :br-red="br" stretch style="height: 50px;">
				<div style="font-weight: 500" :class="disabled ? 't-disabled' : 't-black'">
					{{label}}
					<div class="fs-03 mt-1" style="font-weight: 300">
						<div>{{time}}</div>
					</div>
				</div>
			</ck-box>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		time: {
			type: String
		},
		br: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
</style>