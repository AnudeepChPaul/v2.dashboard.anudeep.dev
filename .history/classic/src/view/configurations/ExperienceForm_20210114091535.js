Ext.define('Dashboard.view.configurations.ExperienceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'dash-config-experienceform',

    defaultType: 'textfield',
    flex: 1,
    width: 600,
    buttonAlign: 'center',
    bodyPadding: '10 20',

    defaults: {
        width: '100%',
        labelWidth: 144
    },
    items: [{
        fieldLabel: 'Company Name',
        name: 'companyName',
        allowBlank: false,
    }, {
        fieldLabel: 'Work Duration',
        name: 'duration',
        allowBlank: false,
    }, {
        fieldLabel: 'Designation',
        name: 'designation',
        allowBlank: false,
    }, {
        fieldLabel: 'Can Display',
        name: 'show',
        allowBlank: false,
        xtype: 'checkbox',
        checked: true
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox'
        },
        items: [{
            fieldLabel: 'Prjects Done',
            name: 'projects',
            xtype: 'tagfield',
            flex: 1,
            labelWidth: 144,
            bind: {
                store: '{projects}'
            },
            allowBlank: false,
            displayField: 'projectName',
            valueField: 'id',
            queryMode: 'local',
            filterPickList: false
        }, {
            xtype: 'button',
            iconCls: 'fa fa-plus',
            margin: '0 0 0 10'
        }]
    }],
    fbar: [{
        type: 'submit',
        text: 'Save',
        formBind: true,
        handler: function () {
            this.up('dash-config-addexperience').submitExperience();
        }
    }],

    addProject: function () {
        // up('dash-config-addexperience').
        const projects = this.getViewModel().getStore('projects');
        const vm = this.getViewModel();

        projects.add({
            projectName: vm.get('projectName'),
            tagLine: vm.get('tagLine'),
            description: vm.get('description'),
            role: vm.get('role')
        })

        this.up('window').center();

        vm.set('projectName', '');
        vm.set('tagLine', '');
        vm.set('description', '');
        vm.set('role', '');
    },

    submitExperience() {
        if (!this.form.isValid()) {
            return
        }

        const formData = this.getValues();
        const vm = this.getViewModel();
        const finalData = {
            companyName: formData.companyName,
            designation: formData.designation,
            duration: formData.duration,
            show: formData.show,
            projects: []
        };

        Ext.each(vm.getStore('projects').getData().items, function (project) {
            finalData.projects.push(project.getData());
        }, this);



        console.log(finalData)
    }
})