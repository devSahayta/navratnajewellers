'use client';
import { useEffect, useRef } from 'react';
import '../../styles/Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Satya Budhraja',
    location: 'Ranchi',
    comments:
      'The best jewellery shop in Ranchi with purity in gold and silver. I am the most loyal customer and all my friends are very impressed by this shop.',
  },
  {
    id: 2,
    name: 'Brajesh Mishra',
    location: 'Ranchi',
    comments:
      'Aroma and politeness of owner makes Navratna Jewellers a place where you instantly feel comfortable and homely.',
  },
  {
    id: 3,
    name: 'Burhanuddin',
    location: 'Ranchi',
    comments:
      'Great environment and well mannered staff with very attractive price and schemes.',
  },
  {
    id: 4,
    name: 'Anjali Sharma',
    location: 'Delhi',
    comments:
      'Beautiful designs and excellent customer service. Highly recommended!',
  },
  {
    id: 5,
    name: 'Ravi Kumar',
    location: 'Patna',
    comments:
      'Best shop for gold and diamond jewelry. Trustworthy and reliable!',
  },
  {
    id: 6,
    name: 'Pooja Verma',
    location: 'Kolkata',
    comments:
      'Loved the collection and the service. Packaging was elegant, and jewellery quality is top-notch.',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 50);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title ">What Our Customers Say</h2>
      <div className="testimonials-container" ref={scrollRef}>
        {reviews.map(review => (
          <div key={review.id} className="testimonial-card">
            <h3 className="reviewer-name">{review.name}</h3>
            <br />
            <p className="reviewer-location">{review.location}</p>
            <br />
            <p className="review-text">“{review.comments}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
