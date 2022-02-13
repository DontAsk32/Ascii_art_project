


// const desaty = " $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/()1{}[]?-_+~<>i!lI;:,^`.◦";
// let pfp;

// function preload(){
// pfp = loadImage("tetis.png");

// };

// function setup() {
//   createCanvas(600,600);



// function draw(){
//   background(0,0,0,255);
// //image(pfp,0,0,width,height);
  
// let w =  width/pfp.width
// let h = height/pfp.height
// pfp.loadPixels()
// for (let i =0;i<pfp.width;i++)
// for(let j = 0;j<pfp.height;j++)

//    {
//     {
      
//       let pixelindex =  (i+j*pfp.width)*4
//       let  r = pfp.pixels[pixelindex+0]
//       let  g = pfp.pixels[pixelindex+1]
//       let  b = pfp.pixels[pixelindex+2]
//       let c = color(r,g,b)
//       let pixelbrightness = brightness(c);
//      let roundedbrightness = round(pixelbrightness)
    

//      let text = document.getElementById("text")

     
//      // noStroke()
//      // fill(pixelbrightness)
//       //square(i*w,j*h,w)
    
    
//       letter= pixelbrightness/3,984375

//       finaLetter=desaty.charAt(64-letter)


//       text.innerHTML=finaLetter
//       // textSize(w)
//       // textAlign(CENTER,CENTER)
//       // text(finaLetter,i*w+w*0.5,j*h+h*0.5)
//       // fill(pixelbrightness)

      
     
//       }
      
//     }
//   }

// }



const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let my_image;

function preload() {
  my_image = loadImage("tetis.png");
}

function setup() {
  noCanvas();
  my_image.loadPixels();
  for (let j = 0; j < my_image.height; j++) {
    let row = "";
    for (let i = 0; i < my_image.width; i++) {
      const pixelIndex = (i + j * my_image.width) * 4;
      const r = my_image.pixels[pixelIndex + 0];
      const g = my_image.pixels[pixelIndex + 1];
      const b = my_image.pixels[pixelIndex + 2];
      let k = color(r,g,b)
      let pixelbrightness = brightness(k);
      // const avg = (r + g + b) / 3;

      // const len = density.length;
      // const charIndex = floor(map(avg, 0, 255, len, 0));
      letter= pixelbrightness/3.984375

       charIndex=density.charAt((round(letter))/3)

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    createDiv(row);
  }
}