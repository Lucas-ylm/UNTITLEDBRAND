uniform sampler2D uTexture;
varying vec2 vUv;

uniform vec2 uResolution;
uniform float uProgress; // Ensure this is updated at runtime
uniform vec3 uColor;

// Function to generate random value based on UV
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Function to adjust UVs to create a grid effect
vec2 squaresGrid(vec2 vUv) {
    float imageAspectX = 1.0;
    float imageAspectY = 1.0;

    float containerAspectX = uResolution.x / uResolution.y;
    float containerAspectY = uResolution.y / uResolution.x;

    vec2 ratio = vec2(
        min(containerAspectX / imageAspectX, 1.0),
        min(containerAspectY / imageAspectY, 1.0)
    );

    vec2 squareUvs = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    return squareUvs;
}

void main() {
    vec2 squareUvs = squaresGrid(vUv);
    float gridSize = 15.0; 
    vec2 grid = vec2(floor(squareUvs.x * gridSize) / gridSize, floor(squareUvs.y * gridSize) / gridSize);
    vec4 gridTexture = vec4(uColor, 0.0);

    vec4 texture = texture2D(uTexture, vUv);

    float height = 0.35;

    // Speed up the effect by scaling uProgress
    float progressSpeedFactor = 1.3; // Adjust this factor to control speed
    float progress = (1.0 + height) - (uProgress * progressSpeedFactor * (1.0 + height + height));

    float dist = 1.0 - distance(grid.y, progress);
    float clampedDist = smoothstep(height, 0.0, distance(grid.y, progress));
    float randDist = step(1.0 - height * random(grid), dist);
    dist = step(1.0 - height, dist);

    float rand = random(grid);
    float alpha = dist * (clampedDist + rand - 0.5 * (1.0 - randDist));
    alpha = max(0.0, alpha);
    gridTexture.a = alpha;

    texture.rgba *= step(progress, grid.y);

    gl_FragColor = vec4(mix(texture, gridTexture, gridTexture.a));
}