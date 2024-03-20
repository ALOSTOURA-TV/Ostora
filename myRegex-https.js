<script>
var isChrome = window.chrome;
var myVendorName = window.navigator.vendor;
var urlButtons = document.querySelectorAll(".url-button");
var showHideInstructions = document.getElementById("showHideInstructions");
var keyShortcutsButton = document.getElementById('keyShortcutsButton');
var lightsButton = document.getElementById('lightsButton');
var fader = document.getElementById('fader');
var anchorURL = document.getElementById('anchorURL');
anchorURL.target="_blank";
var resizeButton = document.getElementById('resizeButton');
var hiddenMenu = document.getElementById('hiddenMenu');
var myRegex = /^https:\/\/.*\.(m3u8|mp4|mkv)$/;
var links = document.querySelectorAll(".url-area");;
var ExoPlayer = document.getElementById('ExoPlayer');

if (isChrome !== null && myVendorName === "Google Inc.") {
	// pass
} else {
	document.body.innerHTML = "<p style=\"font-size:30px;\">You need <a href=\"http:\/\/google.com/chrome\" target=\"blank\">Google Chrome</a> to view this content</p>";
}

function triggerCloudy(index) {
	let link = links[index].value;
	
	if (link.length > 15 && myRegex.test(link)) {
		anchorURL.href=link;
		var myPlayer = videojs("player");
		myPlayer.src(link);
		myPlayer.play();
	} else {
		$("#urlArea").effect( "highlight", {color:"#ff0000"}, 500 );
	}
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



for (let i = 0; i < urlButtons.length; i ++) {
	urlButtons[i].addEventListener('click', function() {
		triggerCloudy(i);
	}, false);
}




ExoPlayer.onkeydown = function() {
	var myPlayer = videojs("player");
    var currentTime = myPlayer.currentTime();
    var volume = myPlayer.volume();
    var e = window.event;
    switch (window.event.keyCode) {
        case 37:
            myPlayer.currentTime(currentTime - 5);
            break;
        case 38:
        	myPlayer.volume(volume + 0.1);
        	break;
        case 39:
            myPlayer.currentTime(currentTime + 5);
            break;
        case 40:
        	myPlayer.volume(volume - 0.1);
        	e.preventDefault();
        	break;
        case 32:
        	if (myPlayer.paused()) {
        		e.preventDefault();
        		myPlayer.play();
        		break;
        	} else {
        		e.preventDefault();
        		myPlayer.pause();
        		break;
        	}
    }
};
</script>
