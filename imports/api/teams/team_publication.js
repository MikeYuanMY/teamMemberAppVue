import { Meteor } from "meteor/meteor";
import { Teams } from "./teams.js";

//console.log("Teams published");
Meteor.publish("teams", function() {
	return Teams.find();
});

Meteor.publish("team", function(id) {
	check(id, String);
	return Teams.find({ _id: id });
});
