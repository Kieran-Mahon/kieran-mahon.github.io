"use client"
import Node from "@/models/node";
import { useRef, useEffect, useState } from "react";

export default function MyCanvas() {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const [nodes, setNodes] = useState(createNodes(100));

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const parent = parentRef.current;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      console.log(canvas.width + ", " + canvas.height)
      resetNodeLocation(nodes, canvas);
      //redraw();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const draw = (time) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //Draw all nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (i != j) {
            const dist = Math.sqrt(Math.pow(nodes[j].x - nodes[i].x, 2) + Math.pow(nodes[j].y - nodes[i].y, 2));
            const maxDist = 250;
            if (dist <= maxDist) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${1 - (dist / maxDist)})`;

              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }
        const x = nodes[i].x;
        const y = nodes[i].y;
        const radius = nodes[i].radius;
  
        ctx.fillStyle = "rgba(0, 0, 255, 1)";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        //Calculate next move
        let newX = nodes[i].x + nodes[i].speed * Math.cos(nodes[i].degree * (Math.PI / 180));
        let newY = nodes[i].y + nodes[i].speed * Math.sin(nodes[i].degree * (Math.PI / 180));

        //If needed adjust the next move and make it bounce
        //X
        if (newX <= nodes[i].radius) {
          newX = nodes[i].radius;
          nodes[i].degree = 180 - nodes[i].degree;
        } else if (newX >= (canvas.width - nodes[i].radius)) {
          newX = canvas.width - nodes[i].radius;
          nodes[i].degree = 180 - nodes[i].degree;
        }
        //Y
        if (newY <= nodes[i].radius) {
          newY = nodes[i].radius;
          nodes[i].degree = -nodes[i].degree;
        } else if (newY >= (canvas.height - nodes[i].radius)) {
          newY = canvas.height - nodes[i].radius;
          nodes[i].degree = -nodes[i].degree;
        }

        //Apply the new values
        nodes[i].x = newX;
        nodes[i].y = newY;
      }

      // Request next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={parentRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

//Random fully inclusive
function getRandom(min, max) {
  return Math.random() * (max + 1.0 - min) + min
}

//Create Nodes
function createNodes(nodeCount) {
  const nodesToReturn = [];

  for (let i = 0; i < nodeCount; i++) {
    const radius = 2;
    let speed = (Math.random() / 5) + 0.05;
    let degree = getRandom(0, 360);

    nodesToReturn.push(new Node(radius, radius, radius, speed, degree));
  }

  return nodesToReturn;
}

//Reset node location
function resetNodeLocation(nodes, canvas) {
  for (let i = 0; i < nodes.length; i++) {
    const radius = nodes[i].radius;
    const x = getRandom(radius, canvas.width - radius);
    const y = getRandom(radius, canvas.height - radius);

    nodes[i].setPosition(x, y);
  }
}
