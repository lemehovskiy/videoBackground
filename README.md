videoBackground
-------

### Demo

[https://lemehovskiy.github.io/videoBackground/demo](https://lemehovskiy.github.io/videoBackground/demo/)


### Package Managers

```sh
# NPM
npm install video_background
```

### Data Attribute Settings


In parallaxContent you can now add settings using the data-video-background attribute. You still need to call
$(element).videoBackground()
to initialize videoBackground on the element.


Example:

```html
<div class="html-video-background" data-video-background='{"ratio_x": 16, "ratio_y": 9}'>
    <video src="video.mp4" autoplay muted></video>
</div>

<script>
    $('.html-video-background').videoBackground();
</script>
```


### Settings

Option | Type | Default
--- | --- | ---
ratio_x | int | 16
ratio_y | int | 9

Example:

```html
<div class="html-video-background">
    <video src="video.mp4" autoplay muted></video>
</div>

<script>
    $('.html-video-background').videoBackground({
        ratio_x: 16,
        ratio_y: 9,
    });
</script>
```

### Browser support

* Chrome
* Firefox
* Opera
* IE10/11


### Dependencies

* jQuery 1.7
