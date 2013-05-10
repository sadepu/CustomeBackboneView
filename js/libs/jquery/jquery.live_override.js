define(['jquery'], function(jQuery) {
    (function(jQuery) {
        // Store a reference to the original remove method.
        var originalOnMethod = jQuery.fn.on;

        // Define overriding method.
        jQuery.fn.live = function() {
            // event is bind for the elements added dynamically as well. 
            if(typeof arguments[0] == "string" && typeof arguments[1] == "function"){
                $(document).on(arguments[0], this.selector, arguments[1]);
            }else{//applied when proper live syntax is not followed and event will not fire for dynamically added elements  
                originalRemoveMethod.apply( this, arguments );
            }
            
        }
    })(jQuery);
}); 