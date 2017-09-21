function main() {
	getCal();
}

function getCal() {
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