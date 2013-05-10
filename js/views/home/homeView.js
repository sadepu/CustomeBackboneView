define(['jquery', 'lodash', 'backbone', 'text!templates/home/home.html', 'backboneExtendedView'], function($, _, Backbone, HomeTemplate, backboneExtendedView) {
    var HeaderMenuView = Backbone.View.extend({
        el : '#container',
        initialize : function() {
            $(this.el).html(HomeTemplate);
            this.view_attribute = 0;
        },
        events : {
            'click #details' : function() {
                console.log(this);
            },
            'click #go_id' : function() {
                console.log(backboneExtendedView);
            },
            'click #home_btn' : function() {
                this.view_attribute++;
                console.log('I said i am home -- ' + this.view_attribute);
            }
        },
        clean : function() {
            //'clean' is executed when flush_view() is called to undelegate the events.
            this.$el.children().remove();
        }
    })

    return HeaderMenuView;
});
