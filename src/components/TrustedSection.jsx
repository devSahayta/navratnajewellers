'use client';
import { motion } from 'framer-motion';
import '../styles/trustedSection.css';

const trustItems = [
  { id: 1, text: 'BIS Hallmarked Gold', icon: '/icons/bis.png' },
  { id: 2, text: '100% Authentic Silver', icon: '/icons/silver.png' },
  { id: 3, text: 'Trusted Since 1995', icon: '/icons/trust.png' },
];

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      {trustItems.map((item, i) => (
        <motion.div
          key={item.id}
          className="trusted-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={item.icon} alt={item.text} className="trusted-icon" />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default TrustedSection;
