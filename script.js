$(document).ready(function() {
    $('#generate-table').click(function() {
        var number = parseInt($('#number').val());

        if (isNaN(number)) {
            alert('Please enter a valid number.');
            return;
        }

        var tableContainer = $('#table-container');
        tableContainer.empty();

        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            var tableRow = $('<div>').text(number + ' x ' + i + ' = ' + result);
            tableContainer.append(tableRow);
        }
    });
});