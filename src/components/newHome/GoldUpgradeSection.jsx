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
    step: 'STEP 1',
    title: 'Bring your old gold',
    description:
      'Visit our showroom with your old gold jewelry, coins, or bars.',
    image: '1.jpg', // ✅ add image path
  },
  {
    step: 'STEP 2',
    title: 'Purity Check',
    description: 'Our Karatmeter will assess the purity of your gold.',
    image: '3.jpg',
  },
  {
    step: 'STEP 3',
    title: ' Get Your Value',
    description: 'Your old gold will be melted right in front of you.',
    image: '2.jpg',
  },
  {
    step: 'STEP 4',
    title: 'Choose Your New Jewelry',
    description:
      'Use your exchange value to buy new, stunning jewelry from our collections.',
    image: '4.png',
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
            <img src={s.image} alt={s.title} className="step-image" />
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
