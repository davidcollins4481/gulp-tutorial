;(function($) {
    $(document).ready(function() {
        $('#action').bind('click', function(e) {
            $('.node').html('changed me again!');
        });
    });
})(jQuery);
