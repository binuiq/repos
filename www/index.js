// If you want to prevent dragging, uncomment this section
function preventBehavior(e) {
	e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, false);

// When this function is called, Cordova has been initialized       
// and is ready to roll 
function onDeviceReady() {
}

$(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
  $.mobile.changePage('pages/email/email.html', {transition: 'pop'});
});

