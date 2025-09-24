Ext.define("TestApp_2.view.login.Login", {
  // We are now extending a standard panel, which can fill the entire viewport,
  // instead of a window, which is designed to be a modal pop-up.
  extend: "Ext.panel.Panel",
  xtype: "login",

  requires: ["TestApp_2.view.login.LoginController", "Ext.form.Panel"],

  controller: "login",
  bodyPadding: 10,
  title: "Login",
  // The 'closable' and 'autoShow' configs are for windows and are removed.
  // The new component will be managed by your main application viewport.

  // The 'items' property should always be an array, even for a single component.
  // This ensures the layout manager correctly processes the child item.
  items: [
    {
      xtype: "form",
      reference: "form",
      items: [
        {
          xtype: "textfield",
          name: "username",
          fieldLabel: "Username",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          name: "password",
          inputType: "password",
          fieldLabel: "Password",
          allowBlank: false,
        },
      ],
      buttons: [
        {
          text: "Login",
          formBind: true,
          listeners: {
            click: "onLoginClick",
          },
        },
      ],
    },
  ],
});
