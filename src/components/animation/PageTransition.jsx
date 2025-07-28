import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
const PageTransition = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  
    const handleNavigation = (e, path) => {
      e.preventDefault();
      
      // Prevent transition if already on the target page
      if (isTransitioning || location.pathname === path) return;
  
      const { clientX: x, clientY: y } = e;
      setRipplePosition({ x, y });
      setIsTransitioning(true);
  
      setTimeout(() => {
        navigate(path);
        setTimeout(() => setIsTransitioning(false), 800);
      }, 500);
    };
  
    return (
      <>
        {children(handleNavigation)}
        
        {/* Ripple Animation */}
        <motion.div 
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            pointerEvents: 'none',
            zIndex: 1060,
            display: isTransitioning ? 'block' : 'none'
          }}
        >
          <motion.div
            className="position-absolute rounded-circle"
            style={{
              left: ripplePosition.x,
              top: ripplePosition.y,
              border: 'solid #ddad59',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              width: 0, 
              height: 0,
              borderWidth: 0 
            }}
            animate={{ 
              width: isTransitioning ? 4000 : 0,
              height: isTransitioning ? 4000 : 0,
              borderWidth: isTransitioning ? 1600 : 0,
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </>
    );
  };
  

export default PageTransition;
