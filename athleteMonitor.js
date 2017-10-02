function main() {
	getCal();
	initHeader();
	initChart();
    modalPopUp();
}

function getCal() {
	// $('#main').hide();
	$('#myDateRangeChooser').calendar({
  		inline: true,
  		type: 'date',
  		text: {
	      days: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
	    },
	    formatter: {
	    	date: function (date, settings) {
        		//return a formatted string representing the date of 'date'
        		if (!date) return '';
				var day = date.getDate();
				var month = date.getMonth() + 1;
				var year = date.getFullYear();
				return day + '/' + month + '/' + year;
      		}
	    },
	    // callback when date changes, return false to cancel the change
    	onChange: function (date, text, mode) {
    		if($('#date_start').text() === '') {
    			$('#date_start').text(text);	
    			$('#myDateRangeChooser').calendar('set startDate', date);
    		}
    		else if($('#date_end').text() === '') {
    			$('#date_end').text(text);
    			$('#myDateRangeChooser').calendar('set endDate', date);
    			console.log('SD = ', $('#myDateRangeChooser').calendar('get startDate'));
    			console.log('ED = ', $('#myDateRangeChooser').calendar('get endDate'));
    		}
    		else {
    			clearRange();
    			$('#date_start').text(text);
    			$('#myDateRangeChooser').calendar('set startDate', date);	
    		}
    	}

	});
}

function modalPopUp() {
    // create modal
    $('#modalId').modal('show');
}

function initHeader() {
	// $(".horizontal-scroll-wrapper").css('max-height', $(".ui.container").width());
	$('#ddIcon').click(
		function(){ 
			if (this.className === 'chevron down icon') {
				// $('#ddIcon').transition('fade');
				$('#ddIcon').fadeOut(100, function() {
					this.className = 'chevron up icon';
					$('#ddIcon').fadeIn(100);
					// $('.calendarCon').show();
					$('#main').slideDown(200)
				});
			}
			else {
				$('#ddIcon').fadeOut(100, function() {
					this.className = 'chevron down icon';
					$('#ddIcon').fadeIn(100);
					$('#main').slideUp(200)
				});; 
			}
			
		}
	);
}

function initChart() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}

function getScrollEffect() {
	$(document).ready(function() {
		$('#scrollContainer').mousewheel(function(e, delta) {
			this.scrollLeft -= (delta * 40);
			e.preventDefault();
		});
	});
}

function clearRange() {
	$('#date_start').text('');
	$('#date_end').text('');
	$('#myDateRangeChooser').calendar('set startDate', undefined);
	$('#myDateRangeChooser').calendar('set endDate', undefined);
	$('#myDateRangeChooser').calendar('clear');
}

/*
 * Loads a view which allows the user to change the date-range and data-types to view.
*/
function pickDataTime() {

}

/*
 * Loads a view which allows the user to change the date-range and data-types to view.
*/
function viewData() {

}

function addComment() {

	var newInputText = document.getElementById('formText').value;
	if(newInputText === "") {
		$('#formText').transition('pulse');
	}
	else {
		var newComment = '<div id="newComment" style="display:none;" class=\"comment\"><a class=\"avatar\"><img src=\"https:\//semantic-ui.com/images/avatar/small/joe.jpg\"></a><div class=\"content\"><a class=\"author\">Matt</a><div class=\"metadata\"><span class=\"date\">Today at 5:42PM</span></div><div class=\"text\">'+newInputText+'</div><div class=\"actions\"><a class=\"reply\">Reply</a></div></div></div>';
		$('#replyForm').before( newComment );
		$('#newComment').transition('fade down');
		$('#newComment').prop( "id", "" );

	}

}



main();