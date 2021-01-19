Ext.define("Dashboard.view.configurations.Configurations", {
    extend: "Ext.panel.Panel",
    xtype: "dash-config",
    requires: [
        'Ext.ux.rating.Picker'
    ],

    title: 'Configurations',

    layout: {
        type: 'vbox',
        align: 'strechmax'
    },
    bodyPadding: '10 20',
    scrollable: {
        scrollbars: false,
        y: 'auto',
        x: false
    },
    controller: 'dash-config-controller',
    defaults: {
        width: '100%',
        height: 'auto',
        bodyPadding: '10 0',
    },

    items: [{
        header: {
            title: 'Introductions',
            tools: [{
                type: 'save',
                handler: 'saveIntroduction'
            }]
        },
        xtype: 'form',
        itemId: 'introductionConfig',
        defaultType: 'textfield',
        buttonAlign: 'center',
        bodyPadding: '10 10',
        layout: 'column',
        defaults: {
            xtype: 'container',
            defaultType: 'textfield',
            width: '50%',
            padding: '0 10',
            defaults: {
                width: '100%',
                labelWidth: 144
            }
        },
        items: [{
            items: [{
                fieldLabel: "Page Title",
                name: 'pageTitle'
            }, {
                fieldLabel: "Intro Text",
                name: 'introText'
            }, {
                fieldLabel: "Tag Lines",
                name: 'tagLines'
            }],
        }, {
            items: [{
                fieldLabel: "Experience Tag Lines",
                name: 'experienceTagLine'
            }, {
                fieldLabel: "Living-in Tag Lines",
                name: 'livingInTagLine'
            }]
        }]

    }, {
        xtype: 'panel',
        itemId: 'skillConfig',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'gridpanel',
            title: 'Skills',
            margin: '0 10 0 0',

            flex: 1.5,
            bind: {
                store: '{skills}'
            },

            selModel: 'rowmodel',
            plugins: {
                cellediting: {
                    clicksToEdit: 2
                }
            },
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Skill',
                dataIndex: 'name',
                hideable: false,
                menuDisabled: true,
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                flex: 2,
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'rating',
                    limit: 10,
                    disabled: true,
                    trackOver: false
                },
                hideable: false,
                menuDisabled: true
            }, {
                text: 'Can Display',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true,
                editor: {
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    store: {
                        data: [{
                            text: 'Yes',
                            value: true
                        }, {
                            text: 'No',
                            value: false
                        }]
                    }
                }
            }]
        }, {
            xtype: 'form',
            defaultType: 'textfield',
            bodyPadding: '10 20',
            flex: 1,
            title: 'New Skill',
            buttonAlign: 'center',
            defaults: {
                width: '100%',
                labelWidth: 144
            },
            items: [{
                fieldLabel: 'Skill Name',
                name: 'name',
                allowBlank: false,
            }, {
                fieldLabel: 'Rating',
                name: 'rating',
                xtype: 'rating',
                limit: 10,
                nameable: true,
            }, {
                xtype: 'checkbox',
                fieldLabel: 'Can Display',
                name: 'show',
                inputValue: true,
                allowBlank: false,
                nameHolder: 'show',
                checked: true
            }],
            fbar: [{
                type: 'submit',
                text: 'Add',
                formBind: true,
                handler: 'addSkill'
            }]
        }]
    }, {
        xtype: 'panel',
        itemId: 'projectConfig',
        layout: {
            type: 'hbox'
        },
        cls: 'dash-config-project-config',
        height: 441,
        items: [{
            xtype: 'panel',
            cls: 'dash-config-project-config-panel',
            title: 'Own Projects',
            margin: '0 10 0 0',
            flex: 1.5,
            height: 441,
            items: [{
                xtype: 'dataview',
                bind: {
                    store: '{projects}'
                },
                itemSelector: 'div.dash-project-details-list',
                itemTpl: new Ext.XTemplate([
                    '<tpl for=".">',
                    '   <div class="dash-project-details-list">',
                    '       <div class="dash-project-details-list-inner">',
                    '           <h3>{[this.getIndex(values, xindex)]}. {projectName} ({role})</h3>',
                    '           <button name="deleteButton" projectIndex="{id}" class="fa fa-trash dash-project-details-list-button"></button>',
                    '       </div>',
                    '       <h5> {[this.getSkilNameFromSkillId(values)]}</h5>',
                    '       <p style="font-weight: bolder;">{tagLine}</p>',
                    '       <span>{description}</span>',
                    '   </div>',
                    '</tpl>',
                ].join(""), {
                    getIndex: function (values, xindex, b, id) {
                        return xindex
                    },
                    getSkilNameFromSkillId: function (values) {
                        const skillsStore = this.owner.up('dash-config').getController().getViewModel().getStore('skills');
                        var skills = [];

                        Ext.each(values.skills, function (skill) {
                            skills.push(skillsStore.getById(skill).get('name'))
                        }, this);
                        skills = skills.join(",");

                        return skills ? `Skills Used: ${skills}` : "";
                    }
                }),

                listeners: {
                    itemclick: function (scope, record, el, index, event) {
                        if (event.target.name !== 'deleteButton')
                            return;

                        Ext.Msg.show({
                            title: 'Warning (Non Recoverable Option)',
                            message: 'Are you sure to DELETE?',
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.WARNING,
                            fn: function (btn) {
                                if (btn === 'yes') {
                                    console.log('Yes pressed');
                                } else {
                                    console.log('No pressed');
                                }
                            }
                        });

                        Ext.Msg.confirm(
                            '',
                            '',
                            function (option) {
                                if (option === 'yes') {
                                    record.store.remove(record)
                                    record = null;
                                }
                            },
                            this
                        );
                    }
                }
            }]
        }, {
            xtype: 'form',
            defaultType: 'textfield',
            bodyPadding: '10 20',
            flex: 1,
            title: 'New Project',
            buttonAlign: 'center',
            defaults: {
                width: '100%',
                labelWidth: 144
            },
            items: [{
                fieldLabel: 'Project Name',
                name: 'projectName',
                allowBlank: false,
            }, {
                fieldLabel: 'Tag Line',
                name: 'tagLine',
                allowBlank: false,
            }, {
                fieldLabel: 'Project Description',
                name: 'description',
                xtype: 'textarea',
                allowBlank: false,
                checked: true
            }, {
                fieldLabel: 'Role',
                name: 'role',
                allowBlank: false,
                checked: true
            }, {
                fieldLabel: 'Skill Used',
                name: 'skills',
                xtype: 'tagfield',
                bind: {
                    store: '{skills}'
                },
                allowBlank: false,
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                filterPickList: false
            }, {
                fieldLabel: 'Can Display',
                name: 'show',
                allowBlank: false,
                xtype: 'checkbox',
                checked: true
            }],
            fbar: [{
                type: 'submit',
                text: 'Add',
                formBind: true,
                handler: 'addProject'
            }]
        }]
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'gridpanel',
            header: {
                title: 'Experiences',
                tools: [{
                    type: 'plus',
                    handler: function () {
                        const configWindow = Ext.create({
                            xtype: 'window',
                            title: 'Add Experience',
                            closeAction: 'method-destroy',
                            modal: true,
                            items: [{
                                xtype: 'dash-config-addexperience'
                            }]
                        });
                        configWindow.show();
                    }
                }]
            },
            flex: 1,
            margin: '0 10 0 0',
            bind: {
                store: '{experiences}'
            },
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Company Name',
                dataIndex: 'companyName',
                hideable: false,
                menuDisabled: true,
                flex: 2
            }, {
                text: 'Designation',
                dataIndex: 'designation',
                hideable: false,
                menuDisabled: true,
                flex: 2
            }, {
                text: 'Duration',
                dataIndex: 'duration',
                hideable: false,
                menuDisabled: true,
                flex: 1
            }, {
                text: 'Projects',
                dataIndex: 'projects',
                hideable: false,
                menuDisabled: true,
                flex: 3,
                renderer(value) {
                    return value.map(value => value.projectName).join(", ")
                }
            }]
        }]
    }]
});