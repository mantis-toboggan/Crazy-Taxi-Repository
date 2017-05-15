
let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#grid-template').innerHTML,

    events: {
        'click .leftbutton': 'moveLeft',
        'click .righttbutton': 'moveRight',
        'click .upbutton': 'moveUp',
        'click .downbutton': 'moveDown',
    },

    moveLeft: function () {
        this.model.taxiX = this.model.taxiX - 1;
        this.model.gas = this.model.gas - 1;
    },
    moveRight: function () {
        this.model.taxiX = this.model.taxiX + 1;
        this.model.gas = this.model.gas - 1;
    },
    moveUp: function () {
        this.model.taxiY = this.model.taxiY + 1;
        this.model.gas = this.model.gas - 1;
    },
    moveDown: function () {
        this.model.taxiY = this.model.taxiY - 1;
        this.model.gas = this.model.gas - 1;
    },


});
