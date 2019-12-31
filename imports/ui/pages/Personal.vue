<template>
  <div class="personal">
    <h1>Personal</h1>
    <div class="row">
      <div class="col-md-6" v-if="currentUser">
        <div class="block block-themed">
          <div class="block-header bg-info">
            <h3 class="block-title">Profile</h3>
          </div>
          <div class="block-content">
            <form
              class="form-horizontal push-10-t push-10"
              action="base_forms_premade.html"
              method="post"
              @submit.prevent="updateUser"
            >
              <div class="form-group">
                <div class="col-xs-12">
                  <div class="form-material input-group">
                    <input
                      class="form-control"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your Username.."
                      v-model="currentUser.username"
                    />
                    <label for="contact2-email">Username</label>
                    <span class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <div class="form-material">
                    <input
                      class="form-control"
                      type="text"
                      id="contact2-firstname"
                      name="contact2-firstname"
                      placeholder="Enter your firstname.."
                      v-model="currentUser.firstName"
                    />
                    <label for="contact2-firstname">Firstname</label>
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="form-material">
                    <input
                      class="form-control"
                      type="text"
                      id="contact2-lastname"
                      name="contact2-lastname"
                      placeholder="Enter your lastname.."
                      v-model="currentUser.lastName"
                    />
                    <label for="contact2-lastname">Lastname</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12">
                  <div class="form-material input-group">
                    <input
                      class="form-control"
                      type="email"
                      id="contact2-email"
                      name="contact2-email"
                      placeholder="Enter your email.."
                      v-model="currentUser.email"
                    />
                    <label for="contact2-email">Email</label>
                    <span class="input-group-addon">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-12">
                  <button class="btn btn-sm btn-info" type="submit">
                    <i class="fa fa-edit push-5-r"></i> Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>team memeber list</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  meteor: {
    $subscribe: {
      user: {}
    },
    currentUser() {
      const meteorUser = Meteor.user();
      // return custom user object if meteor user is available
      return meteorUser
        ? {
            userId: meteorUser._id, // extract userId for update
            username: meteorUser.username,
            firstName: meteorUser.profile.firstName,
            lastName: meteorUser.profile.lastName,
            email: meteorUser.emails[0] ? meteorUser.emails[0].address : null
          }
        : null;
    }
  },

  methods: {
    updateUser: function() {
      console.log("updateUser", this.currentUser);
      Meteor.call("account.update", this.currentUser, error => {
        if (error) {
          swal("Error", error.reason, "error");
        } else {
          swal("User Updated", "Your profile has been updated", "success");
        }
      });
    }
  }
};
</script>

<style></style>
