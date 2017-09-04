/*

 Background video cover

 Author: lemehovskiy

 */

(function ($) {

    $.fn.videoBackground = function () {

        $(this).each(function(){

            let $this = $(this);

            let ratio_x = $this.data('ratio-x') || 16,
                ratio_y = $this.data('ratio-y') || 9,
                video = $this.find('video, iframe');

            $(this).css({
                overflow: 'hidden',
            });

            video.css({
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            });

            resize($this, video, ratio_x, ratio_y);

            $(window).on('resize load', function () {
                resize($this, video, ratio_x, ratio_y);
            });

        });


        function resize($this_e, $this_v, ratio_x, ratio_y) {

            let width = $this_e.outerWidth();
            let height = $this_e.outerHeight();

            if (width / height > ratio_x / ratio_y) {
                $this_v.css({
                    "width": width,
                    "height": width / ratio_y * ratio_x
                });
            } else {
                $this_v.css({
                    "width": height / ratio_y * ratio_x,
                    "height": height
                });
            }
        }

    };

})(jQuery);