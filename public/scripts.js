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

    if (keyData[event.key]) {

        var color = keyData[event.key].color;
        var sound = keyData[event.key].sound;

        //height and width variables are declared (from view object)
        //height and width derived from view size
        var height = view.size.height;
        var width = view.size.width;

        //max point variable is declared as height and width of current view
        //new point (argument for shape) based on height and width (of view size)
        var maxPoint = new Point(width, height);

        //random point variable is declared and combined with max point
        //result is a random point within the scope of the max point dimensions
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;

        //create a new circle

        var myCircle = new Path.Circle(point, 400);
        myCircle.fillColor = color;
        sound.play();

        circleArray.push(myCircle);
        // console.log(circleArray);

      $("#button").css("color", color)

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


$("form").hide();

$("#button").on("click", function() {
    console.log("button clicked");
    $("form").show();
})

$("#myCanvas").on("click", function() {
    $("form").hide();
})

// object.addEventListener("submit", myScript);
var form = document.getElementById("form")
var name = document.getElementById("name")
var email = document.getElementById("email")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(name.value);
    console.log(email.value);
    name.value = "";
    email.value = "";
})
