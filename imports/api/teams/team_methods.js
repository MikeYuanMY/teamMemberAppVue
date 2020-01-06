import { Meteor } from "meteor/meteor";
import { Teams } from "./teams.js";

Meteor.methods({
	"teams.insert"(newTeamInfo) {
		const { name, description } = newTeamInfo;
		console.log("team.insert", newTeamInfo);
		return Teams.insert({
			name: name,
			descrption: description,
			members: [],
			createdAt: new Date()
		});
	}
});
