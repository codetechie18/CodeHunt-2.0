import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
// import Navbar from './Navbar';
// import Cloud from './Cloud'; 

const Hero = () => {
  const heroRef = useRef(null);
  const [beamStyle, setBeamStyle] = useState({ width: 0, angle: 0 });
  const beamOrigin = { x: 550, y: 20 };

  

const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - beamOrigin.x;
    const dy = mouseY - beamOrigin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    setBeamStyle({ width: distance, angle });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove} ref={heroRef}>
  <img
  src="/images/Hero.png"  
  alt="Hero Background"
  className="hero-bg"
/>
{/* <img src="/images/hero.jpg" alt="Hero Background" className="hero-bg" /> */}



      <div
  className="beam"
  style={{
    width: `${beamStyle.width}px`,
    transform: `translate(${beamOrigin.x - 40}px, ${beamOrigin.y - 40}px) rotate(${beamStyle.angle}deg)`
  }}
/>


      {/* <Navbar /> */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          CodeHunt 2.0
        </motion.h1>
           
 <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
         Welcome Pirates
        </motion.p>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
Ahoy! Code or walk the planks        </motion.p>

        <motion.button
        className="hero-button"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}


        >
          Start Exploring
        </motion.button>
      </motion.div>
  {/* <Cloud /> */}
    </div>
  );
};

export default Hero;
