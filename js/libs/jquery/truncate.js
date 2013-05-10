define(['jquery'], function(jQuery){
(function ($) {
        var trailing_whitespace = true;
        $.fn.truncate = function (options) {
            var opts = $.extend({}, $.fn.truncate.defaults, options);
			
			
			$(this).each(function () {
				 
				 
                var content_length = $.trim(squeeze($(this).text())).length;
                if (content_length <= opts.max_length) return;
                
				var actual_max_length = opts.max_length - opts.more.length - 3;
                var truncated_node = recursivelyTruncate(this, actual_max_length);
                var full_node = $(this).hide();
                truncated_node.insertAfter(full_node);
				
				findNodeForMore(truncated_node).append(' <a class="moreContent" href="#show more content">' + opts.more + '</a>');
                findNodeForLess(full_node).append(' <a class="lessContent" href="#show less content">' + opts.less + '</a>');
                truncated_node.find('a:last').click(function () {
                    truncated_node.hide();
                    full_node.show();
                    return false;
                });
                full_node.find('a:last').click(function () {
                    truncated_node.show();
                    full_node.hide();
                    return false;
                });
            });
			 
        };
        $.fn.truncate.defaults = {
            max_length: 100,
            more: '…more',
            less: 'less'
        };
        function recursivelyTruncate(node, max_length) {
            return (node.nodeType == 3) ? truncateText(node, max_length) : truncateNode(node, max_length);
        }
        function truncateNode(node, max_length) {
            var node = $(node);
            var new_node = node.clone().empty();
            var truncatedChild;
            node.contents().each(function () {
                var remaining_length = max_length - new_node.text().length;
                if (remaining_length == 0) return;
                truncatedChild = recursivelyTruncate(this, remaining_length);
                if (truncatedChild) new_node.append(truncatedChild);
            });
            return new_node;
        }
        function truncateText(node, max_length) {
            var text = squeeze(node.data);
            if (trailing_whitespace) text = text.replace(/^ /, '');
            trailing_whitespace = !!text.match(/ $/);
            var text = text.slice(0, max_length);
            text = $('<div/>').text(text).html();
            return text;
        }
        function squeeze(string) {
            return string.replace(/\s+/g, ' ');
        }
        function findNodeForMore(node) {
            var $node = $(node);
            var last_child = $node.children(":last");
            if (!last_child) return node;
            var display = last_child.css('display');
            if (!display || display == 'inline') return $node;
            return findNodeForMore(last_child);
        };
        function findNodeForLess(node) {
            var $node = $(node);
			var last_child = $node.children(":last");
			$node.find('.lessContent').remove();			 
            if (last_child && last_child.is('p')) { 
			return last_child; 
			} else {  
			return node; 
			}
			 
            
        };
    })(jQuery);	
});
