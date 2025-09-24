Ext.define("TestApp_2.view.main.ListController", {
  extend: "Ext.app.ViewController",

  alias: "controller.list",

  controller: this,

  _performFilter: function (property, value, anyMatch) {
    let grid = this.getView();
    let store = grid.getStore();

    console.log(`Filtering by property: "${property}" with value: "${value}"`);

    if (Ext.isEmpty(value)) {
      store.clearFilter();
    } else {
      store.clearFilter();

      store.filter({
        property: property,
        value: value,
        anyMatch: anyMatch,
        caseSensitive: false,
      });
    }

    // let filteredRecords = store.getRange();

    // let filteredItems = filteredRecords.map(function (record) {
    //   return record.data;
    // });
  },

  onIdFilter: function (field, e) {
    if (e.getKey() !== e.ENTER) return;
    this._performFilter("id", field.getValue(), false);
  },

  onNameFilter: function (field, e) {
    if (e.getKey() !== e.ENTER) return;
    this._performFilter("name", field.getValue(), true);
  },

  onCellActionClick: function (view, td, cellIndex, record) {
    console.log("onCellActionClick");
    console.log("Contents of clicked row:", record.data);

    let column = view.getGridColumns()[cellIndex];

    if (column.dataIndex === "name") {
      this.onItemSelected(view, record);
    }
  },

  onItemSelected: function (view, record) {
    Ext.create("Ext.window.Window", {
      title: "Редактировать: " + record.get("name"),
      width: 400,
      layout: "fit",
      modal: true,
      autoShow: true,

      record: record,

      troller: this,

      items: [
        {
          xtype: "form",
          reference: "detailsForm",
          bodyPadding: 15,
          defaults: {
            anchor: "100%",
            labelWidth: 100,
          },
          items: [
            { xtype: "displayfield", fieldLabel: "ID", name: "id" },
            {
              xtype: "textfield",
              fieldLabel: "Имя",
              name: "name",
              allowBlank: false,
            },
            {
              xtype: "textareafield",
              fieldLabel: "Описание",
              name: "description",
            },
            {
              xtype: "numberfield",
              fieldLabel: "Цена",
              name: "price",

              allowDecimals: true,
              minValue: 0,
              hideTrigger: true,
            },
            {
              xtype: "numberfield",
              fieldLabel: "Кол-во",
              name: "amount",
              allowDecimals: false,
              minValue: 0,
              hideTrigger: true,
            },
          ],
        },
      ],

      buttons: [
        {
          text: "Сохранить",
          handler: this.onSaveChangesClick,
          scope: this,
        },
        {
          text: "Отмена",
          handler: function (button) {
            button.up("window").close();
          },
        },
      ],

      listeners: {
        show: function (window) {
          window.down("form").loadRecord(record);
        },
      },
    });
  },

  onSaveChangesClick: function (button) {
    var win = button.up("window");
    var form = win.down("form");
    var record = win.record;
    var values = form.getValues();

    if (form.isValid()) {
      record.set(values);
      record.commit();
      Ext.toast({
        html: 'Изменения для "' + record.get("name") + '" были сохранены.',
        title: "Сохранено",
        width: 350,
        align: "t",
      });
      win.close();
    }
  },
});
