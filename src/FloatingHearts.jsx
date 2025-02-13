import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate a random number of hearts (between 3 and 5)
    const heartCount = Math.floor(Math.random() * 3) + 3;

    // Add hearts at random positions
    const newHearts = Array.from({ length: heartCount }, () => ({
      id: uuidv4(),
      x: Math.random() * 100 - 50, // Randomize initial x position
    }));

    setHearts(newHearts);

    // Clear hearts after animation completes
    const timeout = setTimeout(() => {
      setHearts([]);
    }, 4000); // Match animation duration

    return () => clearTimeout(timeout);
  }, []); // Run once when the component mounts

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, y: 0, x: heart.x }}
          animate={{
            opacity: 0,
            y: -300,
            x: [heart.x, heart.x + 5, heart.x - 5, heart.x], // Jiggle effect
          }}
          transition={{
            duration: 4, // Animation duration
            ease: "easeOut",
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3, // Jiggle speed
            },
          }}
          className="absolute"
        >
          <FaHeart className="text-5xl text-pink-600" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
