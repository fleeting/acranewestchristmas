SmokeEffect.imgLocation = "images/smoke.png";
SmokeEffect.smokeWidth = 80;
SmokeEffect.smokeHeight = 45;
SmokeEffect.makeEffect("smokeSpawn", 24, 12);
SmokeEffect.makeEffect("smokeSpawn2", 24, 12);

$(document).ready(function() {
	$(document).snowfall({round: true, minSize: 5, maxSize: 8});
	
	var fadeTime = 1000;
	
	$('#play').click(function() {
		$(this).fadeOut(fadeTime, function() {
			$('#playerControl').removeClass('play').addClass('pause');
			p.play();
		});
	});
	
	$('#playerControl').live('click', function() {
		if($(this).hasClass('play')) {
			$('#play').fadeOut(fadeTime, function() {
				p.play();
			});
			$(this).removeClass('play').addClass('pause');
		} else {
			p.pause();
			$(this).removeClass('pause').addClass('play');
		}
	});
	
	var p = Popcorn('#poem')
		.code({
			start: 1,
			end: 8,
			onStart: function(options) {         
				$('#verse-1').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-1').fadeOut(fadeTime);
			}
		}).code({
			start: 9,
			end: 17,
			onStart: function(options) {         
				$('#verse-2').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-2').fadeOut(fadeTime);
			}
		}).code({
			start: 18,
			end: 24,
			onStart: function(options) {         
				$('#verse-3').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-3').fadeOut(fadeTime);
			}
		}).code({
			start: 25,
			end: 31,
			onStart: function(options) {         
				$('#verse-4').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-4').fadeOut(fadeTime);
			}
		}).code({
			start: 32,
			end: 39,
			onStart: function(options) {         
				$('#verse-5').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-5').fadeOut(fadeTime);
			}
		}).code({
			start: 40,
			end: 45,
			onStart: function(options) {         
				$('#verse-6').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-6').fadeOut(fadeTime);
			}
		}).code({
			start: 46,
			end: 54,
			onStart: function(options) {         
				$('#verse-7').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-7').fadeOut(fadeTime);
			}
		}).code({
			start: 55,
			end: 62,
			onStart: function(options) {         
				$('#verse-8').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-8').fadeOut(fadeTime);
			}
		}).code({
			start: 63,
			end: 70,
			onStart: function(options) {         
				$('#verse-9').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-9').fadeOut(fadeTime);
			}
		}).code({
			start: 71,
			end: 84,
			onStart: function(options) {         
				$('#verse-10').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-10').fadeOut(fadeTime);
			}
		}).code({
			start: 85,
			end: 93,
			onStart: function(options) {         
				$('#verse-11').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-11').fadeOut(fadeTime);
			}
		}).code({
			start: 94,
			end: 101,
			onStart: function(options) {         
				$('#verse-12').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-12').fadeOut(fadeTime);
			}
		}).code({
			start: 102,
			onStart: function(options) {         
				$('#verse-13').fadeIn(fadeTime);
			},
			onEnd: function(options) {
			
			}
		}).code({
			start: 106,
			onStart: function(options) {         
				$('#verse-13 p:nth-child(2)').fadeIn(fadeTime);
			},
			onEnd: function(options) {
			
			}
		}).code({
			start: 108,
			end: 116,
			onStart: function(options) {         
				$('#verse-13 p:nth-child(2) span').fadeIn(fadeTime);
			},
			onEnd: function(options) {
				$('#verse-13').fadeOut(fadeTime);
			}
		}).code({
			start: 117,
			onStart: function(options) {
				$('#playerControl').hide();
				$('.main .wrapper').fadeOut(800);
				$('header hgroup').animate({
					top: '120px',
					right: '-15px',
					fontSize: '1.7em'
				}, 2000);
			},
			onEnd: function(options) {
			
			}
		});
});