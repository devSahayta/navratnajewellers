'use client';
import { Link } from 'react-router-dom';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { useState } from 'react';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import '../styles/newHeader.css';

const navItems = [
  { label: 'Gold', href: '/collections' },
  { label: 'Silver', href: '/collections' },
  { label: 'Gems', href: '/collections' },
  { label: 'Store', href: '/mmtc-pamp' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
];

const NewHeader = () => {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState('Idle');
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > lastScroll) {
      setDirection('Down');
    } else if (latest < lastScroll) {
      setDirection('Up');
    }
    setLastScroll(latest);
  });

  return (
    <>
      {/* Promo Banner Section */}
      <section className="promo-banner">
        <motion.div
          className="promo-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="highlight"> Limited Time Offer:</span>
          Get <strong>10% Off</strong> on Gold Coins & Free Shipping on Gems –
          Shop Now!
        </motion.div>
      </section>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: direction === 'Down' ? -80 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4 }}
        className="h-sec1-header-container"
      >
        {/* Logo */}
        <motion.div
          className="h-sec1-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <img
              src="/nav-jew-logo.jpg"
              alt="Navratna Jewellers Logo"
              loading="lazy"
              className="logo-img"
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="h-sec1-collection-container">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link to={item.href} className="nav-link">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="h-sec1-right dis-flex">
          {/* Search */}
          <motion.div whileHover={{ scale: 1.1 }} className="icon-btn">
            <FiSearch size={22} />
          </motion.div>

          {/* User */}
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="icon-btn"
          >
            <FiUser size={22} />
          </motion.div>

          {/* Cart */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn cart-container"
          >
            <FiShoppingCart size={22} />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cart-badge"
            >
              2
            </motion.span>
          </motion.div>

          {/* --- New Items: Offers + Store --- */}
          {/* <div className="header-extra">
          <Link to="/offers" className="extra-link">
            <FiPercent className="extra-icon" />
            <span>Offers</span>
          </Link>
          <Link to="/store-locator" className="extra-link">
            <FiMapPin className="extra-icon" />
            <span>Find a Store</span>
          </Link>
        </div> */}
        </div>
      </motion.header>
    </>
  );
};

export default NewHeader;
