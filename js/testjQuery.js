$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');

var $listHTML = $('ul').html();
$('ul').append($listHTML);

let $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');

let $listItemHTML = $('li').html();
$('li').append('<i>'+$listItemHTML+'</i>');

let $listItemText = $('li').text();
$('li').append('<i>'+$listItemText+'</i>');

/* Changeing Content */
$(function () {
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function () {
        return '<em>'+$(this).text()+'</em>';
    })
    $('li#one').remove();
});

/* Adding New Content */
$(function () {
    $('ul').before('<p class="notice">Just updated</p>');
    $('li.hot').prepend('+ ');
    let $newListItem = $('<li><em>gluten-free</em>soy sauce</li>');
    $('li:last').after($newListItem);
});

/* Working with Attributes */
$(function () {
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id','group');
});

/* Changing CSS Rules (Not Recommended) */
$(function () {
    let backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: '+backgroundColor+'</p>');
    $('li').css({
        'background-color': '#c5a996',
        'color': '#000',
        'font-family': 'Georgia'
    });
});

/* Working with .each() */
$(function () {
    $('li').each(function () {
        let ids = this.id;
        $(this).append('<span class="order">'+ids+'</span>');
    });
});

/* Event method */
$(function () {
    let ids = '';
    let $listItems = $('li');

    $listItems.on('mouseover click',function () {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority">'+ids+'</span>');
    });

    $listItems.on('mouseout', function () {
        $(this).children('span').remove();
    });
});

/* Event Object */
$(function () {
    $('li').on('click', function(e){
        $('li span').remove();
        let date = new Date();
        date.setTime(e.timestamp);
        let clicked = date.toDateString();
        $(this).append('<span class="date">'+clicked+' '+e.type+'</span>');
    });
});

/* Delegation events (optional events) */
$(function () {
    let listItem, itemStatus, eventType;

    $('ul').on('click mouseover',
        ':not(#four)',  //This is an optional event
        {status:'important'},   //Adding another info for this event object
        function (e) {
            listItem ='Item: '+ e.target.textContent + '<br>';
            itemStatus = 'Status: ' + e.data.status + '<br>';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        });
});