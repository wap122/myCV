'use strict';

$(document).ready(() => {
    $('#google-btn').click((e) => {
        e.preventDefault();
        Snackbar.show({pos: 'bottom-center', text: 'My email : minhlevan104@gmail.com'})
    });
    $('#skype-btn').click((e) => {
        e.preventDefault();
        Snackbar.show({pos: 'bottom-center', text: 'My skype : minhsacred'})
    });
    $('.skill-bar').each((index, ele) => {
        let current = $(ele);
        let width = current.data('perc');
        current.find('.bar').css('width', width);
        current.find('.perc').html(width)
    });
    $('.navbar').find('a').click(function (e) {
        let div = $($(this).attr('href'));
        if (div.length == 0) return;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: div.offset().top - 50
        }, 500);
    });

});
