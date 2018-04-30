<template>
<div id="schedule" class="container">
    <h3>Schedule</h3>
    <h5>{{ viewing }}</h5>
    <div class="dropdown-container">
        <div class="dropdown">
          <button class="dropbtn">Choose matchday</button>
          <div class="dropdown-content">
              <a href="#" @click="changeDay(0)">See All</a>
              <a v-for="i in days" href="#" @click="changeDay(i)">{{ i }}</a>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6 col-xs-12" v-for="match in sortedMatches">
            <fixture :fixture="match" :date="parseDate(match)" :time="parseTime(match.date)"></fixture>
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
            url: '',
            cur_day: 0,
            days: 38
        }
    },
    components: {
        Fixture
    },
    props: [
        'matches'
    ],
    computed: {
        sortedMatches () {
            var mat = [];
            if (this.cur_day === 0) {
                mat = this.matches;
            } else {
                for (var i = 0; i < this.matches.length; i++) {
                    if (this.matches[i].matchday === this.cur_day) {
                        mat.push(this.matches[i]);
                    }
                }
            }
            return mat;
        },
        viewing () {
            if (this.cur_day === 0) {
                return 'Viewing All';
            } else {
                return 'Viewing Matchday ' + this.cur_day.toString();
            }
        }
    },
    methods: {
        changeDay(day) {
            this.cur_day = day;
        },
        parseDate(match_date) {
            var date = match_date.date;
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
    
    .dropbtn {
        background-color: lightgray;
        color: black;
        padding: 10px;
        font-size: 16px;
        border-radius: 5%;
        margin-bottom: 20px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content a:hover {
        background-color: lightgray;
    }

</style>