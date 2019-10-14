<template>
	<div>
		<div class="row">
			<div class="col-3 pl-1">
				<div class="d-flex flex-wrap" v-for="(tab, index) in tabs" :key="index">
					<ck-box
						block
						:primary="isActiveTab(tab) && !accentActive"
						:accent="accentActive"
						br
						class="mb pointer"
						@click="(activateTab(tab), tab.showTabs = !tab.showTabs)"
						:disabled="!isActiveTab(tab)"
					>{{tab.text}}</ck-box>
					<div v-if="tab.subTabs && tab.showTabs">
						<ck-box
							mb
							ml
							bg-primary
							:disabled-dark="!isActiveSubTabBlock(tab.subTabs)"
							style="height: 95%;"
						>
							<icon name="keyboard-return" size="1.3" />
						</ck-box>
					</div>
					<div class="flex-fill" v-if="tab.showTabs">
						<ck-box
							block
							primary
							@click="activateTab(subTab)"
							:disabled="!isActiveSubTab(subTab)"
							stretch
							br
							mb
							v-for="(subTab, ix) in tab.subTabs"
							:key="ix"
						>{{subTab.text}}</ck-box>
					</div>
				</div>
			</div>
			<div class="border-light-bg-right pr-4" :class="expand ? 'col': 'col-6'">
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
		},
		expand: {
			type: Boolean,
			required: false
		},
		accentActive: {
			type: Boolean,
			required: false,
			default: false
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
		isActiveTab(tab) {
			let isActiveTab = this.activeTab === tab.value;
			let isActiveSubTab;
			if (tab.subTabs) {
				isActiveSubTab = tab.subTabs.find(
					el => el.value === this.activeTab
				);
			}
			return isActiveTab || isActiveSubTab;
		},
		activateTab(tab) {
			this.activeTab = tab.value;
			this.$emit("input", tab.value);
		},
		isActiveSubTabBlock(subTabs) {
			return subTabs.find(el => el.value == this.activeTab);
		},
		isActiveSubTab(subTab) {
			return subTab.value === this.activeTab;
		}
	}
};
</script>