<template>
	<div>
		<div class="d-flex">
			<div
				:class="{'bg-primary': !light, 'bg-accent' : accent,}"
				class="bg-disabled align-items-center justify-content-center d-flex"
				style="width: 42px"
			>
				<icon :name="icon" class="t-white" size="1.2" />
			</div>
			<ck-box stretch :primary="!light" :accent="accent" :light="light" :select="select">
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
			default: false
		},
		select: {
			type: Boolean,
			default: false
		},
		accent: {
			type: Boolean,
			default: false
		},
		br: {
			type: Boolean,
			default: false
		}
	}
};
</script>