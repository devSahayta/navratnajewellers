import '../../styles/goldUpgrade.css';
import {
  FaBalanceScale,
  FaCheckCircle,
  FaLeaf,
  FaHandshake,
} from 'react-icons/fa';
import { GiReceiveMoney, GiDiamondRing } from 'react-icons/gi';
import { MdPolicy, MdVerifiedUser } from 'react-icons/md';

const steps = [
  {
    step: 'Step 1',
    title: 'Get Your Gold Assessed',
    description:
      'Visit our showroom with your old gold jewelry, coins, or bars.',
  },
  {
    step: 'Step 2',
    title: 'Purity & Weight Check',
    description:
      'Our experts will check the purity and weight of your gold with a 0% deduction.',
  },
  {
    step: 'Step 3',
    title: 'Get Your Value',
    description:
      'Receive up to 105% value for your old gold, based on its weight and purity.',
  },
  {
    step: 'Step 4',
    title: 'Choose Your New Jewelry',
    description:
      'Use your exchange value to buy new, stunning jewelry from our collections.',
  },
];

const promises = [
  {
    icon: <MdVerifiedUser />,
    title: '100% HUID Compliant Gold',
    text: 'Purity guaranteed with hallmark certification.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Complete Transparency',
    text: 'Clear invoices & detailed price tags.',
  },
  {
    icon: <GiDiamondRing />,
    title: 'Assured Lifetime Maintenance',
    text: 'Lifetime maintenance for jewelry from all our showrooms.',
  },
  {
    icon: <GiReceiveMoney />,
    title: 'Guaranteed Buyback',
    text: 'Best buyback value for gold & diamond jewelry.',
  },
  {
    icon: <MdPolicy />,
    title: 'Fair Price Policy',
    text: 'Reasonable making charges for maximum value.',
  },
  {
    icon: <FaLeaf />,
    title: 'Responsibly Sourced',
    text: 'Eco-friendly sourcing to protect environment & stakeholders.',
  },
  {
    icon: <FaHandshake />,
    title: 'Fair Labour Practices',
    text: 'Fair wages & working conditions for artisans.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Navratna Promise',
    text: 'Trusted since 1995, always delivering with integrity.',
  },
];

export default function GoldUpgradeSection() {
  return (
    <section className="gold-upgrade-section">
      <h2 className="section-title">How Do We Upgrade Your Gold?</h2>
      <p className="section-subtitle">
        This is the simplified, step-by-step guide to your exchange process.
      </p>

      {/* Steps */}
      <div className="steps-container">
        {steps.map((s, idx) => (
          <div key={idx} className="step-card">
            <span className="step-number">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>

      {/* Navratna Promise */}
      <h2 className="section-title">The Navratna Promise</h2>
      <p className="section-subtitle">
        Our unique selling points – trust, purity, and fairness, always.
      </p>

      <div className="promise-grid">
        {promises.map((p, idx) => (
          <div key={idx} className="promise-card">
            <div className="promise-icon">{p.icon}</div>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
