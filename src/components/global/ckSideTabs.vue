<template>
	<div>
		<div class="row">
			<div class="col-3 pl-1">
				<ck-box
					block
					primary
					br
					class="mb pointer"
					v-for="(tab, index) in tabs"
					:key="index"
					@click="activateTab(tab.value)"
					:disabled="!isActiveTab(tab.value)"
				>{{tab.text}}</ck-box>
			</div>
			<div class="col-6 border-light-bg-right pr-4">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true
		},
		value: {
			type: [String, Number],
			default: 1
		}
	},
	data() {
		return {
			activeTab: this.value || this.tabs[0].value
		};
	},
	watch: {
		value(v) {
			this.$emit("input", v);
		}
	},
	methods: {
		isActiveTab(tabValue) {
			return this.activeTab === tabValue;
		},
		activateTab(tabValue) {
			this.activeTab = tabValue;
			this.$emit("input", tabValue);
		}
	}
};
</script>