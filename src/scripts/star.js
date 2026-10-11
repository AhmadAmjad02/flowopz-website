// Chrome star: WebGL ray-marched 4-point star. Starts near the viewport, pauses off-screen.
// Falls back to the SVG star when WebGL is unavailable.

const canvas = document.getElementById("chrome");

if (canvas) {
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      obs.disconnect();
      (window.requestIdleCallback || setTimeout)(init);
    }
  }, { rootMargin: "600px" }).observe(canvas);
}

function fallback() {
  canvas.hidden = true;
  const fb = document.getElementById("chrome-fb");
  if (fb) fb.hidden = false;
}

const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

const FRAG = `
precision highp float;
uniform vec2 R; uniform float T; uniform vec2 M;
mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
float map(vec3 p){
  p.yz*=rot(.35+M.y*.35); p.xz*=rot(sin(T*.35)*.55+M.x*.6); p.xy*=rot(T*.12);
  p.z-=.55*p.x*p.y;
  vec2 q=abs(p.xy);
  float a=sqrt(q.x+.003),b=sqrt(q.y+.003),s=a+b;
  float z=p.z/.5;
  float f=s*s+z*z-1.;
  float g=length(vec3(s/a,s/b,2.*z/.5))*1.6;
  return f/g;
}
vec3 nor(vec3 p){vec2 e=vec2(.004,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
vec3 env(vec3 r){
  float y=r.y*.5+.5;
  vec3 c=mix(vec3(.05,.02,.14),vec3(.78,.62,1.),smoothstep(.0,1.,y));
  c+=vec3(1.)*smoothstep(.45,.95,r.y)*1.9;
  c+=vec3(1.,.95,1.)*pow(max(dot(r,normalize(vec3(.7,.35,.6))),0.),10.)*2.6;
  c+=vec3(.7,.55,1.)*pow(max(dot(r,normalize(vec3(-.8,-.1,.5))),0.),8.)*1.6;
  c+=vec3(.9)*smoothstep(.12,.0,abs(r.x*.8+r.y*.5-.15))*.9;
  c*=.5+.5*smoothstep(-.3,.3,sin(r.y*6.+r.x*3.));
  return c;
}
void main(){
  vec2 uv=(gl_FragCoord.xy*2.-R)/min(R.x,R.y);
  vec3 ro=vec3(0.,0.,3.4),rd=normalize(vec3(uv*.36,-1.));
  float t=1.6; bool hit=false;
  for(int i=0;i<72;i++){float d=map(ro+rd*t);if(d<.002){hit=true;break;}t+=d;if(t>5.2)break;}
  if(!hit){gl_FragColor=vec4(0.);return;}
  vec3 p=ro+rd*t,n=nor(p);
  vec3 r=reflect(rd,n);
  float fr=pow(1.-max(dot(-rd,n),0.),3.);
  vec3 col=env(r)*(.55+.6*fr)+vec3(.8,.7,1.)*fr*.45;
  gl_FragColor=vec4(pow(col,vec3(.92)),1.);
}`;

function init() {
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "low-power" });
  if (!gl) return fallback();

  const shader = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return fallback();
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uR = gl.getUniformLocation(prog, "R"), uT = gl.getUniformLocation(prog, "T"), uM = gl.getUniformLocation(prog, "M");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let on = false, raf = 0, mx = 0, my = 0, tx = 0, ty = 0;

  function size() {
    const k = Math.min(devicePixelRatio || 1, 1.5) * (innerWidth < 700 ? 0.75 : 1);
    const w = Math.round(canvas.clientWidth * k), h = Math.round(canvas.clientHeight * k);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function frame(t) {
    size();
    mx += (tx - mx) * 0.06;
    my += (ty - my) * 0.06;
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, reduced ? 3 : t / 1000);
    gl.uniform2f(uM, mx, my);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (on && !reduced) raf = requestAnimationFrame(frame);
  }

  addEventListener("pointermove", (e) => {
    tx = (e.clientX / innerWidth) * 2 - 1;
    ty = 1 - (e.clientY / innerHeight) * 2;
  }, { passive: true });

  new IntersectionObserver((entries) => {
    on = entries[0].isIntersecting;
    cancelAnimationFrame(raf);
    if (on) raf = requestAnimationFrame(frame);
  }, { rootMargin: "100px" }).observe(canvas);
}
