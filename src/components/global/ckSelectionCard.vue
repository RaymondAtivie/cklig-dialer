<template>
    <div class="selection-card">
        <div class="top" :class="{'disabled': disabled, 'editable': titleEditable}">
            <div class="title-editable" v-if="titleEditable">
                <div class="first-input">
                    <ck-auto-complete 
                        :placeholder="mainInputOptions.placeholder"
                        :items="mainInputOptions.items"
                        :label="mainInputOptions.label"
                        :height="mainInputOptions.height"
                        :allowIcon="mainInputOptions.allowIcon"
                        :itemTextAccentOrange="mainInputOptions.itemTextAccentOrange"
                        :backgroundColor="mainInputOptions.backgroundColor"
                        :border="mainInputOptions.border"
                    />
                </div>
                <div class="second-input">
                    <ck-auto-complete
                        :placeholder="sideInputOptions.placeholder"
                        :items="sideInputOptions.items"
                        :label="sideInputOptions.label"
                        :height="sideInputOptions.height"
                        :allowIcon="sideInputOptions.allowIcon"
                        :itemTextAccentOrange="sideInputOptions.itemTextAccentOrange"
                        :backgroundColor="sideInputOptions.backgroundColor"
                        :border="sideInputOptions.border"
                    />
                </div>
            </div>
            <span v-else>{{ title }}</span>
        </div>
        <div class="body">
            <ck-input
                label="שם המספר"
            />
            <div class="row pt-4 pb-5">
                <div class="col">
                    <ck-auto-complete
                        :placeholder="mainServiceInputOptions.placeholder"
                        :items="mainServiceInputOptions.items"
                        :label="mainServiceInputOptions.label"
                        :height="mainServiceInputOptions.height"
                        :allowIcon="mainServiceInputOptions.allowIcon"
                        :itemTextAccentOrange="mainServiceInputOptions.itemTextAccentOrange"
                        :backgroundColor="mainServiceInputOptions.backgroundColor"
                        :border="mainServiceInputOptions.border" 
                    />
                    
                </div>
                <div class="col">
                    <ck-auto-complete
                        :placeholder="subServiceInputOptions.placeholder"
                        :items="subServiceInputOptions.items"
                        :label="subServiceInputOptions.label"
                        :height="subServiceInputOptions.height"
                        :allowIcon="subServiceInputOptions.allowIcon" 
                        :itemTextAccentOrange="subServiceInputOptions.itemTextAccentOrange"
                        :backgroundColor="subServiceInputOptions.backgroundColor"
                        :border="subServiceInputOptions.border"
                    />
                </div>
            </div>
        </div>
        <div class="icons-area">

            <div v-for="icon in myIcons" :key="icon.iconText">
                <div class="icon p-4">
                    <ck-icon-circle
                        :icon="icon.icon"
                        class="custom-icon"
                        :error="icon.state === 'error'" 
                        :success="icon.state === 'success'" 
                        :warning="icon.state === 'warning'"
                        :customColor="icon.state === 'disabled' ? '#ffffff' : '' || icon.state === 'inactive' ? 'white' : ''" 
                        :customBg="icon.state === 'disabled' ? '#fbfcfd' : '' || icon.state === 'inactive' ? '#e0e1e0' : ''" 
                    />
                </div>
                <div 
                    class="text-center mt-2 icon-text" 
                    :class="setTextColor(icon.state)"
                >
                    {{ icon.iconText }}
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="block">
                <span>
                    החל הגדרות על כל המספרים
                </span>
            </div>
            <div class="block mr-2">
                <span>
                     החל מכאן מספרים עוקבים
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        titleEditable: {
            type: Boolean,
            default: false
        },
        success: {
            type: Boolean,
            default: false,
        },
        mainInputOptions: {
            type: Object,
        },
        sideInputOptions: {
            type: Object,
        },
        mainServiceInputOptions: {
            type: Object,
            required: true,
            
        },
        subServiceInputOptions: {
            type: Object,
            required: true,
        },
        icons: {
            type: Array,
            default: function () {
                return [
                    {
                        icon: 'plus',
                        state: 'warning',
                        iconText: 'בחמספר'
                    },
                    {
                        icon: 'plus',
                        state: 'success',
                        iconText: 'בחר שם'
                    },
                    {
                        icon: 'plus',
                        state: 'warning',
                        iconText: 'שירות ראשי'
                    },
                    {
                        icon: 'plus',
                        state: 'error',
                        iconText: ' שיחות יוצאות'
                    }
                ]
            }
        }
    },
    data(){
        return {
            
            myIcons: this.icons,
            eww: 'uuhh ttt uuoopprr',
            error: false,
            warning: false,
        }
    },
    methods: {
        setTextColor(type){
            return {
                'selection-warning': type === 'warning',
                'selection-error': type === 'error',
                'selection-success': type === 'success',
                'selection-disabled': type === 'disabled',
                'selection-inactive': type === 'inactive'
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    .selection-card {
        width: 100%;
        height: 100%;
        border: 1px solid $text-disabled;
        
        .top {
            padding: 25px 0;
            text-align: center;

            &.disabled {
                background-color: $text-disabled;
            }

            &.editable {
                background-color: $primary-secondary;
            }

            .title-editable {
                display: flex;
                padding-left: 20px;
                padding-right: 20px;

                .first-input {
                    flex: 2; 
                    margin-left: 6px;
                    text-align: right;
                }

                .second-input {
                    flex: 1;
                    text-align: right;
                }
            }
            

            span {
                font-size: 32px;
                font-weight: bold;
                color: #ffffff;
            }
            
        }

        .body {
            padding: 20px 20px 20px;
        }

        .icons-area {
            border-top: 1px solid $text-disabled;
            padding: 10px;
            display: flex;
            justify-content: space-around;

            .icon {
                margin-top: -39px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #e0e1e0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;

                .custom-icon {
                    padding: 1.3rem;
                }
            }

            .icon-text {
                //width: 90px; 
                word-break: break-all;
                font-size: 10px;

                &.selection-warning {
                    color: #fbb515!important;
                }
                &.selection-disabled {
                    color: #fbfcfd !important;
                }
                &.selection-success {
                    color: #1cc44f;
                }
                &.selection-error {
                    color: #ff0e00;
                }
                &.selection-inactive {
                    color: #e0e1e0 !important;
                }
            }
        }

        .bottom {
            padding: 20px;
            display: flex;
            justify-content: center;

            .block {
                background-color: #fbfcfd;
                padding: 10px;
                width: 100%;
                text-align: center;
                color: $text-disabled;

                span {
                    font-size: 13px;
                }
            }
        }
    }
</style>