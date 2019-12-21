<template>
  <div class="login">
    <h1>Login Page</h1>
    <div class="content overflow-hidden">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <!-- Login Block -->
          <div class="block block-themed animated fadeIn">
            <div class="block-header bg-primary">
              <ul class="block-options">
                <li>
                  <a href="base_pages_reminder.html">Forgot Password?</a>
                </li>
                <li>
                  <a
                    href="base_pages_register.html"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="New Account"
                  >
                    <i class="fa fa-key"></i>
                  </a>
                </li>
              </ul>
              <h3 class="block-title">Login</h3>
            </div>
            <div class="block-content block-content-full block-content-narrow">
              <!-- Login Title -->
              <h1 class="h2 font-w600 push-30-t push-5">TeamMemberApp</h1>
              <p>Welcome, please login.</p>
              <!-- END Login Title -->

              <!-- Login Form -->
              <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
              <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
              <form
                class="js-validation-login form-horizontal push-30-t push-50"
                action="index.html"
                method="post"
              >
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-primary">
                      <input
                        class="form-control"
                        type="text"
                        id="login-username"
                        name="login-username"
                        v-model="loginInfo.userName"
                      />
                      <label for="login-username">Username</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="form-material form-material-primary">
                      <input
                        class="form-control"
                        type="password"
                        id="login-password"
                        name="login-password"
                        v-model="loginInfo.password"
                      />
                      <label for="login-password">Password</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <label class="css-input switch switch-sm switch-primary">
                      <input type="checkbox" id="login-remember-me" name="login-remember-me" />
                      <span></span> Remember Me?
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <button class="btn btn-block btn-primary" type="submit" @click.prevent="login">
                      <i class="fa fa-sign-in pull-right"></i> Log in
                    </button>
                  </div>
                </div>
              </form>
              <!-- END Login Form -->
            </div>
          </div>
          <!-- END Login Block -->
        </div>
      </div>
    </div>
    <!-- END Login Content -->

    <!-- Login Footer -->
    <div class="push-10-t text-center animated fadeInUp">
      <small class="text-muted font-w600">
        <span class="js-year-copy"></span> &copy; OneUI 1.3
      </small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { loginInfo: {} };
  },
  mounted() {
    // let appScript = document.createElement("script");
    // appScript.setAttribute("src", "/assets/js/app.js");
    // document.head.appendChild(appScript);
  },
  updated() {
    // let loginValidationScript = document.createElement("script");
    // loginValidationScript.setAttribute(
    //   "src",
    //   "/assets/js/pages/base_pages_login.js"
    // );
    // document.head.appendChild(loginValidationScript);
  },
  destroyed() {},
  methods: {
    login() {
      const { userName, password } = this.loginInfo;
      Meteor.loginWithPassword(userName, password, error => {
        if (error) {
          return swal("Login Error", error.reason, "error");
        } else {
          this.$router.push({ name: "personal" });
        }
      });

      // uese meteor login with password to log in

      // sweet alert if faile and redirect if success
    }
  }
};
</script>

<style></style>
