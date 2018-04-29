<template>
<div class="card bg-light">
    <div class="card-body">
        <h3>{{ date }}</h3>
        <h6>{{ time }}</h6>
        <table>
            <tbody>
                <tr>
                    <td>{{ fixture.homeTeamName }}</td>
                    <td> -v- </td>
                    <td>{{ fixture.awayTeamName }}</td>
                </tr>
                <p v-if='fixture.status === "POSTPONED"'>Match Postponed</p>
                <tr v-else>
                    <td>{{ fixture.result.goalsHomeTeam }}</td>
                    <td v-if='fixture.status === "FINISHED"'> - </td>
                    <td v-else></td>
                    <td>{{ fixture.result.goalsAwayTeam }}</td>
                </tr>
            </tbody>
    </table>
    </div>
</div>
</template>

<script>

export default {
    name: 'Fixture',
    props: [
        'fixture',
        'date',
        'time'
    ],
    methods: {
        
    }
};

</script>

<style lang="scss">

</style>
