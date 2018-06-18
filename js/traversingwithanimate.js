$(function() {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function() {
        $h2.next('ul')
            .fadeIn(500)
            .children('.hot')
            .removeClass('hot')
            .addClass('complete').each(function(){
            $(this).on('click', function () {
                $(this).animate({
                    opacity: 0.0,
                    paddingLeft: '+=80'
                }, 500, function () {
                    $(this).remove();
                });
            });
        });
        $h2.find('a').fadeOut();
    });
});


