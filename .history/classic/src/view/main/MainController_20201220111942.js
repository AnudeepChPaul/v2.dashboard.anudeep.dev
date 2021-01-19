/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    markAllNotificationsRead: function (choice) {
        let data = this.getViewModel().getStore('notifications').getData();

        data.items.filter(item => !item.read).forEach(rec => rec.set('read', 1))

    },

    makrSelectedUnread: function () {
        this.getViewModel().get('xxxx').set('read', 0);
    },

    onGotoInbox: function () {
        this.getViewModel().set('selectedMenu', 'mails');
    },

    onGotoNotifications: function () {
        this.getViewModel().set('selectedMenu', 'notifications');
    }
});