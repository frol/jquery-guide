(function($) {

    var defaultSettings = {
        highlightImageName: 'circle',
        arrowImageName: 'arrow',
        imagesPath: '/img/',
        verticalPosition: 'top',
        horizontalPosition: 'left',
        arrowDimensions: {width: 80, height: 80},
        helptextDimensions: null, // {width, height}
        helptextOffset: null, // {left/right, top/bottom}
        visible: true,
        text: null,
        extra_id: null
    };

    $.fn.guides = function(settings) {
        settings = jQuery.extend(settings, jQuery.extend({}, defaultSettings, settings));

        this.each(function() {
            var guideLayerObj = $('<div class="guide_layer" />');
            if (!settings.visible)
                guideLayerObj.css('display', 'none');
            var $this = $(this);
            $this.css({'z-index': 2, position: 'relative'});
            $this.find('a').css({'z-index': 2, position: 'relative'});
            var guideRelativeLayerObj = $('<div style="position: relative;" />');
            var offset = $this.offset();
            var this_top = offset.top;
            var this_left = offset.left;
            if (settings.highlightImageName === null)
                var highlighterDimensions = {width: $this.outerWidth(), height: $this.outerHeight()};
            else
                var highlighterDimensions = {width: $this.outerWidth() + 10, height: $this.outerHeight() + 10};
            var highlighterOffset = {};
            var arrowOffset = {};
            var helptextOffset = settings.helptextOffset;
            if (settings.helptextOffset === null)
                helptextOffset = {};
            var layerDimensions = {
                width: (settings.arrowDimensions.width + highlighterDimensions.width * 0.8),
                height: (settings.arrowDimensions.height + highlighterDimensions.height * 0.8)
            };
            var layerOffset = {};
            switch (settings.verticalPosition) {
                case 'top':
                    layerOffset['top'] = -settings.arrowDimensions.height + highlighterDimensions.height * 0.1;
                    highlighterOffset['bottom'] = 0;
                    arrowOffset['top'] = 0;
                    if (settings.helptextOffset === null)
                        helptextOffset['top'] = 20;
                    break;
                case 'bottom':
                    layerOffset['top'] = -highlighterDimensions.height * 0.1;
                    highlighterOffset['top'] = 0;
                    arrowOffset['bottom'] = 0;
                    if (settings.helptextOffset === null)
                        helptextOffset['bottom'] = 20;
            }
            switch (settings.horizontalPosition) {
                case 'left':
                    layerOffset['left'] = -settings.arrowDimensions.width + highlighterDimensions.width * 0.1;
                    highlighterOffset['right'] = 0;
                    arrowOffset['left'] = 0;
                    if (settings.helptextOffset === null)
                        helptextOffset['right'] = highlighterDimensions.width + settings.arrowDimensions.width / 2;
                    break;
                case 'right':
                    layerOffset['left'] = -highlighterDimensions.height * 0.1;
                    highlighterOffset['left'] = 0;
                    arrowOffset['right'] = 0;
                    if (settings.helptextOffset === null)
                        helptextOffset['left'] = highlighterDimensions.width + settings.arrowDimensions.width / 2;
            }
            guideLayerObj.css({position: 'absolute', 'z-index': 1});
            guideLayerObj.css(layerDimensions);
            guideLayerObj.css(layerOffset);
            
            if (settings.highlightImageName !== null) {
                var highlighter = $('<img src="' + settings.imagesPath + settings.highlightImageName + '.png" style="position: absolute;">');
                highlighter.css(highlighterDimensions);
                highlighter.css(highlighterOffset);
                guideRelativeLayerObj.append(highlighter);
            }

            var arrow = $('<img src="' + settings.imagesPath +
                settings.arrowImageName+'_'+settings.verticalPosition+'_'+settings.horizontalPosition +
                '.png" style="position: absolute;">');
            arrow.css(settings.arrowDimensions);
            arrow.css(arrowOffset);
            guideRelativeLayerObj.append(arrow);

            var helptext = $('<div class="helptext" style="position: absolute;" />');
            helptext.css(settings.helptextDimensions);
            helptext.css(helptextOffset);
            if (settings.text === null)
                helptext.html($this.attr('title'));
            else
                helptext.html(settings.text);
            guideRelativeLayerObj.append(helptext);

            guideRelativeLayerObj.css(layerDimensions);

            guideLayerObj.append(guideRelativeLayerObj);
            if (settings.extra_id !== null)
                guideLayerObj.data('extra_id', settings.extra_id);
            $this.append(guideLayerObj);
        });
        return this;
    };
})(jQuery);
