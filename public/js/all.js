// handles how the page will display the characters
// server >> database >> display on page 


$.get('/api/contact', function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        $('#contact-list').append(
            '<a class="dropdown-item contact-addon">' + data[i].contactName + '</a>'
        );
    }
});





$.get('/api/transaction', function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        $('#home-display').prepend(
            '<div class="all-holder">' +
            '<div class="image-holder"><img src="./images/Sarah%20Green.jpg" alt="profile" class="contact-image"></div><div class="transaction-holder"><span class="highlight">' + data[i].username +
            '</span> ' + data[i].type + '<span class="highlight"> ' + data[i].contactName + '</span>' + '<p>' + data[i].message +
            '</p><p class="clickable" id="like-unlike"><span class="heart" data-heart="false">&#9825</span></p></div></div>'
        );
    }
});


$('#ticker-btn').on('click', function () {

    let searchedTicker = $('#ticker-input').val().trim();
    searchedTicker = searchedTicker.replace(/\s+/g, '').toUpperCase();
    $.get('api/' + searchedTicker, function (data) {
        console.log(data);
        if (!data) {
            alert('not a stock!');
        } else {
            $('#ticker-holders').prepend(
                '<div class="row mt-3 ticker-row">' +
                '<div class="col-md-1"></div>' +
                '<div class="col-md-1 clickable ex-out">x</div>' +
                '<div class="col-md-8">' +
                '<div class="row">' +
                '<div class="col-md-5 ticker">' + data.tickerSymbol + '</div>' +
                '<div class="col-md-2">$' + data.price + '</div>' +
                '<div class="col-md-2">' + data.status + '</div>' +
                '<div class="col-md-3">' + data.ratio + '</div>' +
                '</div></div></div>'
            );
        }
    });
});

