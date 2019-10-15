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
						@click="(activateTab(tab))"
						:disabled="!isActiveTab(tab)"
					>{{tab.text}}</ck-box>
					<div level-1 class="mb" style="min-height: 100%" v-if="tab.subTabs && tab.showTabs">
						<ck-box
							mb
							ml
							bg-primary
							:disabled-dark="!isActiveSubTabBlock(tab.subTabs)"
							style="height: 100%;"
						>
							<icon name="keyboard-return" size="1.3" />
						</ck-box>
					</div>
					<div class="flex-fill" v-if="tab.showTabs">
						<div v-for="(subTab, ix) in tab.subTabs" :key="ix">
							<ck-box
								block
								primary
								@click="activateTab(subTab)"
								:disabled="!isActiveSubTab(subTab)"
								stretch
								br
								mb
							>{{subTab.text}}</ck-box>
							<div class="d-flex" v-if="subTab.showTabs">
								<div level-2 class="mb" style="min-height: 100%">
									<ck-box mb ml bg-primary style="height: 100%">
										<icon name="keyboard-return" size="1.3" />
									</ck-box>
								</div>
								<div class="flex-fill">
									<div v-for="(minTab, indx) in subTab.subTabs" :key="indx">
										<ck-box block primary stretch br mb @click="activateTab(minTab)">{{minTab.text}}</ck-box>
										<div class="d-flex" v-if="minTab.showTabs">
											<div level-3 class="mb" style="min-height: 100%">
												<ck-box ml bg-primary style="height: 100%;">
													<icon name="keyboard-return" size="1.3" />
												</ck-box>
											</div>
											<div class="flex-fill">
												<div v-for="(lastTab, inx) in minTab.subTabs" :key="inx">
													<ck-box block primary stretch br mb>{{lastTab.text}}</ck-box>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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
	computed: {
		activeTabb() {
			return this.tabs.find(tab => tab.value === this.value);
		}
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
			if (tab.subTabs) {
				tab.showTabs = !tab.showTabs;
			}
			this.activeTab = tab.value;
			this.$emit("input", tab.value);
		},
		isActiveSubTabBlock(subTabs) {
			return subTabs.find(el => el.value == this.activeTab);
		},
		isActiveSubTab(subTab) {
			return subTab.value === this.activeTab;
		}
		// hasSubOfSubTabs(tab) {
		// 	// tab.subTabs.foreach(sub => {
		// 	// 	if(
		// 	// })
		// }
	}
};
</script>