var leftBuffer;
var rightBuffer;
var w= 400
var h= 400
var v_scale=3

function setup() {
    pixelDensity(1)

    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(2*w ,h );
    // Create both of your off-screen graphics buffers
    leftBuffer = createGraphics(w, h);
    rightBuffer = createGraphics(w, h);
}

function draw() {
    // Draw on your buffers however you like
    drawLeftBuffer();
    drawRightBuffer();
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, w, 0);
}

function drawLeftBuffer() {
    // for (let y=0;y<w/v_scale;y++){
    //     for (let x=0;x<h/v_scale;x++){
    //         var index= (x*v_scale+(y*width*v_scale)*4)
    //         var r= rightBuffer.pixels[index+0]
    //         var g= rightBuffer.pixels[index+1]
    //         var b= rightBuffer.pixels[index+2]
    //         var a= rightBuffer.pixels[index+3]
    //         leftBuffer.fill(r,g,b,a)
    //         leftBuffer.rect(x*v_scale,y*v_scale,v_scale,v_scale)


    //     }
    // }
    leftBuffer.background(50);

    leftBuffer.loadPixels()
    for (let y=0;y<w/v_scale;y++){
        for (let x=0;x<h/v_scale;x++){
            var index= ((x*v_scale+(y*v_scale*width/2))*4)

            let r  = rightBuffer.pixels[index+0]
            let g = rightBuffer.pixels[index+1]
            let b = rightBuffer.pixels[index+2]
            let a = rightBuffer.pixels[index+3]
            let bright = (r+g+b)/3
            leftBuffer.rect(x*v_scale,y*v_scale,map(bright,0,255,0,v_scale),map(bright,0,255,0,3))
            leftBuffer.noStroke();
            leftBuffer.fill(255)

        }
    }
}


function createString(){
  let val = ""
  for (let i=0; i<10; i++){
    val += String.fromCharCode(65 + random(26) );
  }
  return val
}
function drawRightBuffer() {
    // rightBuffer.textSize(56);
    rightBuffer.textSize(56);
    var astring= 'Sid'
    rightBuffer.background(50);
    rightBuffer.fill(255);
    // rightBuffer.rect(50,50,100,100)
    rightBuffer.text(astring,(w/2)-(textWidth(astring)*2), h/2)

    rightBuffer.loadPixels();
}
