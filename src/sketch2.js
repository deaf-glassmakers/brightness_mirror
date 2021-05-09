var leftBuffer;
var rightBuffer;
var w= 400
var h= 400
var v_scale=5

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

    for (let y=0;y<w;y++){
        for (let x=0;x<h;x++){
            var index= ((x+(y*width))*4)
            
            var r= rightBuffer.pixels[index+0]
            console.log(r)
            var g= rightBuffer.pixels[index+1]
            var b= rightBuffer.pixels[index+2]
            var a= rightBuffer.pixels[index+3]
            
            leftBuffer.rect(x,y,1,1)
            leftBuffer.fill(r,0,0)

        }
    }
}

function drawRightBuffer() {
    rightBuffer.textSize(56);
    var astring= 'Sidharth'
    rightBuffer.background(100, 100, 255);
    rightBuffer.fill(0, 0, 0);
    rightBuffer.text(astring,(w/2)-(textWidth(astring)*2), h/2)
    
    rightBuffer.loadPixels();
}   