Ext.define('Dashboard.view.dashboard.Notifications', {
    extend: 'Ext.grid.Panel',
    xtype: 'dash-notifications',

    requires: [
        'Ext.selection.CellModel'
    ],

    autoLoad: true,
    actions: {
        read: {
            iconCls: 'far fa-envelope',
            text: 'Mark all as Read',
            handler: 'markAllNotificationsRead'
        },
        unread: {
            iconCls: 'far fa-envelope-open',
            text: 'Mark selected Unread',
            handler: 'makrSelectedUnread',
            bind: {
                disabled: '{!xxxx}'
            }
        }
    },
    tbar: ["@read", "@unread"],
    selModel: {
        type: 'rowmodel',
        mode: 'SIMPLE'
    },
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    bind: {
        store: '{notifications}',
        // selection: '{notificationSelection}'
    },

    listeners: {
        select: function (rowmodel) {
            debugger
            this.up('dash-main').getViewModel().set('notificationSelection', rowmodel.getSelection())
        }
    },

    columns: [{
        menuDisabled: true,
        dataIndex: 'read',
        width: 36,
        renderer: (value) => {
            if (!value) {
                return 'o'
            }
        }
    }, {
        menuDisabled: true,
        dataIndex: 'priority',
        width: 36
    }, {
        menuDisabled: true,
        header: 'Date',
        dataIndex: 'received_on'
    }, {
        menuDisabled: true,
        header: 'Message',
        dataIndex: 'text',
        flex: 1
    }, {
        menuDisabled: true,
        xtype: 'actioncolumn',
        width: 49,
        sortable: false,
        items: [{
            iconCls: 'far fa-envelope-open',
            tooltip: 'Mark Read',
            handler: 'onRemoveClick'
        }]
    }]
});