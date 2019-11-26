import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import PrettyCheck from 'pretty-checkbox-vue/check';
import ToggleButton from 'vue-js-toggle-button';
import Multiselect from 'vue-multiselect';

Vue.component('multiselect', Multiselect);
Vue.component('p-check', PrettyCheck);


Vue.use(ToggleButton);

const requireComponent = require.context(
    './components/global',
    true,
    /\.(js|vue)$/i
)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
});