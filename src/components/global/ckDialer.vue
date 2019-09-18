<template>
	<div>
		<div class="dialer">
			<div class>
				<ck-box
					:accent="item.clicked"
					@click="click(i)"
					class
					v-for="(item, i) in items"
					:key="i"
					mr
					mb
				>
					<div class="p-4 cell">{{item.value}}</div>
				</ck-box>
				<ck-audio accent label="תפריט הקשות" />
			</div>
		</div>
		<!-- <div>
			<ck-audio></ck-audio>
		</div>-->
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [
			{ clicked: false, value: 3 },
			{ clicked: false, value: 2 },
			{ clicked: false, value: 1 },
			{ clicked: false, value: 6 },
			{ clicked: false, value: 5 },
			{ clicked: false, value: 4 },
			{ clicked: false, value: 9 },
			{ clicked: false, value: 8 },
			{ clicked: false, value: 7 },
			{ clicked: false, value: "#" },
			{ clicked: false, value: 0 },
			{ clicked: false, value: "*" }
		]
	}),
	methods: {
		click(i) {
			this.items.forEach((item, ix) => {
				ix === i ? (item.clicked = true) : (item.clicked = false);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.dialer {
	width: 350px;
	display: grid;
	grid-gap: 0.25rem;
	grid-template-columns: repeat(3, auto);
	grid-auto-rows: auto, auto, auto;
}

.cell {
	display: grid;
	width: calc(265px / 3);
	height: calc(265px / 3);
	text-align: center;
	font-weight: 400;
	font-size: 1.4rem;
	color: $text-primary;
	// height: 100%;
	cursor: pointer;
}
</style>