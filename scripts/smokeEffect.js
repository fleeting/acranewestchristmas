var SmokeEffect = {
	
	imgLocation: "", //url to image here
	smokeWidth: 80, //standard width
	smokeHeight: 45, //standard height
	
	//don't touch this:
	smokePos: new Array(),
		
	makeEffect: function(id, posX, posY) {
		//set position from the "parent"
		SmokeEffect.smokePos[id] = new Array();
		SmokeEffect.smokePos[id]['x'] = posX;
		SmokeEffect.smokePos[id]['y'] = posY;
		
		//set a random time to start puffing
		var time = (Math.floor(Math.random()*3001));
		setTimeout("SmokeEffect.animate('" + id + "')", time);
	},
	
	animate: function(id) {

		//create the smoke cloud
		var puff = document.createElement("IMG");
		$(puff).attr("src", SmokeEffect.imgLocation);
		$(puff).attr("alt", "puff");
		$(puff).attr("class", "puff");
		
		//create a temp id for the cloud so we can delete it later on
		var tempId = "puff" + Math.floor(Math.random()*1001);
		$(puff).attr("id", tempId);
		
		//append the cloud to the body
		$(document.body).append($(puff));
		
		var objPos = $('#' + id).offset();
		
		//do smoke animation
		$(puff).css({
			top: (objPos['top'] + SmokeEffect.smokePos[id]['y']) + "px",
			left: (objPos['left'] + SmokeEffect.smokePos[id]['x']) + "px",
			zIndex: 25,
			opacity: 0.4
		});
		$(puff).animate({
			width: SmokeEffect.smokeWidth + "px",
			height: SmokeEffect.smokeHeight + "px",
			marginLeft: "-" + (SmokeEffect.smokeWidth / 2) + "px",
			marginTop: "-" + (SmokeEffect.smokeHeight * 1.5) + "px",
			opacity: 0.9
		},{
			duration: 1500
		}).animate({
			marginTop: "-" + (SmokeEffect.smokeHeight * 3.5) + "px",
			opacity: 0.0
		},{
			duration: 2500
		});
		
		//create timeout and run the animation again
		var time = 5500 + (Math.floor(Math.random()*4501));
		
		setTimeout("SmokeEffect.animate('" + id + "')", time);
		
		//remove the old one
		setTimeout("$('#" + tempId + "').remove()", 4200);
		
	}
}