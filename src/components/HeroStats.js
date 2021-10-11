// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import { animationOne, transition } from "../animations";
// import { HeroContext } from "../shared/HeroContext";

// function HeroStats() {
//   const { search } = useContext(HeroContext);

//   return (
//     <div>
//       {search &&
//         search.map((val) => (
//           <motion.div
//             initial="out"
//             animate="in"
//             exit="out"
//             variants={animationOne}
//             transition={transition}
//           >
//             key={val.id}
//             <p>Strength: {val.strength}</p>
//             <p>Durability: {val.durability}</p>
//             <p>Power: {val.power}</p>
//             <p>Speed: {val.speed}</p>
//             <p>Intelligence: {val.intel}</p>
//             <p>Combat: {val.combat}</p>
//           </motion.div>
//         ))}
//     </div>
//   );
// }

// export default HeroStats;
