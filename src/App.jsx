import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const LetterSection1 = () => (
  <div className="p-4">
    <p className="text-lg font-serif text-gray-800">
      Dear crush, you are so beautiful
    </p>
  </div>
);

const LetterSection2 = () => (
  <div className="p-4">
    <p className="text-lg font-serif text-gray-800">
      That every time I see you
    </p>
    <p className="mt-2 text-sm text-gray-600 italic">
      My heart skips a beat ❤️
    </p>
  </div>
);

const letterComponents = [LetterSection1, LetterSection2];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextLetter = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);

    // Animate the current letter sliding up before switching to the next
    setTimeout(() => {
      setCurrentLetter((prev) => (prev + 1) % letterComponents.length);
      setIsAnimating(false);
    }, 500); // Matches animation duration
  };

  const CurrentLetterComponent = letterComponents[currentLetter];

  useEffect(() => {
    if (isEnvelopeOpen) {
      const heartCount = 10;
      const newHearts = Array.from({ length: heartCount }, () => ({
        id: uuidv4(),
        x: Math.random() * 200 - 0, // Slight random position variation
        speed: Math.random() * 8 + 4, // Speed between 2s to 4s
        size:
          Math.random() < 0.5
            ? "text-4xl"
            : Math.random() < 0.5
            ? "text-5xl"
            : "text-6xl", // Random heart size
        jiggleAmount: Math.random() * 4 + 2, // Random jiggle range (5px to 25px)
      }));

      setHearts(newHearts);

      // Remove hearts after longest animation duration
      const timeout = setTimeout(() => {
        setHearts([]);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isEnvelopeOpen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="relative w-64 h-48 bg-purple-100 shadow-2xl rounded-lg">
        {/* Floating Heart Animation */}
        {isOpen &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 1, y: 1, x: heart.x }}
              animate={{
                opacity: 1,
                y: -400,
                x: [
                  heart.x,
                  heart.x + heart.jiggleAmount,
                  heart.x - heart.jiggleAmount,
                  heart.x,
                ], // Jiggle effect
              }}
              transition={{
                duration: heart.speed, // Unique floating speed per heart
                ease: "easeOut",
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 0.8 + 0.8, // Randomized jiggle speed (0.4s - 1.2s)
                },
              }}
              className="absolute bottom-[50px] z-21" // Position hearts inside envelope
            >
              <FaHeart
                className={clsx("text-pink-600 text-stroke", heart.size)}
              />
            </motion.div>
          ))}

        {/* Envelope Triangles */}
        {/* Flipped triangle (Top Flap) */}
        <motion.div
          animate={{ rotateX: isEnvelopeOpen ? 0 : 180 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => setIsOpen(true)}
          className={clsx(
            "absolute w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-b-[112px] border-b-red-500 origin-bottom top-[-112px]",
            isOpen ? "z-19 " : "z-30"
          )}
        ></motion.div>

        {/* Letter Animation - Positioned above top triangle but below bottom and side triangles */}
        <motion.div
          animate={{ y: isOpen ? "-55%" : "0%" }}
          transition={{ duration: 1, delay: isEnvelopeOpen ? 0.5 : 0 }}
          className={clsx(
            "absolute w-[240px] h-44 bg-white p-4 mx-2 rounded-xl shadow-lg z-20"
          )}
        >
          <p className="text-sm text-gray-600 italic">To: Crush</p>
          <p className="mt-2 text-lg font-serif text-gray-800">
            Dear crush, you are so beautiful
          </p>
          <p className="mt-2 text-lg font-serif text-gray-800">
            That every time I see you
          </p>
        </motion.div>

        {/* Animated Letter */}
        <motion.div
          animate={{ y: isOpen2 ? "-55%" : "0%" }}
          transition={{ duration: 1, delay: isEnvelopeOpen ? 0.5 : 0 }}
          className={clsx(
            "absolute w-[240px] h-44 bg-white p-4 mx-2 rounded-xl shadow-lg z-20"
          )}
        >
          <p className="text-sm text-gray-600 italic">To: Crush</p>
          <p className="mt-2 text-lg font-serif text-gray-800">
            Dear crush, you are so beautiful
          </p>
          <p className="mt-2 text-lg font-serif text-gray-800">
            That every time I see you
          </p>
        </motion.div>

        {/* Top triangle (Envelope cover) - Should be behind the letter */}
        <div
          className={clsx(
            "absolute w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[112px] border-t-red-500 z-10"
          )}
        ></div>
        {/* Bottom triangle - Should be above the letter */}
        <div className="absolute bottom-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-b-[96px] border-b-red-400 z-40 rounded-lg"></div>
        {/* Left and right triangles - Should be above the letter */}
        <div className="absolute w-0 h-0 border-x-[128px] border-x-red-300 border-y-[96px] border-y-transparent z-35 rounded-b-lg"></div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={() => {
            setIsEnvelopeOpen(true);
            handleNextLetter();
          }}
        >
          OPEN
        </button>
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500"
          onClick={() => {
            setIsOpen(false);
            setIsEnvelopeOpen(false);
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default App;
