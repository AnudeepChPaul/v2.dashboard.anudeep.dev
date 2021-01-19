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

    defaults: {
        width: '100%',
        bodyPadding: '10 0',
    },

    items: [{
        header: {
            title: 'Introductions',
            tools: [{
                type: 'refresh'
            }]
        },
        xtype: 'form',
        defaultType: 'textfield',
        buttonAlign: 'center',
        bodyPadding: '10 10',
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
        }],

        fbar: [{
            text: 'Save'
        }]

    }, {
        // title: 'Skills',
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        // minHeight: 360,
        items: [{
            xtype: 'gridpanel',
            title: 'Skills',
            margin: '0 10 0 0',
            flex: 1,
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
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Skill',
                dataIndex: 'name',
                hideable: false,
                menuDisabled: true,
                flex: 1
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                hideable: false,
                menuDisabled: true
            }, {
                text: 'Can Display',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true
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
                xtype: 'textfield',
                fieldLabel: 'Can Display',
                name: 'show',
                allowBlank: false,
                xtype: 'checkbox',
                nameHolder: 'show',
                checked: true
            }],
            fbar: [{
                type: 'submit',
                text: 'Add',
                formBind: true,
                handler: function () {
                    const form = this.up('form').getForm();
                    const rating = this.up('dash-config').down('rating');

                    rating.getValue();

                    console.log(form.getValues());
                    console.log({
                        ...form.getValues(),
                        rating: rating.getValue()
                    });
                    rating.setValue(null);
                    form.reset();
                }
            }]
        }]
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'panel',
            title: 'Own Projects',
            margin: '0 10 0 0',
            flex: 1,
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
            items: [{
                xtype: 'dataview',
                bind: {
                    store: '{projects}'
                },
                itemSelector: 'div.project-details',
                itemTpl: new Ext.XTemplate([
                    '<tpl for=".">',
                    '   <div class="project-details">',
                    '       <h3>{[getIndex(values)]}. {projectName} ({role})</h3>',
                    '       <h5>{tagLine}</h5>',
                    '       <span>{description}</span>',
                    '   </div>',
                    '</tpl>'
                ].join(""), {
                    getIndex(values) {
                        debugger
                    }
                })
            }],
            columns: [{
                text: '#',
                xtype: 'rownumberer'
            }, {
                text: 'Skill',
                dataIndex: 'name',
                hideable: false,
                menuDisabled: true,
                flex: 1
            }, {
                text: 'Rating',
                dataIndex: 'rating',
                hideable: false,
                menuDisabled: true
            }, {
                text: 'Can Display',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                dataIndex: 'show',
                hideable: false,
                menuDisabled: true
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
                fieldLabel: 'Ratings',
                name: 'rating',
                allowBlank: false,
                checked: true
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
                handler: function () {
                    const form = this.up('form').getForm();
                    form.reset();
                }
            }]
        }]
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        // minHeight: 360,
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
            store: {
                data: [{
                    companyId: 'inq',
                    companyName: 'InQuest Technologies',
                    duration: '2.5yrs',
                    designation: 'Software Engineer',
                    technologies: [],
                    projects: [{
                        projectName: 'ProjectName 1',
                        tagLine: 'TagLine 1',
                        description: 'Description 1',
                        role: 'Role'
                    }, {
                        projectName: 'ProjectName 2',
                        tagLine: 'TagLine 2',
                        description: 'Description 2',
                        role: 'Role'
                    }]
                }, {
                    companyId: 'zy',
                    companyName: 'Zycus',
                    duration: '2months',
                    designation: 'Software Engineer',
                    technologies: [],
                    projects: []
                }, {
                    companyId: 'manh',
                    companyName: 'Manhattan Associates',
                    duration: '2.4yrs',
                    designation: 'Sr. Software Engineer',
                    technologies: [],
                    projects: []
                }]
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