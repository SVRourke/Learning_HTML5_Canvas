var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 200);
// c.closePath();
// c.fill();
// c.strokeStyle = "#fa34a3";
// c.stroke();

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

function drawShape(canvasObj, penObj, coordinates, stroke_color, fill_color) {
    var origin = coordinates.shift().split('x');
    
    penObj.beginPath();
    penObj.moveTo(origin[0], origin[1]);
    
    coordinates.forEach(element => 
        penObj.lineTo(
            element.split('x')[0],
            element.split('x')[1]
            )
            )
    
    penObj.closePath();
    penObj.strokeStyle = stroke_color;
    penObj.fillStyle = fill_color;
    penObj.fill();
    
    
    penObj.stroke();
}

let gps = [
    "500x100",
    "400x200",
    "100x100",
    "150x40"
]

let g = [
    "400x350",
    "500x150",
    "100x50",
]