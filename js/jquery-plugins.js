(function($) {
    $.fn.fadeTogglePlugin = function(time = 1000) {

        return this.each(function() {
            var $this = $(this);
            if ($this.is(':visible')) {
                $this.fadeOut(time, 'swing');
            } else {
                $this.fadeIn(time, "swing");
            }
        });
    };
}(jQuery));

$("#toggleBtn").click(function () {
    $(".box").fadeTogglePlugin()
})
