window.onload = function() {

    if( !Modernizr.testAllProps('shapeOutside', 'content-box', true)) {
        $('.article_header_wrapper').prepend('<span class="before"></span>')
    }
};


