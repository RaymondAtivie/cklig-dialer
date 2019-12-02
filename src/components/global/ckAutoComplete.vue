<template>
    <v-autocomplete
        :placeholder="placeholder"
        :items="items"
        :filter="activeFilter"
        filled
        flat
        :height="height"
        :background-color="backgroundColor"
        :style="{ borderRadius: '0px', border: innerBorder ? `1px solid ${innerBorder}` : 'none', padding: '6px 0', backgroundColor: backgroundColor ? backgroundColor : 'inherit'}"
        hide-details
        persistent-hint
        color="black"
        v-model="mySelection"
    >

        <!-- @change="handleChange"  -->
        <div slot="label">
           {{ label }}
        </div>
        <template v-slot:item="{ item }">
                <v-row no-gutters>
                    <v-col v-if="allowIcon">
                        <v-icon 
                            color="#78909d"
                            small
                        >
                            mdi-trophy
                        </v-icon>
                    </v-col>
                    <v-col class="text-left">
                        <span :style="{color: itemTextAccentOrange ? '#ff6430': ''}"> {{ item }} </span>
                    </v-col>
                </v-row>
        </template>
    </v-autocomplete>
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'לחץ כאן כדי לבחור מספר',
        },
        label: {
            type: String,
            default: ' חפש מספר המכיל את הספרות',
        },
        items: {
            type: Array,
            default(){
                return [
                    '3123456', '3346728', '3366444', '3139865',
                    '34112795', '3890066', '3166446', '3344678',
                    '3669445', '34416695', '3890066'
                ]
            }
        },
        allowIcon: {
            type: Boolean,
            default: true,
        },
        height: {
            type: String,
            default: '50px',
        },
        itemTextAccentOrange: {
            type: Boolean,
            default: false,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        innerBorder: {
            type: String,
        },
        value: {
            type: String,
        },
    },
    data(){
        return {
            model: null,
            mySelection: '',
            filters: [
                {
                    value: 0,
                    //eslint-disable-next-line
                    fn: (item, queryText, itemText) => item.indexOf(queryText) > -1,
                    text: 'Exact Match',
                },
                {
                    value: 1,
                    //eslint-disable-next-line
                    fn: (item, queryText, itemText) => queryText.length > 2 && item.toLowerCase().indexOf(queryText) > -1,
                    text: 'Search Length > 2 & Loose Match',
                },
            ],
        }
    },
    watch: {
        value(v){
            this.mySelection = v;
        },
        mySelection(v){
            this.$emit('input', v);
        }
    },
    computed: {
      activeFilter () {
        if (this.model == null) return undefined
        return this.filters[this.model].fn
      },
    },
    // methods: {
    //     handleChange(value){
    //         // this.$emit('input', value);
    //     }
    // }
}
</script>
<style lang="scss">
    .v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input {
        font-size: 20px;
        font-weight: bold;
        color: $text-primary;

        &::placeholder{
            font-size: 20px;
            font-weight: bold;
            color: $text-primary;
        }
    }

    .v-text-field>.v-input__control>.v-input__slot:before {
        border-style: none;
        border-width: 0px;
    }

    .v-text-field>.v-input__control>.v-input__slot:after {
        border-style: none;
        border-width: 0px;
        transform: none;
    }

    .v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after {
        transform: none;
    }
</style>