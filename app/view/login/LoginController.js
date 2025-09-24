Ext.define("TestApp_2.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

  requires: ["TestApp_2.view.main.Main"],

  onLoginClick: function () {
    // In a real application, you would send the form values to a server to validate.
    // For this example, we'll just check that the fields are not empty.
    var form = this.getView().down("form");
    var values = form.getValues();

    if (!values.username || !values.password) {
      Ext.Msg.alert(
        "Login Failed",
        "Please enter both a username and password."
      );
      return;
    }

    // --- Start of Mock Authentication ---
    // Replace this block with your actual server-side authentication call.
    if (form.isValid()) {
      // If the form is valid, we'll simulate a successful login.
      this.onLoginSuccess();
    } else {
      // If the form is not valid (e.g., fields are empty), show an error.
      this.onLoginFailure();
    }
    // --- End of Mock Authentication ---
  },

  onLoginSuccess: function () {
    // Step 1: Set the loggedIn flag in localStorage.
    localStorage.setItem("loggedIn", "true");

    // Step 2: Find the main viewport (which uses a card layout).
    // The viewport is the container for both the login and main app views.
    var viewport = this.getView().up("viewport");

    if (viewport) {
      // Step 3: Switch the active card in the viewport from the login view (index 0)
      // to the main application view (index 1).
      viewport.getLayout().setActiveItem(1);
    } else {
      console.error("Viewport not found.");
      Ext.Msg.alert(
        "Error",
        "Could not find the main application viewport to switch views."
      );
    }
  },

  onLoginFailure: function () {
    // Show a failure message to the user.
    Ext.Msg.alert(
      "Login Failed",
      "The username or password you entered is incorrect."
    );

    // You might also want to clear the form fields here.
    var form = this.getView().down("form");
    form.reset();
  },
});
