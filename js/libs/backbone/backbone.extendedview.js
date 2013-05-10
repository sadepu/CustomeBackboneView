define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
    var views = {};
    (function(_, Backbone) {

        // Require Underscore and Backbone if there's a `require` function.
        // This makes `backbone.queryparam` work on the server or when using
        // `browserify`.
        if ( typeof require !== 'undefined') {
            _ = _ || require('underscore');
            Backbone = Backbone || require('backbone');
        }

        Backbone.createView = function(name, View, options) {
            options = options || {};
            if ( typeof views[name] !== 'undefined') {
                flush_view(name);
            }
            
            //This must be executed when views are rendered in the same container.
            
            var check_for_overlap = dom_view_container(name, View, options);
            if (typeof check_for_overlap === 'object') {
                flush_view(check_for_overlap.name);
            }
            
            var view = new View();
            views[name] = view;

            return view;
        }
        var dom_view_container = function(name, View, options) {
            var view_container = options.el || View.prototype.el || '';
            var is_overlapped = false;
            for (var prop in views) {
                if (view_container!='' && views[prop].el == $(view_container)[0] && prop!=name) {
                    is_overlapped = true;
                    break;
                }
            }
            if(is_overlapped){
                return {name: prop};
            }else{
                return false;
            }
        }
        var flush_view = function(name){
            views[name].undelegateEvents();
            if ( typeof views[name].clean === 'function') {
                views[name].clean();
            }
        }
    })(_, Backbone);

    return views;
}); 