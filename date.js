  $(function () {
            // Initialize date pickers
            $('#startDatePicker').datetimepicker({
                format: 'YYYY-MM-DD'
            });
            $('#endDatePicker').datetimepicker({
                format: 'YYYY-MM-DD'
            });

            // Calculate date interval on button click
            $('#calculateBtn').on('click', function () {
                var startDate = moment($('#startDatePicker input').val(), 'YYYY-MM-DD');
                var endDate = moment($('#endDatePicker input').val(), 'YYYY-MM-DD');

                if (startDate.isValid() && endDate.isValid()) {
                    // Calculate the date interval
                    var diff = endDate.diff(startDate, 'days');
                    var years = endDate.diff(startDate, 'years');
                    var months = endDate.diff(startDate, 'months');
                    var weeks = endDate.diff(startDate, 'weeks');
                    var days = diff % 365 % 30;

                    // Display the result
                    var result = '<p>Date interval:</p>';
                    result += '<p>' + years + ' years, ' + months + ' months, ' + weeks + ' weeks, ' + days + ' days</p>';
                    $('.result').html(result);
                } else {
                    alert('Please enter valid dates.');
                }
            });
        });
