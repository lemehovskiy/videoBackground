/*

Background Video

Author: lemehovskiy

 */

(function ($) {

    $.fn.backgroundVideo = function(){

        let _width = $(this).width();
        let _height = $(this).height();
        let _ratio_x = $(this).data('ratio-x') || 16;
        let _ratio_y = $(this).data('ratio-y') || 9;
        let _video = $(this).find('video, iframe');

        if (_width / _height > _ratio_x / _ratio_y) {
            _video.css({
                "width": _width,
                "height": _width / _ratio_y * _ratio_x
            });
        } else {
            _video.css({
                "width": _height / _ratio_y * _ratio_x,
                "height": _height
            });
        }

    };

})(jQuery);