define(['jquery', 'lodash', 'backbone', 'text!templates/home/profile.html', 'backboneExtendedView'], function($, _, Backbone, ProfileTemplate, backboneExtendedView) {
    var HeaderMenuView = Backbone.View.extend({
        el : '#container',
        initialize : function() {
            $(this.el).html(ProfileTemplate);
            this.view_attribute = 0;
        },
        events : {
            'click #details' : function() {
                console.log(this);
            },
            'click #go_id' : function() {
                console.log(backboneExtendedView);
            },
            'click #profile_btn' : function() {
                this.view_attribute++;
                console.log('I said i am Profile -- ' + this.view_attribute);
            }
        },
        clean : function() {
            //this is executed when flush_view() is called to undelegate the events.
            this.$el.children().remove();
        }
    })

    return HeaderMenuView;
});
