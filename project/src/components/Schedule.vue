<template>
<div id="schedule" class="container">
    <h3>Schedule</h3>
    <div class="row">
        <div @click="showModal(match)" class="col-lg-4 col-sm-6 col-xs-12" v-for="match, i in matches">
            <fixture :fixture="match" :date="parseDate(match)" :time="parseTime(match.date)"></fixture>
        </div>
    </div>
    <modal v-show="isShowModal" :url="url" @close="closeModal"></modal>
</div>
</template>

<script>
import Fixture from './Fixture'
import Modal from './Modal'
export default {
    name: 'Schedule',
    data () {
        return {
            isShowModal: false,
            url: ''
        }
    },
    components: {
        Fixture,
        Modal
    },
    props: [
        'matches'
    ],
    methods: {
        saySomething () {
            console.log('say something');
        },
        showModal (match) {
//            this.url = url;
//            console.log('show modal');
            console.log(match._links.self.href);
            this.url = match._links.self.href;
            this.isShowModal = true;
        },
        closeModal () {
            this.isShowModal = false;
        },
        parseDate(match_date) {
            var date = match_date.date;
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
    
    .container {
        margin-bottom: 40px;
    }
    
    .container h3 {
        padding-bottom: 20px;
    }

</style>