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
            <VCard>www</VCard>
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
            <div class="icon p-4">
                <ck-icon-circle
                    icon="bookmark"
                    class="custom-icon"
                    :customColor="disabled ? '#ffffff' : ''" 
                    :customBg="disabled ? '#fbfcfd' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
            </div>
            <div class="icon p-4">
                <ck-icon-circle
                    icon="check"
                    class="custom-icon"
                    :customColor="disabled ? '#ffffff' : ''" 
                    :customBg="disabled ? '#fbfcfd' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
            </div>
            <div class="icon p-4">
                <ck-icon-circle
                    icon="arrow-down-bold"
                    class="custom-icon"
                    :customColor="disabled ? '#ffffff' : ''" 
                    :customBg="disabled ? '#fbfcfd' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
            </div>
            <div class="icon p-4">
                <ck-icon-circle
                    icon="phone-outgoing"
                    class="custom-icon"
                    :customColor="disabled ? '#ffffff' : ''" 
                    :customBg="disabled ? '#fbfcfd' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
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
        }
    },
    data(){
        return {
            eww: 'uuhh ttt uuoopprr',
            error: false,
            success: false,
            warning: false,
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