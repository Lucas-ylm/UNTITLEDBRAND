const sketch = (p) => {
  let s = 30;  // Smaller step size for more detailed bumps
  let t = 0;  // Time variable
  let buffer;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); // Use WebGL renderer
    buffer = p.createGraphics(p.windowWidth, p.windowHeight); // Create off-screen buffer
  };

  // Define the function 'a' for calculating the triangle vertices
  const a = (x, y, d) => {
    const k = p.width * p.noise(t * 0.5) - x; // Use a different scale for noise
    const e = p.width * p.noise(t * 0.5, 9) - y;
    d = d || -Math.exp(-Math.hypot(k, e) / (50 + 100 * p.noise(x / 50, y / 50))); // Adjust scaling factors
    return [x + k * d, y + e * d];
  };

  p.draw = () => {
    buffer.clear(); // Clear the buffer
    buffer.noFill(); // Ensure shapes are not filled

    // Use a loop to draw the triangles on the buffer
    for (let y = 0; y < p.windowHeight; y += s) {
      for (let x = 0; x < p.windowWidth; x += s) {
        // Compute stroke color based on a sine wave pattern
        buffer.stroke(
          Math.sin(x * 0.01 + t),
          Math.sin(y * 0.01 + t + 2),
          Math.sin((x + y) * 0.01 + t + 4)
        );
        // Draw the triangle with the calculated vertices
        const [x1, y1] = a(x, y);
        const [x2, y2] = a(x, y + s);
        const [x3, y3] = a(x + s, y);
        buffer.triangle(x1, y1, x2, y2, x3, y3);
      }
    }

    // Draw the buffer to the main canvas
    p.background(248); // Clear the main canvas
    p.image(buffer, -p.width / 2, -p.height / 2);

    // Increment time to animate the pattern
    t += 0.03; // Increase the rate of change
  };
};

export default sketch;
