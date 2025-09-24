Ext.define("TestApp_2.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["TestApp_2.store.Goods", "TestApp_2.view.main.ListController"],

  controller: "list",

  title: "Список товаров",

  store: { type: "goods" },

  tbar: {
    layout: { type: "vbox", align: "stretch" },
    defaults: {
      style: "padding: 0.3rem 1rem;",
    },
    items: [
      {
        xtype: "container",
        layout: { type: "hbox" },
        items: [
          {
            xtype: "textfield",
            fieldLabel: "ID",
            reference: "idFilterField",
            emptyText: "Введите фильтр...",
            listeners: {
              specialkey: "onIdFilter",
            },
          },

          {
            xtype: "button",
            text: "Clear Filter",
          },
        ],
      },
      {
        xtype: "container",
        layout: { type: "hbox" },
        items: [
          {
            xtype: "textfield",
            fieldLabel: "Описание",
            reference: "descriptionFilterField",
            emptyText: "Введите фильтр...",
            listeners: {
              specialKey: "onNameFilter",
            },
          },
          {
            xtype: "button",
            text: "Clear Filter",
          },
        ],
      },
    ],
  },

  columns: [
    { text: "ID", dataIndex: "id", flex: 1 },
    { text: "Имя", dataIndex: "name", flex: 1 },
    { text: "Описание", dataIndex: "description", flex: 1 },
    { text: "Цена", dataIndex: "price", flex: 1 },
    { text: "Кол-во", dataIndex: "amount", flex: 1 },
  ],

  listeners: {
    cellclick: "onCellActionClick",
  },
});
