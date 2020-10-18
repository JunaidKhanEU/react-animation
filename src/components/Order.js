import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

// for parent to child control like when:'beforeChildren' only work if only variants are assign to children with same object properties like initial and animate
const Order = ({ pizza, setShowModal }) => {
  const [showTitle] = useState(true);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {showTitle && <h2>Thank you for your order :)</h2>}

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping}>{topping}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
