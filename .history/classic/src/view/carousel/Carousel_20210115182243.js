Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.container.Container",
  xtype: "dash-carousel",

  layout: {
    type: "hbox",
  },

  weight: '100%',
  height: 441,
  buttonAlign: 'center',
  defaults: {
    style: {},
  },
  items: [{
    html: 1
  }, {
    html: 2
  }]
});