/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.define("TestApp_2.Application", {
  extend: "Ext.app.Application",

  requires: ["TestApp_2.view.main.Main", "TestApp_2.view.login.Login"],

  name: "TestApp_2",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  mainView: null,

  stores: [],

  launch: function () {
    var loggedIn = localStorage.getItem("loggedIn");

    this.mainView = Ext.create({
      xtype: "viewport",
      layout: "card",
      items: [
        {
          xtype: "login",
          itemId: "login",
        },
        {
          xtype: "app-main",
          itemId: "app-main",
        },
      ],
    });

    if (this.mainView) {
      this.mainView.getLayout().setActiveItem(loggedIn ? "app-main" : "login");
    }
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },

  constructor: function () {
    this.callParent(arguments);
    Ext.on("logout", this.onLogout, this);
  },

  onLogout: function () {
    console.log("application onLogout");

    localStorage.removeItem("loggedIn");

    if (this.mainView) {
      this.mainView.getLayout().setActiveItem("login");
    } else {
      console.error("Cannot switch to login view: mainView is not defined.");
    }
  },
});
