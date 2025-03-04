// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Photo = () => {
//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1,
//         transition: { duration: 0.4 , delay: 2, ease:"easeIn" } // Smooth fade in
//        }} // Initial and animate scale
//         whileHover={{ scale: 0.90 }} // Optional hover effect
//       >
//         {/* Image */}
//         <motion.div
//         initial={{ opacity: 0 }} animate={{ opacity: 1,
//         transition: { duration: 0.4 , delay: 2.4, ease:"easeInOut" }} }// Smooth fade in
//         className={`w-[268px] h-[268px] xl:w-[498px] xl:h-[498px] rounded-full 
//         overflow-hidden border-4 border-primary shadow-lg mix-blend-lighten absolute `}>
//         <Image
//           src="/image/adil.png"
//           alt="Adil Ashraf"
//           width={400} // Slightly larger than container for better fit
//           height={400}
//           className="object-contain w-full h-full " // 🔥 Adjust image scale
//           priority
//           quality={100}
          
//         />
//         </motion.div>
//         {/* circle */}
//         <motion.svg className={`w-[300px] h-[30px] xl:h-[506px] `}
//         fill="transparent"
//         viewBox="0 0 506 506"
//         xmlns="http://www.w3.org/2000/svg">
//             <motion.circle 
//             cx={293} 
//             cy={293} 
//             r={250}
//             stroke="#00ff99"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{strokeDasharray: "24 10 0 0"}}
//             animate={{
//                 strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//                 rotate: [120 , 360],
//                 transition: {
//                     duration: 20,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                 }}
//             } />
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Photo;
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 2, ease: "easeIn" } }}
        whileHover={{ scale: 0.9 }}
        className="relative"
      >
        {/* Image inside a smaller container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" } }}
          className="w-[220px] h-[220px] xl:w-[400px] xl:h-[400px] rounded-full 
          overflow-hidden border-4 border-primary shadow-lg mix-blend-lighten absolute top-[41px] left-[45px]"
        >
          <Image
            src="/image/aa.png"
            alt="Adil Ashraf"
            // width={320} // 🔥 Make the image slightly smaller
            // height={320}
            fill
            className="object-cover w-full h-full " // 🔥 Scale down image inside container
            priority
            quality={100}
          />
        </motion.div>

        {/* Circle animation */}
        <motion.svg
          className="w-[260px] h-[260px] xl:w-[430px] xl:h-[430px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={293}
            cy={293}
            r={250}
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

