<template>
    <div class="ui-form-item ui-border-b">
        <label>{{label}}</label>
        <div class="ui-select-group">
                <div class="ui-select">
                    <select v-model="year" @change="initValue">
                        <option v-for="year in yearRows">{{year}}</option>
                    </select>
                </div>
                <div class="ui-select">
                    <select v-model="month" @change="initValue">
                        <option v-for="month in monthRows">{{month | addZero}}</option>
                    </select>
                </div>
                <div class="ui-select group-cut">
                    <select v-model="day" @change="initValue">
                        <option v-for="day in dayRows">{{day | addZero}}</option>
                    </select>
                </div>
                <div class="ui-select">
                    <select v-model="hour" @change="initValue">
                        <option v-for="hour in hourRows">{{hour | addZero}}</option>
                    </select>
                </div>
                <div class="ui-select-detach">:</div>
                <div class="ui-select">
                    <select v-model="minute" @change="initValue">
                        <option v-for="minute in minuteRows">{{minute | addZero}}</option>
                    </select>
                </div>
        </div>
    </div>
</template>

<style>
    .ui-select-group .ui-select.group-cut {
        margin-right: 20px;
    }
    .ui-select-group .ui-select-detach{
        float: left;
        padding-right:6px;
    }
</style>

<script>
    import moment from 'moment'
    import _range from 'lodash/range'
    import _inRange from 'lodash/inRange'
    import {addZero} from '../filters/number'
    import {setDatetime} from '../vuex/datetimeSelector/actions'
    export default{
        props: {
            name: String,
            label: String,
            minYear: {
                type: Number,
                default: 2015
            },
            maxYear: {
                type: Number,
                default: 2018
            },
            minuteGap: {
                type: Number,
                default: 15
            },
            value: {
                type: String,
                default: ''
            },
            selectedDay: {
                type: Number,
                default: 1
            },
            year: Number,
            month: Number,
            day: Number,
            hour: Number,
            minute: Number
        },
        data(){
            return {

            }
        },
        computed: {
            yearRows: function () {
                return _range(this.minYear, this.maxYear);
            },
            dayRows: function () {
                return _range(1, this.getDays()+1);
            },
            monthRows: function () {
                return _range(1, 13);
            },
            hourRows: function () {
                return _range(0, 24);
            },
            minuteRows: function () {
                return _range(0, 60, this.minuteGap);
            },
            dateTime: function () {
                return this.value ? moment(this.value) : moment()
            }
        },
        vuex: {
            getters: {

            },
            actions: {
                setDatetime
            }
        },
        methods: {
            initDateTime: function () {
                this.year = this.dateTime.get('year');
                this.month =  this.dateTime.get('month') + 1;
                this.day =  this.dateTime.get('day');
                this.hour =  this.dateTime.get('hour');
                this.minute =  this.dateTime.get('minute');
            },
            getDays: function () {
                return moment(this.year + '-' + this.month, "YYYY-MM").daysInMonth();
            },
            initValue: function () {
                let currentMonthdayDays = this.getDays();
                this.dayRows = _range(1, currentMonthdayDays+1);
                if(!_inRange(this.day, 1, currentMonthdayDays)) {
                    this.day = currentMonthdayDays;
                }
                let date = moment([this.year, this.month - 1, this.day, this.hour, this.minute]);
                this.setDatetime(this.name, date.format('YYYY-MM-DD hh:mm'));
            }
        },
        components:{

        },
        filters: {
            addZero
        },
        ready () {
            this.initDateTime();
            this.initValue();
        }
    }
</script>