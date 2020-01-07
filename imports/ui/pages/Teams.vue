<template>
    <div>
        <h1>Teams</h1>
        <div class="row">
            <div class="col-md-12">

                <div class="block">
                    <div class="block-header">
                        <h3 class="block-title">Create New Team</h3>
                    </div>
                    <div class="block-content block-content-narrow">
                        <form action="base_forms_elements_modern.html" class="teamInsertForm form-horizontal push-10-t"
                              method="post" onsubmit="return false;">
                            <div class="form-group">
                                <div class="col-sm-9">
                                    <div class="form-material">
                                        <input class="form-control" id="name" name="name"
                                               placeholder="Please enter your team name"
                                               type="text"
                                               v-model="newTeamInfo.name">
                                        <label for="name">Team Name</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material">
                                    <textarea class="form-control" id="desc" name="desc"
                                              placeholder="Please add a description for your team"
                                              rows="3"
                                              v-model="newTeamInfo.description"/>
                                        <label for="desc">Description</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-9">
                                    <button @click.prevent="createTeam" class="btn btn-sm btn-primary" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="!$subReady.teams">Loading...</div>

        <ul>
            <li :key='team._id' v-for="team in teams"><a>{{team.name}} - {{team.descrption}}</a></li>
        </ul>

    </div>

</template>

<script>
    import {Teams} from "/imports/api/teams/teams.js";

    export default {
        data() {
            return {
                newTeamInfo: {}
            };
        },
        meteor: {
            $subscribe: {
                "teams": [] // empty list as params
            },
            teams() {
                return Teams.find({}, {sort: {createdAt: -1}}); //newly created first
            }
        },


        computed: {
            teams() {

                return Teams.find({}, {sort: {createdAt: -1}});
            }
        },

        methods: {
            createTeam() {

                const {name, description} = this.newTeamInfo;
                Meteor.call('teams.insert', this.newTeamInfo, function (error, success) {
                    if (error) {
                        console.log('error', error);
                    }
                    if (success) {
                        swal("Success", "New Team Added", "success");
                    }
                });


            }
        }

    };
</script>

<style>
</style>