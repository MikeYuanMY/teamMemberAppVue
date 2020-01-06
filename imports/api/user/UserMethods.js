import { Meteor } from "meteor/meteor";

Meteor.methods({
	"account.update"(user) {
		console.log("account.update", user);
		// variable descrontruct
		const { username, firstName, lastName, email, userId } = user;
		return Meteor.users.update(
			{ _id: userId },
			{
				$set: {
					username: username,
					"emails.0.address": email,
					"profile.firstName": firstName,
					"profile.lastName": lastName
				}
			}
		);
	}
});
