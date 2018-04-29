<template>
<div id="schedule" class="container">
    <div class="row">
        <div class="col-lg-4 col-sm-6 col-xs-12" v-for="match in matches">
            <fixture :fixture="match" :date="parseDate(match.date)" :time="parseTime(match.date)"></fixture>
        </div>
    </div>
</div>
</template>

<script>
import Fixture from './Fixture'
export default {
    name: 'Schedule',
    data () {
        return {
            
        }
    },
    components: {
        Fixture
    },
    props: [
        'matches'
    ],
    methods: {
        parseDate(date) {
//            var date_time = date.split("T");
            var d = new Date(date);
            var date_split = d.toString().split(" ");
            return date_split.slice(1,4).join(" ");
        },
        parseTime(date) {
            var date_split = date.split("T");
            var time_split = date_split[1].split(":");
            var time = time_split.slice(0,2).join(":");
            time += " GMT";
            return time;
        },
        logMatches () {
            var m = [];
            for (var entry in this.matches) {
                var key = entry;
                var ms = [];
                var ob = {};
                for (var time in this.matches[entry]) {
                    var k = time;
                    var o = {};
                    o[k] = this.matches[entry][time];
                    ms.push(o);
                }
                ob[key] = ms;
                m.push(ob);
            }
        }
    }
};
</script>

<style lang="scss">
/*
    #schedule {
        margin: 5px;
    }
*/
    
    .container {
        margin-bottom: 40px;
    }

</style>