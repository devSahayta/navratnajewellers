'use client';

// import React from 'react';
import '../styles/productShowcase.css';

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      <h2 className="showcase-title">Our Best Sellers</h2>

      <div className="showcase-grid">
        {/* Big card - Gold Jewellery */}
        <div className="showcase-card big">
          <img
            src="/images/New/n1.png"
            alt="Gold Jewellery"
            className="showcase-img"
          />
          <div className="showcase-label gold">Gold Jewellery</div>
        </div>

        {/* 14 Karat */}
        <div className="showcase-card">
          <img
            src="/images/New/n2.png"
            alt="14 Karat"
            className="showcase-img"
          />
          <div className="showcase-label gold">14 Karat</div>
        </div>
        <div className="showcase-card">
          <img
            src="/images/New/n2.png"
            alt="14 Karat"
            className="showcase-img"
          />
          <div className="showcase-label gold">14 Karat</div>
        </div>

        {/* Pendant with Chains - wide */}
        <div className="showcase-card wide">
          <img
            src="/images/pendant.jpg"
            alt="Pendant with Chains"
            className="showcase-img"
          />
          <div className="showcase-label pink">Pendant with Chains</div>
        </div>

        {/* Bangles */}
        <div className="showcase-card">
          <img
            src="/images/bangles.jpg"
            alt="Bangles"
            className="showcase-img"
          />
          <div className="showcase-label gold">Bangles</div>
        </div>

        {/* Jewellery with Gemstone - wide */}
        <div className="showcase-card wide">
          <img
            src="/images/gemstone.jpg"
            alt="Jewellery with Gemstone"
            className="showcase-img"
          />
          <div className="showcase-label green">Jewellery with Gemstone</div>
        </div>

        {/* 18 Karat */}
        <div className="showcase-card">
          <img src="/images/18k.jpg" alt="18 Karat" className="showcase-img" />
          <div className="showcase-label gold">18 Karat</div>
        </div>

        {/* 22 Karat */}
        <div className="showcase-card">
          <img src="/images/22k.jpg" alt="22 Karat" className="showcase-img" />
          <div className="showcase-label gold">22 Karat</div>
        </div>

        {/* Nose Pin */}
        <div className="showcase-card">
          <img
            src="/images/nosepin.jpg"
            alt="Nose Pin"
            className="showcase-img"
          />
          <div className="showcase-label pink">Nose Pin</div>
        </div>

        {/* Toe Ring */}
        <div className="showcase-card">
          <img
            src="/images/toering.jpg"
            alt="Toe Ring"
            className="showcase-img"
          />
          <div className="showcase-label pink">Toe Ring</div>
        </div>
      </div>

      {/* Scroll Controls */}
      <div className="showcase-controls">
        <button className="arrow-btn">‹</button>
        <button className="arrow-btn">›</button>
      </div>
    </section>
  );
}
