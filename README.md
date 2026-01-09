# Motion-Shader
A small project that uses a video shader to reveal motion by subtracting the previous frame from the current one. Standing still produces a black screen, while movement becomes visible. Built in p5.js with a WebGL fragment shader.

# View Project on the Web
## Instructions
- Allow **camera access** when prompted
- **Move** in front of the camera — stillness results in a black screen
- Watch motion appear as pixel differences frame to frame

## Links
- View project: https://editor.p5js.org/GeffenGilbert/full/aNGQmz9Y3

# Features
## Frame Difference Shader
- Captures the camera feed every frame
- Subtracts the **previous frame** from the **current frame**
- Displays only changes, filtering out static content

## Real-Time Visualization
- No movement → black output
- Movement becomes bright/visible wherever pixels change
- Simple and responsive

# Code Structure
p5.js sketch and GLSL fragment shader  
Stores the previous frame as a texture and compares it to the current input.

# Purpose
Experiment with frame differencing, motion visualization, and shader-based image processing. 
Created testing potential submissions for University of Rochester 2026 Art of Science Competition. 

# Technologies
- p5.js
- WebGL / GLSL
