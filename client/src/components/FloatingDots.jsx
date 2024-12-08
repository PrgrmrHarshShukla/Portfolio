import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NUM_DOTS = 2000;

const generateDots = () => {
  const dots = [];
  for (let i = 0; i < NUM_DOTS; i++) {
    dots.push({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
    });
  }
  return dots;
};

export default function FloatingDots() {
  const dots = useState(generateDots);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {dots.map((dot) => {
        // Calculate repelling effect
        const dx = cursor.x - dot.x;
        const dy = cursor.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelFactor = Math.max(0, 150 - distance); // Effect radius of 150px

        const x = dot.x - (dx / distance) * repelFactor || dot.x;
        const y = dot.y - (dy / distance) * repelFactor || dot.y;

        return (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: dot.size,
              height: dot.size,
              backgroundColor: "#fff",
              borderRadius: "50%",
              position: "absolute",
              left: x,
              top: y,
              opacity: 1
            }}
            className="shadow-md"
          />
        );
      })}
    </div>
  );
}
