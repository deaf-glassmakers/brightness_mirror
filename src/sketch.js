var w = 400
var h = 400
var v_scale=5

function setup(){
    canvas=createCanvas(w,h)

    img=createGraphics(w,h)
    pixelDensity(1)

    
}
function draw(){
   
    nameText()
    image(img,400,0)

    // for (let y=0;y<h/v_scale;y++){
    //     for (let x=0;x<w/v_scale;x++){
    //       var index = (x + y*w)*4;




    //       pixels[index+0]=x;
    //       pixels[index+1]=random(255);
    //       pixels[index+2]=y;
    //       pixels[index+3]=150;
    //     }
    //   }
}

function nameText(){
    img.background(0)
    img.textSize(40)
    img,text('Heyy', w/2, h/2)
    img.fill(255, 255, 255);
    img.stroke(255)
    img.strokeWeight(5)
}