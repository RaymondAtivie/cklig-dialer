<template>
    <nav>
        <div class="py-1">
            <div class="mx-4">
                <span>
                    03:45
                </span>
                <span class="mx-1">
                    &middot;
                </span>
                <span>
                    03:45
                </span>
                <span class="mx-1">
                    &middot;
                </span>
                <span>
                    September 2021 26
                </span>
            </div>
        </div>
        <div class="py-3 px-4 bg-primary">
            <div class="row align-items-center t-white">
                <div class="col" style="font-size: 1.5rem">
                    <div class="d-flex">
                        <icon name="menu" class="pointer ml-3" />
                        <span>
                            מספרים וירטואלים
                        </span>
                    </div>
                </div>
                <div class="col text-left" style="font-size: 1rem">
                    <router-link to="/home" class="t-white mr-3">
                        Comps
                    </router-link>
                    <router-link to="/one" class="t-white mr-3">
                        PageOne
                    </router-link>
                    <router-link to="/two" class="t-white mr-3">
                        PageTwo
                    </router-link>
                    <router-link to="/three" class="t-white mr-3">
                        PageThree
                    </router-link>
                </div>
            </div>
        </div>
        <div class="py-2 bg-primary-secondary">
            <div class="mx-4 t-white">
                שם החשבון / עולם נוכחי / קטגוריית פעילות / עמוד נוכחי
            </div>
        </div>
    </nav>
</template>