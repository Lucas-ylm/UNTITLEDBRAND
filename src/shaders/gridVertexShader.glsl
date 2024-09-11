uniform float time;
uniform vec2 resolution;
uniform float radius;
uniform vec2 centerOffset;  // New uniform for center movement

varying vec2 vUv;

// Simplex noise function
vec3 permute(vec3 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod(i, 289.0); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    vec3 x = 2.0 * fract(p * C.w) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    m *= 1.792843 - 0.853735 * ( a0*a0+h*h );

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// Fractal noise for more chaotic, irregular base shape
float fractalNoise(vec2 uv, int octaves) {
    float total = 0.0;
    float frequency = 1.0;
    float amplitude = 1.0;
    float persistence = 0.5;

    for (int i = 0; i < octaves; i++) {
        total += snoise(uv * frequency) * amplitude;
        frequency *= 2.0;
        amplitude *= persistence;
    }

    return total;
}

float computeDisplacement(vec2 uv, float radius, float time) {
    // Use dynamic center offset
    vec2 center = vec2(0.5, 0.5) + centerOffset;

    // Distance from the center of the plane
    float distance = length(uv - center);

    // Smooth the transition at the edges of the radius
    float smoothRadius = smoothstep(radius, radius + 0.1, distance);

    // Introduce perturbations in the center to create irregular base shapes
    uv += snoise(uv * 3.0 + time) * 0.0;

    // Use fractal noise to create multiple layers of irregularity
    float noiseValue = fractalNoise(uv * 5.0 + vec2(time * 0.0, time * 0.0), 4);

    // Displacement based on noise value with an exponential falloff
    float displacement = noiseValue * exp(-distance * 5.0);

    // Amplify the displacement near the center
    float centerAmplification = 1.0 / (1.0 + distance * 10.0);

    // Apply the smooth radius falloff, reducing displacement near edges
    displacement *= (1.0 - smoothRadius);

    // Amplify displacement near the center
    displacement *= centerAmplification;

    // Clamp the displacement value to prevent extreme stretching
    return clamp(displacement * 50.0, -15.0, 15.0);
}

void main() {
    vUv = uv;

    // Calculate displacement using fractal noise for more irregularity
    float displacement = computeDisplacement(vUv, radius, time);

    // Apply displacement to the z position, keep x and y fixed
    vec3 newPos = position;
    newPos.z += displacement;

    // Apply the transformation
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}