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
                    <form class="teamInsertForm form-horizontal push-10-t" action="base_forms_elements_modern.html"
                        method="post" onsubmit="return false;">
                        <div class="form-group">
                            <div class="col-sm-9">
                                <div class="form-material">
                                    <input class="form-control" type="text" id="name" name="name" v-model="newTeamInfo.name"
                                        placeholder="Please enter your team name">
                                    <label for="name">Team Name</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <div class="form-material">
                                    <textarea class="form-control" id="desc" name="desc" rows="3"
                                        placeholder="Please add a description for your team" v-model="newTeamInfo.description"></textarea>
                                    <label for="desc">Description</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-9">
                                <button class="btn btn-sm btn-primary" type="submit" @click.prevent="createTeam">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </div>
       <div v-if="!$subReady.teams">Loading...</div>

        <ul>
            <li v-for="team in teams" :key='team._id'><a>{{team.name}} - {{team.descrption}}</a></li>
        </ul>
    
    </div>
  
</template>

<script>
	import { Teams } from "/imports/api/teams/teams.js";

	export default {
		data() {
			return {
				newTeamInfo: {}
			};
		},
		// meteor: {
		// 	$subscribe: {
		// 		"teams": []
		// 	},
		// 	teams() {
		// 		return Teams.find({}, { sort: { createdAt: -1 } }); //newly created first
		// 	}

		created() {
			this.$subscribe('teams', () => [])
		},
		computed: {
			teams() {
				return this.$autorun(() => Teams.find({}, { sort: { createdAt: -1 } }))
			}
		},

		// },
		// created() {
		// 	this.$subscribe('teams');
		// },
		// computed: {
		// 	teams() {
		// 		return this.$autorun(() => Teams.find({}))
		// 	}
		// },
		methods: {
			createTeam() {

				console.log("createTeam Name and Description", this.newTeamInfo.name, this.newTeamInfo.description);
				const { name, description } = this.newTeamInfo;
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

	}
</script>

<style>
</style>