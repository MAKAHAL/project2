
    $('#account-page').on('click', function () {
        location.href = 'home_page.html';
    });
    $('#account-create-page').on('click', function () {
        location.href = 'account_create_page.html';
    });
    $('#transfer-page').on('click', function () {
        location.href = 'transfer_page.html';
    });

    // live search code input
    $(document).ready(function () {
        $('#transaction-query').keyup(function () {
            // $('#result').html('');
            let searchField = $('#transaction-query').val();
            let expression = new RegExp(searchField, 'i');

            // how can I have the th stay?
            // $(this).prepend(
            //     '<tr><td>' + 'Transaction' + '</td>' +
            //     '<td>' + 'Amount' + '</td>' +
            //     '<td>' + 'Balance' + '</td></tr>'
            // )
            $('table tr').each(function () {
                if ($(this).text().search(expression) < 0) {
                    $(this).fadeOut();
                } else {
                    $(this).show();
                }
            });

        });
    });


    // export transactions table into excel with jquery
    $('#table-export').on('click', function () {
        $('#table-data').table2excel({
            name: "User Complete Transactions",
            filename: 'Transactions',
            fileext: '.xls',
            preserveColors: true
        });
    });