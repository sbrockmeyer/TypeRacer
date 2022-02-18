$('nav div').click(function() {
    $('ul').slideToggle();
});

$(window).resize(function() {
    if ($(window).width() > 775) {
        $('ul').removeAttr('style');
    }
});