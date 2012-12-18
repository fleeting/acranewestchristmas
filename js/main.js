$(document).ready(function() {
	$('audio,video').mediaelementplayer({
		audioWidth: 112,
		features: ['playpause','volume'],
		success: function(element) {
			element.addEventListener('loadeddata', function() {
				$('#moon').delay(2000).animate({
					top: "55px"
				}, 6000, function() {
					$('#santa').animate({
						top: "133px",
						left: "35px"
					}, 4000, function() {
						$('#message').delay(1000).fadeIn(3000);
					});
				});
			}, false);
		}
	});

	//$(document).snowfall({flakeCount: 150, round: true, minSize: 5, maxSize: 8});
});