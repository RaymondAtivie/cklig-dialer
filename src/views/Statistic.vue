<template>
    <div class="statistic">
        <div class="container">
            <div class="main-title-area py-5">
                <div class="left-icon">
                    <icon name="chevron-right" size="4" color="#e0e1e0" />
                </div>
                <div class="main-title">
                    <span>
                        מספרים וירטואלים
                    </span>
                </div>
                <div class="right-icon">
                     <icon name="chevron-left" size="4" color="#e0e1e0" />
                </div>
            </div>
            <div class="virtual-number-card-display">
                <div class="first-section">
                    <div class="image-icon-wrapper">
                        <img src="../assets/BarHalfQuater.png" class="w-100"/>
                    </div>
                    <div class="text-area">
                        <div>
                            <span class="large bold">2 מספרים פעילים</span>
                        </div>
                        <div>
                            <span>מתוך 3 מספרים שברשותך</span>
                        </div>
                    </div>
                </div>
                <div class="second-section">
                    <div class="image-icon-wrapper">
                        <img src="../assets/BarQuater.png" class="w-100"/>
                    </div>
                    <div class="text-area">
                        <div>
                            <span class="large bold">%86 נוצלו</span>
                        </div>
                        <div>
                            <span>מתקציב החייגן - נותרו 52 דקות</span>
                        </div>
                    </div>
                </div>
                <div class="third-section">
                    <div class="image-icon-wrapper">
                        <img src="../assets/ArrowUpRed.png" class="w-100"/>
                    </div>
                    <div class="text-area">
                        <div>
                            <span class="large bold">00:06:22</span>
                        </div>
                        <div>
                            <span>זמן שיחה ממוצע</span>
                        </div>
                    </div>
                </div>
                <div class="fourth-section">
                    <div class="image-icon-wrapper">
                        <img src="../assets/ArrowDownGreen.png" class="w-100"/>
                    </div>
                    <div class="text-area">
                        <div>
                            <span class="large bold">7 אג׳ לדקה</span>
                        </div>
                        <div>
                            <span>מחיר ממוצע לחודש זה</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="virtual-number-select-area">
                <div class="card-select">
                    <ck-virtual-number-select 
                        :active="currentVirtualNumber === 'settings'"
                        iconType="settings"
                        title="הגדרות השירות"
                        @click="handle('settings')"
                    />
                </div>
                <div class="card-select">
                    <ck-virtual-number-select
                        :active="currentVirtualNumber === 'management'" 
                        iconType="management" 
                        title=" ניהול ותפעול שוטף"
                        @click="handle('management')" 
                    />
                </div>
                <div class="card-select">
                    <ck-virtual-number-select 
                        :active="currentVirtualNumber === 'reports'" 
                        iconType="reports" 
                        title="דוחות וסטטיסטיקות"
                        @click="handle('reports')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentVirtualNumber: ''
        }
    },
    methods: {
        handle(select){
            if(this.currentVirtualNumber === select){
                this.currentVirtualNumber = "";
                return;
            }
            this.currentVirtualNumber = select;

        }
    }
}
</script>
<style lang="scss" scoped>
    .statistic {
        .main-title-area {
            display: flex;
            justify-content: center;
            align-items: center;

            .left-icon {
                flex: 1;
                display: flex;
                justify-content: center;
            }

            .main-title {
                display: flex;
                justify-content: center;

                span {
                    color: $primary;
                    font-size: 35px;
                    font-weight: bold;
                    letter-spacing: 1.1px;
                }
            }

            .right-icon {
                flex: 1;
                display: flex;
                justify-content: center;
            }
        }

        .virtual-number-card-display{
            border: 1px solid #e0e1e0;;
            height: 90px;
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .first-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;


                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .second-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .third-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .fourth-section {
                display: flex;
                align-items: center;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }
            
            .text-area {
                padding-right: 10px;

                .large {
                    font-size: 25px;
                }

                .bold {
                    font-weight: bold;
                }

                span {
                    font-size: 15px;
                    color: $text-primary
                }  
            }
        }

        .virtual-number-select-area {
            display: flex;
            justify-content: space-between;
            padding: 20px 0;

            .card-select {
                //flex: 1;
                width: 350px;
            }
        }
    }
</style>