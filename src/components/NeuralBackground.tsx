import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Set number of points based on screen width
    let numPoints = 100;
    if (width < 640) {
        numPoints = 25;
    } else if (width < 1024) {
        numPoints = 50;
    }
    points.current = [];

    for (let i = 0; i < numPoints; i++) {
      points.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const maxDistance = 150;

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update points
      points.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;
      });

      // Draw connections
      for (let i = 0; i < points.current.length; i++) {
        const p1 = points.current[i];

        // Connect to other points
        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(127, 90, 240, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const distMouse = Math.hypot(p1.x - mousePos.current.x, p1.y - mousePos.current.y);
        if (distMouse < maxDistance) {
          ctx.strokeStyle = `rgba(127, 90, 240, ${1 - distMouse / maxDistance})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mousePos.current.x, mousePos.current.y);
          ctx.stroke();
        }

        // Draw point
        ctx.fillStyle = "#7f5af0";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw mouse point
      if (
        mousePos.current.x >= 0 &&
        mousePos.current.y >= 0 &&
        mousePos.current.x <= width &&
        mousePos.current.y <= height
      ) {
        ctx.fillStyle = "rgba(127, 90, 240, 0.7)";
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: "transparent" }}
    />
  );
};
