$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
		$('#navbar-example a').click(function() {
			var href = $.attr(this, 'href');
			if (href != undefined && href != '#') {
				$root.animate({
					scrollTop: $(href).offset().top
				}, 500, function () {
					window.location.hash = href;
				});
			}
			return false;
		});
		
		
});

$("#sendFormButton").on('click', function() {
	console.log('comment');
	var comment = $('#message-box').val();
	  $('#message-box').html(comment);
		if(comment === "") {
		$("#message-box").css("border", "2px solid red");
	  } else {
		$('#message-box').hide();
	  // need it to be black
	  };
	return false;
	//no code here!
  }); //#button end

$("#message-box").on("keyup", function() {
	// console.log('keyup happened');
	var charCount = $('#message-box').val().length;
		$('#char-count').html(charCount);
		if(charCount > 50) {
		$("#char-count").css("color", "red");
		} else {
		$("#char-count").css("color", "black");
		};
});

function initMap() {
	// The location of Uluru. so where you live
	var uluru = {lat: 51.4540668, lng: -0.1966501};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 4, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
}

