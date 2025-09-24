/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
  name: "TestApp_2",

  extend: "TestApp_2.Application",

  requires: ["TestApp_2.view.main.Main", "TestApp_2.view.login.Login"],

  // launch: function () {
  //   var loggedIn = localStorage.getItem("loggedIn");

  //   var mainView = Ext.create({
  //     xtype: "viewport",
  //     layout: "card",
  //     items: [{ xtype: "login" }, { xtype: "app-main" }],
  //   });

  //   // Set the initial view based on the login status.
  //   // If 'loggedIn' is true, show the main app (index 1).
  //   // Otherwise, show the login screen (index 0).
  //   if (mainView) {
  //     mainView.getLayout().setActiveItem(loggedIn ? 1 : 0);
  //   }
  // },

  //-------------------------------------------------------------------------
  // Most customizations should be made to TestApp_2.Application. If you need to
  // customize this file, doing so below this section reduces the likelihood
  // of merge conflicts when upgrading to new versions of Sencha Cmd.
  //-------------------------------------------------------------------------
});
