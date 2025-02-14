import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const LetterSection1 = () => (
<<<<<<< Updated upstream
  <div className="p-4">
    <p className="text-lg font-serif text-gray-800">
      Dear crush, you are so beautiful
    </p>
=======
  <div className="flex flex-col items-center text-center">
    <p className="px-2 text-red-600 italic text-lg text-center font-meow bg-pink-100">
      Happy Valentine&apos;s Day
    </p>
    <p className="mt-2 text-sm font-poppins text-gray-800 bg-pink-100">
      Dear Kise, here is a little note to remind you how special you are.
    </p>
    <p className="mt-2 px-2 text-sm font-poppins text-center text-gray-700 bg-pink-100">
      Hope you
    </p>
    <p className="px-2 mt-1 text-sm font-poppins text-center text-gray-700 bg-pink-100">
      love it&lt;3
    </p>
>>>>>>> Stashed changes
  </div>
);

const LetterSection2 = () => (
<<<<<<< Updated upstream
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
=======
  <div className="flex flex-row items-center text-center h-full overflow-hidden gap-2">
    <img src="pic1.jpeg" alt="" className="object-contain w-1/2 h-fit" />
    <div className="w-1/2 text-[10px] leading-4 text-end font-meow">
      Every day with you is a gift, but today I get to remind you just how much
      you mean to me. You are my light, my joy, and my greatest love.
    </div>
  </div>
);

const LetterSection3 = () => (
  <div className="flex flex-row items-center text-center h-full overflow-hidden gap-2">
    <div className="w-1/2 text-[10px] leading-4 text-start font-meow">
      From the moment we met, you’ve filled my life with warmth and laughter.
      Your smile is my favorite sight, and your love is my greatest treasure.
    </div>
    <img src="pic2.jpeg" alt="" className="object-contain w-1/2 h-fit" />
  </div>
);

const LetterSection4 = () => (
  <div className="flex flex-row items-center text-center h-full overflow-hidden gap-2">
    <img src="pic3.jpeg" alt="" className="object-contain w-1/2 h-fit" />
    <div className="w-1/2 text-[10px] leading-4 text-end font-meow">
      You make every moment magical, whether we’re laughing, dreaming, or simply
      being together. You are my safe place and my greatest adventure.
    </div>
  </div>
);
const LetterSection5 = () => (
  <div className="flex flex-row items-center text-center h-full overflow-hidden gap-2">
    <div className="w-1/2 text-[10px] leading-4 text-start font-meow">
      On this special day, know that my heart is, and always will be, yours. I
      promise to love and cherish you more with every passing day.
    </div>
    <img src="pic4.jpeg" alt="" className="object-contain w-1/2 h-fit" />
  </div>
);

const LetterSection6 = () => (
  <div className="flex flex-row items-center text-center h-full overflow-hidden gap-2">
    <img src="image.png" alt="" className="object-contain w-1/2 h-fit" />
    <div className="flex flex-col w-1/2">
      <div className="text-[10px] mb-4 leading-4 text-end font-meow">
        Terima kasih sudah lahir ke dunia ini sayang
      </div>
      <div className="text-[10px] leading-4 text-end font-meow">
        Forever and always,
      </div>
      <div className="text-[10px] leading-4 text-end font-meow">Dedek</div>
    </div>
  </div>
);

const letterComponents = [
  LetterSection1,
  LetterSection2,
  LetterSection3,
  LetterSection4,
  LetterSection5,
  LetterSection6,
];
>>>>>>> Stashed changes

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [currentLetter, setCurrentLetter] = useState(0);
<<<<<<< Updated upstream
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
=======
  // const [floatingLetters, setFloatingLetters] = useState([]);
  const [isFloating, setIsFloating] = useState(false);
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);

  console.log("isOpen", isOpen);
  console.log("isEnvelopeOpen", isEnvelopeOpen);
  console.log("currentLetter", currentLetter);
  // console.log(letterComponents[currentLetter]);
  // console.log("isFloating", isFloating);

  const handleNextLetter = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true); // First click opens the envelope
    } else {
      setIsFloating(true);
      setTimeout(() => {
        setCurrentLetter((prev) => prev + 1); // Move to next letter after animation
        setIsFloating(false);
      }, 1000);
    }
  };
>>>>>>> Stashed changes

  useEffect(() => {
    if (isEnvelopeOpen || currentLetter == currentLetter + 1) {
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
  }, [isEnvelopeOpen, currentLetter]);

  console.log("condition: ", currentLetter === letterComponents.length - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="relative w-64 h-48 bg-purple-100 shadow-2xl rounded-lg">
        {/* Floating Heart Animation */}
        {(isOpen) &&
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
              className={clsx('absolute bottom-[50px]', currentLetter === 0 ? "z-21" : "z-19" )} // Position hearts inside envelope
            >
              <FaHeart
                className={clsx("text-pink-600", heart.size)}
              />
            </motion.div>
          ))}

<<<<<<< Updated upstream
=======
        {/* Current Letter - Moves Up AFTER the previous one floats */}
        {currentLetter < letterComponents.length && (
          <motion.div
            key={`current-${currentLetter}`}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: isFloating
                ? -800
                : isOpen
                ? currentLetter === 0
                  ? "-55%" // First letter moves up -55%
                  : "-80%" // The rest move up -70%
                : "0%",
              opacity: 1,
            }}
            transition={{
              duration: isFloating ? 2 : 0.8,
              delay: 0.6,
              ease: "easeOut",
            }} // Delayed so it moves up after floating one disappears
            className="absolute w-[240px] h-40 bg-white p-4 mx-2 rounded-xl shadow-xl z-20"
          >
            {letterComponents[currentLetter]()}
          </motion.div>
        )}

        {/* Next Letter Positioned Behind - Stays Until It's Time */}
        {currentLetter + 1 < letterComponents.length && (
          <motion.div
            key={`next-${currentLetter + 1}`}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y:
                isOpen && currentLetter === currentLetter + 1
                  ? "-55%" // Moves up if first letter OR if previous letter has floated
                  : "0%",
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-[240px] h-40 bg-white p-4 mx-2 rounded-xl shadow-lg z-18"
          >
            {letterComponents[currentLetter + 1]()}
          </motion.div>
        )}

>>>>>>> Stashed changes
        {/* Envelope Triangles */}
        {/* Flipped triangle (Top Flap) */}
        <motion.div
        initial={{ rotateX: 180 }}
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
        <div className="absolute flex z-50 items-center justify-center w-64 h-48 top-6">
          <button
            className="p-4 bg-pink-500 text-white rounded-full shadow-xl hover:bg-pink-600 active:scale-90 transition-transform duration-200"
            onClick={() => {
              if (currentLetter === letterComponents.length - 1) {
                setIsOpen(false);
                setIsEnvelopeOpen(false);
                setCurrentLetter(0);
                setIsFloating(false);
              } else {
                setIsEnvelopeOpen(true);
                
                handleNextLetter();
              }
            }}
          >
            <FaHeart className="text-3xl" />
          </button>
        </div>
      </div>

<<<<<<< Updated upstream
      <div className="mt-6 flex space-x-4">
=======
      

      {/* Open/Close buttons */}
      {/* <div className="mt-6 flex space-x-4">
>>>>>>> Stashed changes
        <button
          className="p-4 bg-pink-500 text-white rounded-full shadow-xl hover:bg-red-600"
          onClick={() => {
            setIsEnvelopeOpen(true);
            handleNextLetter();
            if (currentLetter === letterComponents.length - 1) {
              setIsOpen(false);
              setIsEnvelopeOpen(false);
              setCurrentLetter(0);
              setIsFloating(false);
            }
          }}
        >
          <FaHeart className="text-3xl" />
        </button>
      </div> */}
    </div>
  );
}

export default App;
