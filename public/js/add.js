// when user clicks on Add Recipient button 
$('#add-contact').on('click', (e) => {
    e.preventDefault();

    // new contact object
    let newContact = {
        name: $('#contact-name').val().trim(),
        phoneNumber: $('#contact-phone').val().trim(),
        email: $('#contact-email').val().trim()
    };

    // send an AJAX POST request with jquery
    $.post('/api/contact', newContact)
        .then((data) => {
            console.log(data);
            alert('contact successfully added!');
        });

    // empty values 
    $('#contact-name').val('');
    $('#contact-phone').val('');
    $('#contact-email').val('');
});

// ---------------------------





// ----------------------------

// when user clicks on Pay button on Transaction tab
$('#pay-button').on('click', (e) => {
    e.preventDefault();
    let pay = 'paid'
    let contact = $('#transaction-contact').text().trim();
    let amountPaid = $('#transaction-amount').text().trim();
    let balance = $('#available-balance').text().trim();
    let newBalance = (parseFloat(balance).toFixed(2) - parseFloat(amountPaid).toFixed(2));
    console.log(newBalance)
    let balanceRound = Math.floor(newBalance);

    // new transaction object
    let newTransaction = {
        username: $('#username').text().trim(),
        contactName: contact,
        amount: amountPaid,
        type: pay,
        message: $('#transaction-message').val().trim()
    };

    console.log(newTransaction);

    $.post('/api/Transaction', newTransaction)
        .then((data) => {
            console.log(data);
            alert('Paid ' + contact + ' successfully!');
        });

    
    let now = 0;
    let cents = Math.abs(balanceRound - newBalance);
    now += parseFloat($('#savings-balance').text().trim());
    let newNew = (cents + now).toFixed(2);

    console.log(cents);
    console.log(now);
    console.log(newNew);

    $('#savings-balance').text('');
    $('#savings-balance').append(newNew);



    $('#modal').hide();
    $('#send-to').val('');
    $('#transaction-amount').text('');
    $('#transaction-message').text('');
    $('#available-balance').empty();
    $('#available-balance').append(balanceRound);
    $('#transaction-contact').empty();
    $('#transaction-message').val('');
});


$('#request-button').on('click', (e) => {
    e.preventDefault();
    let charge = 'charged'
    let contact = $('#transaction-contact').text().trim();
    // new transaction object
    let newTransaction = {
        username: $('#username').text().trim(),
        contactName: contact,
        amount: $('#transaction-amount').text().trim(),
        type: charge,
        message: $('#transaction-message').val().trim()
    };

    $.post('/api/transaction', newTransaction)
        .then((data) => {
            console.log(data);
            alert('Request sent to ' + contact + ' successfully!');
        });

    $('#modal').hide();
    $('#send-to').val('');
    $('#transaction-amount').text('');
    $('#transaction-message').val('');
});


