// import React from 'react'

import NewFooter from '../../components/NewFooter';
import NewHeader from '../../components/NewHeader';
import GoldUpgradeSection from '../../components/newHome/GoldUpgradeSection';
import TrustedSection from '../../components/TrustedSection';
import '../../styles/Offer.css';

const Offer = () => {
  return (
    <div>
      <NewHeader />
      <div className="body-container">
        {/* <h1>Old Gold Exchange Offer</h1> */}

        <div className="ban"> </div>
        <h2>
          Don't settle for less, Upgrade your old gold to the highest value
        </h2>
        <div className=" cards">
          <div className="card1"></div>
          {/* <div className="card1"> card 1</div> */}
        </div>
        <a href="https://maps.app.goo.gl/n4b6ci7L7JXLaAFDA" target="_blank">
          <button className="exp-btn ">Visit Navratna Store Today!</button>
        </a>
        <div className="tru">
          <TrustedSection />
        </div>
      </div>

      <GoldUpgradeSection />

      {/* <h3>Browse Our Curated Collections</h3>
      <div className="cards">
        <div className="card2"> card 2</div>
        <div className="card2"> card 2</div>
        <div className="card2"> card 2</div>
        <div className="card2"> card 2</div>
      </div> */}
      <NewFooter />
    </div>
  );
};

export default Offer;
