<template>
  <div class="register">
    <h1>Register</h1>
    <div class="bg-white pulldown">
      <div class="content content-boxed overflow-hidden">
        <div class="row">
          <div
            class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"
          >
            <div class="push-30-t push-20 animated fadeIn">
              <!-- Register Title -->
              <div class="text-center">
                <i class="fa fa-2x fa-circle-o-notch text-primary"></i>
                <h1 class="h3 push-10-t">Create Account</h1>
              </div>
              <!-- END Register Title -->

              <!-- Register Form -->
              <!-- jQuery Validation (.js-validation-register class is initialized in js/pages/base_pages_register.js) -->
              <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
              <form
                class="js-validation-register form-horizontal push-50-t push-50"
                action="base_pages_register_v2.html"
                method="post"
              >
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="text"
                        v-model="registerInfo.username"
                        name="register-username"
                        placeholder="Please enter a username"
                      />
                      <label for="register-username">Username</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="text"
                        v-model="registerInfo.firstName"
                        name="register-firstName"
                        placeholder="Please enter a firstName"
                      />
                      <label for="register-firstName">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="text"
                        v-model="registerInfo.lastName"
                        name="register-lastName"
                        placeholder="Please enter a lastName"
                      />
                      <label for="register-lastName">Last Name</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="email"
                        v-model="registerInfo.email"
                        name="register-email"
                        placeholder="Please provide your email"
                      />
                      <label for="register-email">Email</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="password"
                        v-model="registerInfo.password"
                        name="register-password"
                        placeholder="Choose a strong password.."
                      />
                      <label for="register-password">Password</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-success">
                      <input
                        class="form-control"
                        type="password"
                        v-model="registerInfo.password2"
                        name="register-password2"
                        placeholder="..and confirm it"
                      />
                      <label for="register-password2">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-7 col-sm-8">
                    <label class="css-input switch switch-sm switch-success">
                      <input
                        type="checkbox"
                        v-model="registerInfo.terms"
                        name="register-terms"
                      /><span></span> I agree with terms &amp; conditions
                    </label>
                  </div>
                  <div class="col-xs-5 col-sm-4">
                    <div class="font-s13 text-right push-5-t">
                      <a href="#" data-toggle="modal" data-target="#modal-terms"
                        >View Terms</a
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <button
                      class="btn btn-sm btn-block btn-success"
                      type="submit"
                      @click.prevent="register"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
              <!-- END Register Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerInfo: {}
    };
  },
  methods: {
    register() {
      const {
        username,
        firstName,
        lastName,
        email,
        password,
        password2
      } = this.registerInfo;

      // validation here
      console.log("Username", this.registerInfo.username);
      Accounts.createUser(
        {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password
        },
        error => {
          if (error) {
            console.log("Error", error.reason);
          } else {
            this.$router.push({ name: "personal" });
          }
        }
      );
    }
  }
};
</script>

<style></style>
