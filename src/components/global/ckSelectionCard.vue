<template>
    <div class="selection-card">
        <div class="top" :class="{'disabled': disabled, 'editable': titleEditable}">
            <div class="title-editable" v-if="titleEditable">
                <div class="first-input">
                    <ck-input
                        label="שירות ראשי"
                        color="white"
                        class="bg-white"
                        v-model="eww"
                    />
                </div>
                <div class="second-input">
                    <ck-input
                        label="שירות ראשי"
                        color="white"
                        class="bg-white"
                    />
                </div>
            </div>
            <span v-else>{{ title }}</span>
        </div>
        <div class="body">
            <ck-input
                label="שם המספר"
            />
            <div class="row py-4">
                <div class="col">
                    <ck-input
                        label="שירות ראשי"
                    />
                </div>
                <div class="col">
                    <ck-input
                        label="שירות משלים"
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
                dddd
            </div>
            <div class="block mr-2">
                ddddpppp
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
            default: false
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
                'warning': type === 'warning',
                'error': type === 'error',
                'success': type === 'success',
                'disabled': type === 'disabled',
                'inactive': type === 'inactive'
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

                &.warning {
                    color: #fbb515!important;
                }
                &.disabled {
                    color: #fbfcfd !important;
                }
                &.success {
                    color: #1cc44f;
                }
                &.error {
                    color: #ff0e00;
                }
                &.inactive {
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
            }
        }
    }
</style>