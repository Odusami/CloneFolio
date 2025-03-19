import { motion } from "framer-motion";
const CarouselMovingImg = ({ children, start, direction }) => {
  return (
    <motion.div
      initial={{ x: start}}
      animate= {{ x: direction}}
      transition={{
        ease: 'linear',
        duration: 80, 
        repeat: Infinity, 
      }}
    >
      {children}
    </motion.div>
  );
};

export default CarouselMovingImg;
