import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// This is a standalone component that handles the ripple animation
const RippleTransition = ({ 
  isActive, 
  position, 
  color = '#0275d8', // Bootstrap primary blue by default
  onAnimationComplete,
  zIndex = 1030 // Bootstrap's modal z-index
}) => {
  return (
    <motion.div 
      className="position-fixed" 
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex,
        display: isActive ? 'block' : 'none'
      }}
    >
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          left: position?.x || window.innerWidth / 2,
          top: position?.y || window.innerHeight / 2,
          backgroundColor: 'transparent',
          border: `solid ${color}`,
          transformOrigin: 'center',
          translate: '-50% -50%',
        }}
        initial={{ 
          width: 0, 
          height: 0,
          borderWidth: 0 
        }}
        animate={{ 
          width: isActive ? 4000 : 0,
          height: isActive ? 4000 : 0,
          borderWidth: isActive ? 1500 : 0,
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => {
          if (isActive && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      />
    </motion.div>
  );
};

export default RippleTransition;