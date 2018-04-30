<template>
<div class="modal-background">
    <div class="modal">
        <header class="modal-header">
            <slot name="header">
                Matchup: {{ homeTeam }} vs. {{ awayTeam }}
                <button type="button" class="btn-close" @click="close">
                    x
                </button>
            </slot>
        </header>
        <section class="modal-body">
            <slot name="body">
                {{ homeWins }}
                <div id="viz">
                </div>
            </slot>
        </section>
        <footer class="modal-footer">
            <slot name="footer">
                <button type="button" class="btn-blue" @click="close">
                    Dismiss
                </button>
            </slot>
        </footer>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { API_KEY } from '../secrets'
var d3 = require("d3");
    
export default {
    name: 'Modal',
    props: [
        'url'
    ],
    data () {
        return {
            loading: null,
            post: null,
            error: null,
            homeTeam: '',
            awayTeam: '',
            homeWins: 0,
            awayWins: 0,
            draws: 0,
            homeGoals: 0,
            awayGoals: 0
        }
    },
    created () {
        this.fetchData();
        console.log()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        close() {
            this.$emit('close');
        },
        fetchData () {
            this.error = this.post = null;
            this.loading = true;
            axios.get(this.url, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            }).then((post, err) => {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.post = post;
                    this.homeTeam = post.data.fixture.homeTeamName;
                    this.awayTeam = post.data.fixture.awayTeamName;
                    this.homeWins = post.data.head2head.homeTeamWins;
                    this.awayWins = post.data.head2head.awayTeamWins;
                    this.draws = post.data.head2head.draws;
                    var away = 0;
                    var home = 0;
                    var fixs = post.data.head2head.fixtures;
                    for (var i = 0; i < fixs.length; i++) {
                        if (fixs[i].status === "FINISHED")
                            home = home + fixs[i].result.goalsHomeTeam;
                            away += fixs[i].result.goalsAwayTeam;
                    }
                    this.homeGoals = home;
                    this.awayGoals = away;
                    this.createVis();
                }
            })
        },
        createVis () {
            d3.select('#viz')
                .append('svg')
                  .attr('width', 700)
                  .attr('height', 450)
                  .style('background', 'lightgray');
        }
    }
};
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: aliceblue;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    color: #007bff;
    font-size: 20px;
  }

    .btn-close {
        font-size: 20px;
        color: #007bff;
    }
</style>