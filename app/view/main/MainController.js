Ext.define("TestApp_2.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  editorCount: 0,

  onItemSelected: function (sender, record) {
    console.log("onItemSelected");
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },

  onLogoutClick: function () {
    console.log("onLogoutClick");
    Ext.fireEvent("logout", this);
  },

  onOpenEditor: function () {
    const tabPanel = this.lookup("mainCardPanel");
    this.editorCount++;

    const newTab = tabPanel.add({
      title: "Toвары " + this.editorCount,
      closable: true,
      layout: "fit", // Make the grid fill the tab panel body
      items: [
        {
          // We just need to create the component.
          // It knows how to find the shared store on its own.
          xtype: "mainlist",
        },
      ],
    });

    // Set the new tab as the active one.
    tabPanel.setActiveTab(newTab);
  },
});
