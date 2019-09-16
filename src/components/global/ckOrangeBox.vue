<template>
	<div>
		<div class="d-flex">
			<div class="stretch">
				<ck-box block primary class="mb">{{label}}</ck-box>
				<ck-box select block light>{{subText}}</ck-box>
			</div>
			<div>
				<ck-box block accentDark mr class="info-btn">
					<p>{{mainText}}</p>
				</ck-box>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mainText: {
			type: String
		},
		subText: {
			type: String
		},
		label: {
			type: String
		}
	}
};
</script>

<style lang="scss" scoped>
.info-btn {
	width: 105px;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
</style>