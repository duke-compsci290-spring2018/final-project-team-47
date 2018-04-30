<template>
<div class="card bg-light">
<!--     @click="onClick"-->
    <div class="card-body">
        <h3>{{ date }}</h3>
        <h6>{{ time }}</h6>
        <table>
            <tbody>
                <tr>
                    <td>{{ fixture.homeTeamName }}</td>
                    <td> v. </td>
                    <td>{{ fixture.awayTeamName }}</td>
                </tr>
                <p v-if='fixture.status === "POSTPONED"'>Match Postponed</p>
                <tr v-else>
                    <td>{{ fixture.result.goalsHomeTeam }}</td>
                    <td v-if='fixture.status === "FINISHED"'>  </td>
                    <td v-else></td>
                    <td>{{ fixture.result.goalsAwayTeam }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
// package imports
import axios from 'axios'
// local imports
import { API_KEY } from '../secrets'
export default {
    name: 'Fixture',
    props: [
        'fixture',
        'date',
        'time'
    ],
    methods: {
        getFixture (url) {
            return axios.get(url, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
    }
};

</script>

<style lang="scss">

</style>
