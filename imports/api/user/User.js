Meteor.publish("users", function() {
	const users = Meteor.users.find({}, { fields: { _id: 1, profile: 1 } });

	//console.log(users);
	return users;
});
