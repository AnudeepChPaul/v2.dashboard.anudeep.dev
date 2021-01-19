Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.form.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'start'
    },

    defaults: {
        style: {},
    },
    defaultType: 'textfield',
    bodyPadding: '10 20',

    items: [{
        fieldLabel: "Page Title",
        name: 'pageTitle'
    }, {
        fieldLabel: "Intro Text",
        name: 'introText'
    }, {
        fieldLabel: "Tag Lines",
        name: 'tagLines'
    }, {
        fieldLabel: "Experience Tag Lines",
        name: 'experienceTagLine'
    }, {
        fieldLabel: "Living-in Tag Lines",
        name: 'livingInTagLine'
    }]
});