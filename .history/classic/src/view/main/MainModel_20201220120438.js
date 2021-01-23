/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Dashboard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Dashboard',
        selectedMenu: 'dashboard',
        selectedApp: 'resume'
    },

    stores: {
        notifications: {
            autoLoad: true,
            autoSync: true,
            model: 'Dashboard.model.Notifications'
        }
    }
});