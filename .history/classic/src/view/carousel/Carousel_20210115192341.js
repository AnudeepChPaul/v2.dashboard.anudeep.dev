Ext.define("Dashboard.view.carousel.Carousel", {
  extend: "Ext.container.Container",
  xtype: "dash-carousel",

  layout: {
    type: "hbox",
    align: 'center'
  },

  weight: '100%',
  height: 441,
  defaults: {
    style: {
      border: '1px solid black',
      margin: '0 10px',
      boxShadow: '5px 0 9px 5px rgba(0,0,0,0.5)'
    },
  },

  scrollable: {
    scrollbars: false,
    y: false,
    x: 'auto'
  },

  items: [{
    html: 1,
    xtype: 'container',
    width: 256,
    height: 400,

    listeners: {
      el: {
        mouseenter: function (evt, dom) {
          this.component.up('dash-carousel').popout(evt, dom);
        }
      }
    }
  }, {
    html: 2,
    xtype: 'container',
    width: 256,
    height: 400,

    listeners: {
      el: {
        mouseenter: function (evt, dom) {
          this.component.up('dash-carousel').popout(evt, dom);
        }
      }
    }
  }, {
    html: 2,
    xtype: 'container',
    width: 256,
    height: 400,

    listeners: {
      el: {
        mouseenter: function (evt, dom) {
          this.component.up('dash-carousel').popout(evt, dom);
        }
      }
    }
  }, {
    html: 2,
    xtype: 'container',
    width: 256,
    height: 400,

    listeners: {
      el: {
        mouseenter: function (evt, dom) {
          this.component.up('dash-carousel').popout(evt, dom);
        }
      }
    }
  }, {
    html: 2,
    xtype: 'container',
    width: 256,
    height: 400,

    listeners: {
      el: {
        mouseenter: function (evt, dom) {
          this.component.up('dash-carousel').popout(evt, dom);
        }
      }
    }
  }],

  popout: function (evt, dom) {
    console.log('popout')
    debugger
  },

  aToZOrder: function () {
    console.log('aToZOrder')
  },

  zToAOrder: function () {
    console.log('zToAOrder')
  },

  listeners: {
    afterrender: function () {
      console.log('afterrender');
    }
  }
});