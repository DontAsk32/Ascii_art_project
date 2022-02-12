


const desaty = " $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/()1{}[]?-_+~<>i!lI;:,^`..";
let pfp;

function preload(){
pfp = loadImage("tetis.png");

};

function setup() {
  noCanvas();




  background(0,0,0,255);
//image(pfp,0,0,width,height);
  
let w =  width/pfp.width
let h = height/pfp.height
pfp.loadPixels()
for (let i =0;i<pfp.width;i++)
for(let j = 0;j<pfp.height;j++)

   {
    {
      
      let pixelindex =  (i+j*pfp.width)*4
      let  r = pfp.pixels[pixelindex+0]
      let  g = pfp.pixels[pixelindex+1]
      let  b = pfp.pixels[pixelindex+2]
      let c = color(r,g,b)
      let pixelbrightness = brightness(c);
     let roundedbrightness = round(pixelbrightness)
    

     // noStroke()
     // fill(pixelbrightness)
      //square(i*w,j*h,w)
    
    
      letter= pixelbrightness/3,984375

      finaLetter=desaty.charAt(64-letter)



      // textSize(w)
      // textAlign(CENTER,CENTER)
      // text(finaLetter,i*w+w*0.5,j*h+h*0.5)
      // fill(pixelbrightness)
     
      
      }
      
    }
  }

