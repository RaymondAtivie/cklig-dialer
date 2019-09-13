<template>
    <div class="alert" :class="alertClass">
        <div class="icon" v-if="!noIcon">
            <icon name="check-circle" v-if="type == 'success'" />
            <icon name="close-circle" v-if="type == 'danger'" />
            <div style="display: inline-block" class="rotate-90"  v-if="type == 'warning'">
                <icon name="information" />
            </div>
            <icon name="help-circle"  v-if="type == 'info'" />
        </div>
        <div class="content">
            <div class="title">
                {{title}}
                <slot name="title"></slot>
            </div>
            <div class="subtitle">
                {{message}}
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        success: {
            type: Boolean,
            default: false,
        },
        warning: {
            type: Boolean,
            default: false,
        },
        danger: {
            type: Boolean,
            default: false,
        },
        info: {
            type: Boolean,
            default: false,
        },
        noIcon: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
    },
    computed: {
        type(){
            if(this.success){
                return 'success';
            }else if(this.danger){
                return 'danger';
            }else if(this.warning){
                return 'warning';
            }else {
                return 'info'
            }
        },
        alertClass(){
            return {
                [this.type]: true
            }
        }
    }
}
</script>