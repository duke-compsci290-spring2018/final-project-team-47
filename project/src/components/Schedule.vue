<template>
<div id="schedule">
    <p>Schedule goes here</p>
    <div v-for="date in matches">
        <h3>{{date}}</h3>
        <div v-for="time in date">
            <h5>{{time}}</h5>
<!--
            <div v-for="m in time">
                <p>{{m.awayTeamName + " " + m.homeTeamName}}</p>
            </div>
-->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Schedule',
    data () {
        return {
            
        }
    },
    // methods provided to change value of user in parent component
    props: [
        'matches'
    ],
    methods: {
        logMatches () {
//            for (var key in this.matches) {
//                console.log(key);
//            }
            console.log(this.matches);
        }
    },
    mounted () {
        this.logMatches();
    }
};
</script>