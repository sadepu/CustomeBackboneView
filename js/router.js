
var app = {};

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes : {
            '' : 'home',
            'home' : 'home',
            'profile' : 'profile'
        },
        home: function(qParams){
            require(['views/home/homeView'], function(HomeView) {
                var homeView = Backbone.createView('HomeView', HomeView);
            });
        },
        profile: function(qParams){
            console.log('home');
            console.log(qParams);
            require(['views/home/profileView'], function(ProfileView) {
                var profileView = Backbone.createView('ProfileView', ProfileView);
            });
        }
        
    });

    var initialize = function(options) {
        var router = new AppRouter(options);
        app.router = router;
        
        Backbone.history.start();
    };
    
    return {
        initialize : initialize
    };
});
