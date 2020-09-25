// JS by Dan Høegh
// UCN MMD 2020

const options = {
	"controls": true,
	"autoplay": false,
	"preload": "auto",
	"muted": false
};

// The complex (and more configurable way) way
// The complex (and more configurable way) way
// The complex (and more configurable way) way

videojs('video2', options);

const video2 = videojs('video2');
const modalDialog = videojs.getComponent('ModalDialog'); // use "getComponent" to create a modalDialog class 

// Creating an HTML element for injection into the modal - this can be done with "the simple way" too
const modalContent = document.createElement("h1");  // create an element (h1)
modalContent.className = "question1";             // add a class to it
modalContent.innerHTML = "67% af studerende føler sig stresset før studiestart. Hvor mange føler sig stresset efter et halvt år inde i studiet? ";          // add some content to the element

// Create the modal
const modal = new modalDialog(video2, {
	// Options can be added in JSON format - CONFIGURABILITY!
	// see the options here: https://docs.videojs.com/modaldialog
	// PP-SLIDE: look through the options and use of that page ^^

	content: modalContent,  	// add the modalContent variable as content
	temporary: false        	// We don't want this modal to go away when it closes
								// It will be hidden and NOT deleted from HTML DOM when closed
								// This can be practical if you don't want the content to be forgotten
});

// Adds the modal to the video, but doesn't open it
video2.addChild(modal);

// Opens the modal on pause
video2.off('pause', () => {
	modal.open();
});

// Closes the modal on play
video2.on('play', () => {
	modal.close();
});


// Show overlay based on a simple timer
// Show overlay based on a simple timer
// Show overlay based on a simple timer

// setup an interval that checks if modal should be triggered
let video2timer = setInterval(() => {
	// .currentTime() is a method in video.js, which refers to the video.js video object, 
	// not the HTML DOM video element, where you would get time without parentheses: document.querySelector('#video2').currentTime       <= note: no () at the end here
	if (video2.currentTime() > 68) {
		clearInterval(video2timer); 					// stop time-based loop
		let modal2 = video2.createModal(modalContent); 	// using modalcontent from the previous example
		modal2.on('modalclose', () => {
			video2.play();
		});
	}
}, 200);



