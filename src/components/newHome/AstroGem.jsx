'use client';

import Slider from 'react-slick';
import { Button, Divider, Panel } from 'rsuite';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import { color, motion, useTime, useTransform } from 'framer-motion';

const gemsData = [
  {
    id: 1,
    name: 'Ruby (Manik)',
    image: '/images/home-page-assests/gems/red-ruby-stone.webp',
    link: '/astrological-gems/ruby-manik',
  },
  {
    id: 2,
    name: 'Pearl (Moti)',
    image: '/images/home-page-assests/gems/Pearl-gems.jpg',
    link: '/astrological-gems/pearl-moti',
  },
  {
    id: 3,
    name: 'Red Coral (Moonga)',
    image: '/images/home-page-assests/gems/red-coral-2-500x500.jpg',
    link: '/astrological-gems/red-coral-moonga',
  },
  {
    id: 4,
    name: 'Emerald (Panna)',
    image: '/images/home-page-assests/gems/emerald-loose.jpg',
    link: '/astrological-gems/emerald-panna',
  },
  {
    id: 5,
    name: 'Yellow Sapphire (Pokhraj)',
    image: '/images/home-page-assests/gems/Yellow-Sapphire.jpeg',
    link: '/astrological-gems/yellow-sapphire-pokhraj',
  },
  {
    id: 6,
    name: 'Blue Sapphire (Neelam)',
    image: '/images/home-page-assests/gems/polished-sapphire.png',
    link: '/astrological-gems/blue-sapphire-neelam',
  },
  {
    id: 7,
    name: 'Hessonite Garnet (Gomed)',
    image: '/images/home-page-assests/gems/Hessonite-Garnet-stone.jpg',
    link: '/astrological-gems/hessonite-garnet-gomed',
  },
  {
    id: 8,
    name: 'Cat’s Eye (Lehsunia)',
    image: '/images/home-page-assests/gems/Cat-Eye.jpeg',
    link: '/astrological-gems/cat-eye-lehsunia',
  },
];

const AstroGem = () => {
  // Slider settings
  const gemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // === Motion Animation Logic ===
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const fastRotate = useTransform(() => rotate.get() * 2);
  const mediumRotate = useTransform(() => rotate.get() * 1.5);

  return (
    <section className="astrological-gems relative w-full overflow-hidden bg-gray-300 text-white border-top border-gray-700 p-0.5 rounded-md">
      {/* Full-width Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - small gems */}
        <div style={{ ...boxContainer, gap: 120 }}>
          {gemsData.slice(0, 5).map((gem, i) => (
            <motion.img
              key={`tiny-${i}`}
              src={gem.image}
              alt={gem.name}
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                rotate: fastRotate,
              }}
              className="opacity-60 blur-sm"
            />
          ))}
        </div>

        {/* Layer 2 - medium gems */}
        <div style={{ ...boxContainer, gap: 200 }}>
          {gemsData.slice(3, 7).map((gem, i) => (
            <motion.img
              key={`mid-${i}`}
              src={gem.image}
              alt={gem.name}
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                rotate: mediumRotate,
              }}
              className="opacity-70 blur-sm"
            />
          ))}
        </div>

        {/* Layer 3 - big gem in center */}
        <div style={boxContainer}>
          <motion.img
            src={gemsData[0].image}
            alt={gemsData[0].name}
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              rotate,
            }}
            className="opacity-80"
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center py-16 px-6 bg-black/50">
        <h2 className="text-3xl font-bold mb-4 " style={{ color: '#4d0020' }}>
          Astrological Gems
        </h2>
        <p className="text-black max-w-2xl mx-auto mb-6">
          Discover the power of gemstones aligned with your zodiac sign and
          bring prosperity and positivity into your life.
        </p>
        <Divider>
          <GiJewelCrown color="gold" size={28} />
        </Divider>

        <Slider {...gemSettings} className="gems-slider mt-6">
          {gemsData.map(data => (
            <div key={data.id} className="gem-slide px-3">
              <Panel
                shaded
                bordered
                bodyFill
                className="gem-card bg-white/10 backdrop-blur-md text-white"
              >
                <div className="imageWrapper text-white">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="gem-image mx-auto"
                  />
                </div>
                <h3 className="mt-2">{data.name}</h3>
                <Button
                  appearance="ghost"
                  color="yellow"
                  style={{ marginTop: '10px' }}
                  onClick={() => {
                    window.location.href = data.link;
                  }}
                >
                  Explore
                </Button>
              </Panel>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AstroGem;

/**
 * ================= Styles =================
 */
const boxContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
};
