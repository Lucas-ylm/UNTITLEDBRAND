uniform float time;
uniform vec2 resolution;
uniform float radius;
uniform vec2 centerOffset;
uniform bool highDetail;

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

float computeDisplacement(vec2 uv, float radius, float time, bool highDetail) {
    float displacement;

    if (highDetail) {
        // Use dynamic center offset with time-based movement, introducing noise in the offset
        vec2 dynamicOffset = centerOffset + vec2(sin(time * 0.3 + snoise(vec2(time * 0.1, time * 0.15))) * 0.065, 
                                                 cos(time * 0.7 + snoise(vec2(time * 0.2, time * 0.3))) * 0.02);
        vec2 center = vec2(0.5, 0.5) + dynamicOffset;

        // Distance from the center of the plane
        float distance = length(uv - center);

        // Smooth the transition at the edges of the radius
        float smoothRadius = smoothstep(radius, radius + 0.1, distance);

        // Introduce perturbations in the center to create irregular base shapes
        uv += snoise(uv * (6.0 + snoise(uv * 5.0 + time * 0.05))) * 0.005;  // Small random perturbations

        // Use fractal noise to create multiple layers of irregularity with time-varying frequency
        float noiseValue = fractalNoise(uv * (6.0 + sin(time * 0.005)), 8); // Vary frequency over time

        // Displacement based on noise value with an exponential falloff
        displacement = noiseValue * exp(-distance * 6.0);

        // Amplify the displacement near the center
        float centerAmplification = 1.0 / (2.0 + distance * 1.0);

        // Apply the smooth radius falloff, reducing displacement near edges
        displacement *= (1.0 - smoothRadius);

        // Amplify displacement near the center
        displacement *= centerAmplification;

        // Clamp the displacement value to prevent extreme stretching
        displacement = clamp(displacement * 70.0, -15.0, 15.0);
    } else {
        // Use a simplified displacement when high detail is not needed
        displacement = snoise(uv * 5.0 + time * 0.5);  // Simpler noise-based displacement
    }

    return displacement;
}

void main() {
    vUv = uv;

    // Set highDetail flag based on some condition (could be dynamic based on screen size or user input)
    bool highDetail = true;

    // Calculate displacement using fractal noise for more irregularity
    float displacement = computeDisplacement(vUv, radius, time, highDetail);

    // Apply displacement to the z position, keep x and y fixed
    vec3 newPos = position;
    newPos.z += displacement;

    // Apply the transformation
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}