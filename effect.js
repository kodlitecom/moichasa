console.log(sessionStorage.getItem('user'));

function CheckSession() {
    var session = sessionStorage.getItem('user');
    if (session == null) {
        // alert("Your Should Login First");
        window.location = "index.html";
    }
}

setInterval(CheckSession(),500);

$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
     
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					$('#code').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});

	$('#code').click(function(){
		$(this).fadeOut('slow');
		
		(function() {
			var openComment, styles, time, writeStyleChar, writeStyles;
		  
			styles = "/* \n * \"ADI\" v0.0.1\n * Rights protected under Adi License\n * Authored by Ramadhan Hadiatma\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...                  \n *\n * ...hello Moi            \n *\n * It's me, Ramadhan Hadiatma.         \n *\n * I'm just sitting here coding away.            \n *\n * Sure, you can watch.                       \n *\n *\n * This CSS is being injected into a DOM <style> element \n * and written in this <pre> element simultaneously.        \n *\n * Confused? Watch!\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #F96DB0; }\n.selector .key { color: #F96DB0; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * Let's build my little pen heart.\n */ \n\n\n/* First, we'll move this s*** over */\n\npre { left: 50%; }\n\n\n/* Now we can build my heart */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #F96DB0;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* It needs some depth  */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* Makin it mine. */\n\n#heart i::before {\n  content: 'I LOVE YOU, MOI';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 24px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n * Hearts gotta beat. \n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Beautiful! Now for the beating...\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * Ready...           \n */\n\n#heart, #echo {\n\n/* \n * ...set...          \n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n * ...beat!        \n */\n  \n}\n\n/* \n *\n * Yesss!         \n *\n * We did it!       \n *\n * I mean *I* did it, but you know, whatever...\n * I really love you!\n * \n * Thanks for everythink* \n * \n * Moi... \n *  \n */";
		  
			openComment = false;
		  
			writeStyleChar = function(which) {
			  if (which === '/' && openComment === false) {
				openComment = true;
				styles = $('#style-text').html() + which;
			  } else if (which === '/' && openComment === true) {
				openComment = false;
				styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
			  } else if (which === ':') {
				styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
			  } else if (which === ';') {
				styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
			  } else if (which === '{') {
				styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
			  } else {
				styles = $('#style-text').html() + which;
			  }
			  $('#style-text').html(styles);
			  return $('#style-tag').append(which);
			};
		  
			writeStyles = function(message, index, interval) {
			  var pre;
			  if (index < message.length) {
				pre = document.getElementById('style-text');
				pre.scrollTop = pre.scrollHeight;
				writeStyleChar(message[index++]);
				return setTimeout((function() {
				  return writeStyles(message, index, interval);
				}), interval);
			  }
			};
		  
			$('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");
		  
			time = window.innerWidth <= 578 ? 4 : 16;
		  
			writeStyles(styles, 0, time);
		  
		  }).call(this);
		
	});
});
