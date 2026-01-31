import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const Section2 = () => {
  return (
    <div className="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src="./images/about.png" alt="Visual" />
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">About</h2>
        <p className="section2-text">
Welcome to Codehunt, a thrilling hackathon where technology meets the high seas in a quest for innovation and discovery!
 Set sail on a pirate-themed adventure on February 15 & 16, where students and developers will navigate through
  challenging problem statements, uncover hidden solutions, and unlock treasures of creativity.

Whether you're charting your course with cutting-edge APIs, defending your ship with cybersecurity strategies, 
or building innovative solutions to crack the treasure codes, Codehunt is designed to engage your technical skills 
and fuel your imagination. Join fellow tech enthusiasts in this exciting voyage and compete for grand prizes,
 exclusive swag, and the ultimate bragging rights as the top pirate coder on the seas of innovation!        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
