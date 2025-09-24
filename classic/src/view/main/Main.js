Ext.define("TestApp_2.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",

  requires: [
    "TestApp_2.view.main.MainController",
    "TestApp_2.view.main.MainModel",
    "Ext.plugin.Viewport",
  ],

  controller: "main",
  viewModel: "main",

  layout: "border",

  ui: "navigation",

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      xtype: "container",
      region: "north",
      style: "background-color: #35baf6;",
      defaults: { style: "background-color: #35baf6;", margin: "0 0 0 10" },
      layout: { type: "hbox", align: "middle" },
      items: [
        {
          xtype: "component",
          html: "Учёт товаров",
          style:
            "font-size: 20px; color: white; padding: 1rem; font-weight: bold;",
          items: [
            {
              xtype: "mainlist",
            },
          ],
        },
        {
          xtype: "button",
          text: "Товары",
          handler: "onOpenEditor",
          // routeId: "analyticsview",
        },
        {
          xtype: "button",
          text: "Logout",
          handler: "onLogoutClick",
        },
      ],
    },
    {
      region: "center",
      xtype: "tabpanel",
      reference: "mainCardPanel",
      ui: "navigation",
      items: [
        {
          title: "Dashboard",
          items: [{ xtype: "mainlist" }],
        },
      ],
    },
  ],
});
