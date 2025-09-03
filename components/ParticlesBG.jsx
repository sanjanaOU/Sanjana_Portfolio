import React, { useRef, useEffect } from "react";

export default function ParticlesBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dpr = window.devicePixelRatio || 1;
    let width, height;

    const CONFIG = {
      COUNT: 70,          // more points
      LINK: 170,          // link distance
      SPEED: 0.35,        // drift speed
      DOT: 2.2,           // dot radius
      COLOR: "#2b66da",
      LINE: "#6aa9ff",
      MOUSE_PULL: 90      // gentle pull radius
    };

    function size() {
      // match CSS size
      const cssW = canvas.offsetWidth;
      const cssH = canvas.offsetHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width  = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
      width = cssW; height = cssH;
    }
    size();

    const rnd = (a,b) => a + Math.random() * (b - a);
    let pts = new Array(CONFIG.COUNT).fill(0).map(() => ({
      x: rnd(0, width),
      y: rnd(0, height),
      vx: rnd(-CONFIG.SPEED, CONFIG.SPEED),
      vy: rnd(-CONFIG.SPEED, CONFIG.SPEED),
    }));

    // pointer
    const mouse = { x: -9999, y: -9999 };
    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left);
      mouse.y = (e.clientY - rect.top);
    };
    const clearMouse = () => { mouse.x = -9999; mouse.y = -9999; };

    function tick() {
      ctx.clearRect(0, 0, width, height);

      // lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < CONFIG.LINK) {
            const a = 1 - d / CONFIG.LINK;
            ctx.globalAlpha = a * 0.7;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = CONFIG.LINE;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // dots + motion
      for (const p of pts) {
        // soft mouse pull
        const mx = p.x - mouse.x;
        const my = p.y - mouse.y;
        const md = Math.hypot(mx, my);
        if (md < CONFIG.MOUSE_PULL) {
          p.vx += (mx / md) * -0.002;  // gentle attraction
          p.vy += (my / md) * -0.002;
        }

        // draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, CONFIG.DOT, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.COLOR;
        ctx.shadowColor = CONFIG.LINE;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // move (wrap for smoothness)
        p.x += p.vx; p.y += p.vy;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        if (p.y > height + 5) p.y = -5;
      }

      requestAnimationFrame(tick);
    }
    const raf = requestAnimationFrame(tick);

    const onResize = () => {
      size();
      // when resized, gently re-seed points inside bounds
      pts.forEach(p => {
        p.x = Math.min(Math.max(p.x, 0), width);
        p.y = Math.min(Math.max(p.y, 0), height);
      });
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", clearMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", clearMouse);
    };
  }, []);

  // Fill the section behind the content
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }}/>
    </div>
  );
}
