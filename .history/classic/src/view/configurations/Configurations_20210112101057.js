Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",

    title: 'Configurations',

    layout: {
        type: 'vbox',
        align: 'strechmax'
    },
    bodyPadding: '10 20',

    defaults: {
        width: '100%',
        bodyPadding: '10 20',
    },

    items: [{
        title: 'Introductions',
        xtype: 'form',
        defaultType: 'textfield',

        defaults: {
            width: '100%',
            labelWidth: 144
        },

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

    }, {
        title: 'Skills',
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        minHeight: 400,
        items: [{
            xtype: 'gridpanel',
            width: 360,
            store: {
                data: [{
                    techId: 'python',
                    name: 'Python',
                    rating: '4',
                    show: true
                }, {
                    techId: 'js',
                    name: 'Javascript',
                    rating: '5',
                    show: true
                }]
            },
            defaults: {
                hideable: false,
                menuDisabled: true
            },
            items: {
                columns: [{
                    text: '#',
                    xtype: 'rownumberer'
                }, {
                    text: 'Skill',
                    dataIndex: 'name'
                }, {
                    text: 'Rating',
                    dataIndex: 'rating'
                }, {
                    text: 'Can Display',
                    xtype: 'booleancolumn',
                    trueText: 'Yes',
                    falseText: 'No',
                    dataIndex: 'show'
                }]
            }
        }]
    }, {
        title: 'Experiences',
    }]
});