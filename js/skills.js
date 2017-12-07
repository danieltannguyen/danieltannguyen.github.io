 

var particles = [];
// create 15 particles
for( var i = 0; i < 16; i++ ) {
    particles.push( { 
        x:Math.random()*window.innerWidth, //Math.randome() returns a floating point in range [0,1).
        y:Math.random()*window.innerHeight, 
        vx:(Math.random()*2)-1, 
        vy:(Math.random()*2-1),
        history: [],
        size: 4+Math.random()*6,
        //color = random > 0.5 ? "black": random > 0.5 ? "red": "yellow"
        color: Math.random() > .5 ? "#ffffff" : Math.random() > .5 ? "#FF0000" : "#FFFF00"        
    } );
}

var mouse = { x: 0, y: 0 };

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
if (canvas && canvas.getContext) {
    //var context = canvas.getContext('2d');
    Initialize();
}

function Initialize() {

    canvas.addEventListener('mousemove', MouseMove, false);
    window.addEventListener("scroll", MouseScroll,false);
    window.addEventListener('resize', ResizeCanvas, false);
    setInterval( TimeUpdate, 20 ); // velocity : lower number = faster speed               
    context.beginPath();

    ResizeCanvas();
}

function TimeUpdate(e) {

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                
    for( var i = 0; i < particles.length; i++ ) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
                    
        if( particles[i].x > window.innerWidth ) {
            particles[i].vx = -1-Math.random();
        }
        else if ( particles[i].x < 0 ) {
            particles[i].vx = 1+Math.random();
        }
        else {
            particles[i].vx *= 1 + (Math.random()*0.005);
        }
            
        if( particles[i].y > window.innerHeight ) {
            particles[i].vy = -1-Math.random();
        }
        else if ( particles[i].y < 0 ) {
            particles[i].vy = 1+Math.random();
        }
        else {
            particles[i].vy *= 1 + (Math.random()*0.005);
        }
        
        context.strokeStyle = particles[i].color;
        context.beginPath();
        for( var j = 0; j < particles[i].history.length; j++ ) {
            context.lineTo( particles[i].history[j].x, particles[i].history[j].y );
        }
        context.stroke();
        
        particles[i].history.push({ x: particles[i].x, y: particles[i].y });
        if( particles[i].history.length > 45 ) {
            particles[i].history.shift();
        }
        
        var distanceFactor = DistanceBetween( mouse, particles[i] );
        distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
        
        // fill color 
        context.fillStyle = particles[i].color;

        //show as a line
        context.beginPath();
        //make circle at the beginning of the path
        context.arc(particles[i].x,particles[i].y,particles[i].size*distanceFactor,0,Math.PI*2,true);

        context.closePath();
        context.fill();
            
    }
}
// when user move mouse near the particles
function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
    addText();
}
function addText(){

    context.font="20px Verdana";

    // Create gradient
    var gradient=context.createLinearGradient(0,0,window.innerWidth,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    // Fill color with gradient
    context.fillStyle=gradient;

    // Fill text
    context.fillText("JavaScript",particles[0].x-50,particles[0].y);
    context.fillText("CSS",particles[1].x-23,particles[1].y);
    context.fillText("HTML5",particles[2].x-30,particles[2].y);
    context.fillText("Bootstrap",particles[3].x-50,particles[3].y);
    context.fillText("AngularJs",particles[4].x-50,particles[4].y);
    context.fillText("PHP",particles[5].x-25,particles[5].y);
    context.fillText("Node.js",particles[6].x-35,particles[6].y);
    context.fillText("Meteor",particles[7].x-30,particles[7].y);
    context.fillText("jQuery",particles[8].x-30,particles[8].y);
    context.fillText("WordPress",particles[9].x-50,particles[9].y);
    context.fillText("Java",particles[10].x-25,particles[10].y);
    context.fillText("MySQL",particles[11].x-30,particles[11].y);
    context.fillText("Photoshop",particles[12].x-50,particles[12].y);
    context.fillText("CSS3",particles[13].x-30,particles[13].y);
    context.fillText("AWS",particles[14].x-25,particles[14].y);
    context.fillText("Swift",particles[15].x-25,particles[15].y);

    context.font = "50px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("My Skills",(canvas.width/2), (canvas.height/8));
}

function MouseScroll(e) {
    addText();
}

function Draw( x, y ) {
    context.strokeStyle = '#ff0000';
    context.lineWidth = 4;
    context.lineTo(x, y);
    context.stroke();
}

function ResizeCanvas(e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function DistanceBetween(p1,p2) {
    var dx = p2.x-p1.x;
    var dy = p2.y-p1.y;
    return Math.sqrt(dx*dx + dy*dy);
}
