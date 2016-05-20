//jquery
  //click on the email icon
    //modal starts hidden
    //show the hidden modal form
    //click on submit button on modal form
      //will trigger api event
      //x or close button on modal
      //if click outside of modal, closes automatically
      //after api event has triggered, send message to DOM that email has been received



console.log("hello from scipts.js")

var keyData = {

  q: {
		sound: new Howl({
  		urls: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		urls: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		urls: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		urls: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		urls: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		urls: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		urls: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		urls: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			urls: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		urls: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		urls: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		urls: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		urls: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		urls: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		urls: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		urls: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		urls: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		urls: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		urls: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		urls: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		urls: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		urls: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		urls: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			urls: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}

//circle array to apply color change function
var circleArray = [];

    function onKeyDown(event) {

  if(keyData[event.key]){

    var color = keyData[event.key].color;
    var sound = keyData[event.key].sound;

      //height and width variables are declared (from view object)
      var height = view.size.height;
      var width = view.size.width;

    //max point variable is declared as height and width of current view
    var maxPoint = new Point(width, height);

    //random point variable is declared and combined with max point
      //result is a random point within the scope of the max point dimensions
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    //create a new circle
    var myCircle = new Path.Circle(point, 100);
    myCircle.fillColor = color;
    sound.play();

    circleArray.push(myCircle);
    // console.log(circleArray);

  }
  //key data truthy statement ends

}
//function ends

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].fillColor.hue += 1;
    circleArray[i].scale(.9);
  }

}
circleArray = [];
// console.log(circleArray);


array = [];
//RECORD KEYPRESS EVENTS
$(document).keypress(function(event){
//time stamp for each keypress event
var timeStamp = Math.round(event.timeStamp);
// console.log(timeStamp);

//key code for each keypress event
var keyCode = event.keyCode;
//key code string to convert keycode to letters
var letter = String.fromCharCode(keyCode);
//append the keycode and the timestamp to the html span

//push the key code and the time stamp into a key-time array (array of objects)
//keycode and the time stamp should be a key value pair in an object
var object = {keyPressed: letter, time: timeStamp};
array.push(object);
// console.log(array);

var encodedArray = array.map(function(obj){
  return obj.keyPressed + obj.time;
})
  var encodedUrl = encodedArray.join(":");
  // console.log(encodedUrl);
// $("textArea").append(encodedUrl);k
// $("span").append(encodedUrl);

})

$("form").hide();

$("#button").on("click",function(){
console.log("button clicked");
  $("form").show();
})

$("#myCanvas").on("click",function(){
  $("form").hide();
})

$("#submit").on("click",function(){
console.log("submit clicked");
console.log( $("#email").val() );
})

$("#email").on("click", function(){
console.log("email clicked");
})
// $("#playButton").on("mouseenter", function(){
// console.log("mouse enter");
// $(this).addClass("hover");
// })
//
// $("#playButton").on("mouseleave", function(){
// console.log("mouse exit");
// $(this).removeClass("hover");
// })




// var encodedArray = array.map(function(obj){
//   return obj.keyPressed + obj.time;
// })
// console.log(encodedArray.join(":"));



// encoding data
  //encoding and parsing data from a urls
  //encode data from an object and parse it out

  // curl -s --user 'api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0' \
  //     https://api.mailgun.net/v3/samples.mailgun.org/messages \
  //     -F from='Excited User <judah29@gmail.com>' \
  //     -F to='judah29@gmail.com' \
  //     -F subject='Hello' \
  //     -F text='Testing some Mailgun awesomeness!'
