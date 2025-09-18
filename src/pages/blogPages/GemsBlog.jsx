// import '../../styles/blogStyles/gemBlog.css';
// import { motion } from 'motion/react';

// const GemsBlog = () => {
//   return (
//     <div className="blog-container">
//       <motion.header
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="header"
//       >
//         Astrological Gems: Unlocking the Power of Precious Stones
//       </motion.header>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="intro"
//       >
//         Discover the magic of gemstones and their astrological significance.
//       </motion.p>

//       <div className="content-container">
//         <motion.div
//           className="card"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>The Science Behind Astrological Gems</h2>
//           <p>
//             Astrology suggests that planetary positions influence our lives, and
//             wearing the right gemstone can balance these cosmic energies.
//           </p>
//         </motion.div>

//         <motion.div
//           className="card"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//         >
//           <h2>The Nine Navratna Gemstones and Their Significance</h2>
//           <ul>
//             <li>
//               <strong>Ruby (Manikya)</strong> – Enhances leadership, confidence,
//               and success.
//             </li>
//             <li>
//               <strong>Pearl (Moti)</strong> – Brings peace, emotional stability,
//               and mental clarity.
//             </li>
//             <li>
//               <strong>Red Coral (Moonga)</strong> – Boosts energy, courage, and
//               vitality.
//             </li>
//             <li>
//               <strong>Emerald (Panna)</strong> – Improves communication,
//               intelligence, and creativity.
//             </li>
//             <li>
//               <strong>Yellow Sapphire (Pukhraj)</strong> – Brings wisdom,
//               prosperity, and good fortune.
//             </li>
//             <li>
//               <strong>Diamond (Heera)</strong> – Enhances luxury, love, and
//               artistic skills.
//             </li>
//             <li>
//               <strong>Blue Sapphire (Neelam)</strong> – Increases discipline,
//               focus, and financial success.
//             </li>
//             <li>
//               <strong>Hessonite Garnet (Gomed)</strong> – Removes obstacles and
//               enhances decision-making.
//             </li>
//             <li>
//               <strong>Cat’s Eye (Lehsunia)</strong> – Offers protection,
//               spiritual growth, and intuition.
//             </li>
//           </ul>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="button-container"
//       >
//         <button className="explore-button">Explore Gemstones</button>
//       </motion.div>
//     </div>
//   );
// };

// export default GemsBlog;

//-----------------------------------------------------------New----------------------------------------------

// GemsBlog.jsx
import NewHeader from '../../components/NewHeader';
import '../../styles/blogStyles/gemBlog.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const GemsBlog = () => {
  return (
    <>
      {' '}
      <NewHeader />
      <div className="blog-container">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header"
        >
          ✨ Astrological Gems: Unlocking the Power of Precious Stones
        </motion.header>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="intro"
        >
          Discover the <span className="highlight">magic of gemstones</span> and
          their <span className="highlight">astrological significance</span>.
        </motion.p>

        {/* Content */}
        <motion.div
          className="content-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            className="card"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 25px rgba(0,0,0,0.2)',
            }}
          >
            <h2>The Science Behind Astrological Gems</h2>
            <p>
              Astrology suggests that planetary positions influence our lives,
              and wearing the right gemstone can balance these cosmic energies.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="card"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 25px rgba(0,0,0,0.2)',
            }}
          >
            <h2>The Nine Navratna Gemstones and Their Significance</h2>
            <ul className="gem-list">
              <li>
                <strong>Ruby (Manikya)</strong> – Leadership, confidence,
                success.
              </li>
              <li>
                <strong>Pearl (Moti)</strong> – Peace, emotional stability,
                clarity.
              </li>
              <li>
                <strong>Red Coral (Moonga)</strong> – Energy, courage, vitality.
              </li>
              <li>
                <strong>Emerald (Panna)</strong> – Communication, intelligence,
                creativity.
              </li>
              <li>
                <strong>Yellow Sapphire (Pukhraj)</strong> – Wisdom, prosperity,
                fortune.
              </li>
              <li>
                <strong>Diamond (Heera)</strong> – Luxury, love, artistry.
              </li>
              <li>
                <strong>Blue Sapphire (Neelam)</strong> – Discipline, focus,
                wealth.
              </li>
              <li>
                <strong>Hessonite (Gomed)</strong> – Removes obstacles, sharpens
                decisions.
              </li>
              <li>
                <strong>Cat’s Eye (Lehsunia)</strong> – Protection, intuition,
                spirituality.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="button-container"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: '#ff6f61',
              color: '#fff',
            }}
            whileTap={{ scale: 0.9 }}
            className="explore-button"
          >
            🔮 Explore Gemstones
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default GemsBlog;
