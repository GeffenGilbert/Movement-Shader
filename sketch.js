var effectShader;
var cam;

let video;
let prevFrame;

async function setup() {
  createCanvas(600, 600, WEBGL);
  
  effectShader = await loadShader('effect.vert', 'effect.frag');
  
  // tell p5js to use the shader
  shader(effectShader);
  
  cam = createGraphics(width, height);
  cam.translate(0, height);
  cam.scale(1, -1);
  
  video = await createCapture(VIDEO);
  video.hide();
  
  background(0);
  prevFrame = get();
  
  noStroke();
}

function draw() {
  clear();
  Back();
  
  effectShader.setUniform('prev', prevFrame);
  effectShader.setUniform('current', cam);
  prevFrame = cam.get();
  
  // run shader
  rect(0, 0, width, height);
}

function Back() {
  cam.push();
  cam.translate(width, 0);
  cam.scale(-1, 1);
  cam.image(video, 0, 0, width * video.width / video.height, height);
  cam.pop();
}
