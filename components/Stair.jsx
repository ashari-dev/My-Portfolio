import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reserseIndex = (_, intex) => {
  const total = 6;
  return total - intex - 1;
};

const Stair = () => {
  return (
    <>
      {[...Array(6)].map((index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reserseIndex(index) * 0.1,
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stair;