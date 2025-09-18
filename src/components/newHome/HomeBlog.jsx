import { Divider, Panel, Row } from 'rsuite';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blog = [
  {
    id: 1,
    heading: 'The Timeless Beauty of Gold Jewellery',
    content:
      'Gold jewellery has been cherished for centuries, symbolizing wealth, elegance, and cultural heritage.',
    day: 1,
    month: 'Jan',
    image: 'images/home-page-assests/collection/gold.jpg',
    link: '#',
    bg: 'linear-gradient(135deg, #FFD700, #FFA500)',
  },
  {
    id: 2,
    heading: 'Astrological Gems: Unlocking the Power',
    content:
      'Gemstones hold powerful astrological significance and are believed to bring prosperity and happiness.',
    day: 2,
    month: 'Jan',
    image: 'images/home-page-assests/collection/silver.jpg',
    link: '#',
    bg: 'linear-gradient(135deg, #6a11cb, #2575fc)',
  },
  {
    id: 3,
    heading: 'Silver Jewellery: Style and Affordability',
    content:
      'Silver jewellery is popular for its affordability and versatile designs.',
    day: 6,
    month: 'Jan',
    image: '/images/home-page-assests/collection/gems.jpg',
    link: '#',
    bg: 'linear-gradient(135deg, #d7d2cc, #304352)',
  },
  {
    id: 4,
    heading: 'Diamond Jewellery: Love & Elegance',
    content:
      'Diamonds are a girl’s best friend! From rings to pendants, they enhance every look.',
    day: 8,
    month: 'Jan',
    image: '/images/home-page-assests/collection/mmtc-pamp.jpg',
    link: '#',
    bg: 'linear-gradient(135deg, #f7971e, #ffd200)',
  },
];

const HomeBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="blog"
      style={{
        padding: '60px 0',
        background: '#fafafa',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.2rem',
          fontWeight: 'bold',
          marginBottom: '15px',
        }}
      >
        Blog
      </h2>
      <Divider>
        <GiJewelCrown size={28} />
      </Divider>

      <Row>
        <Slider {...settings}>
          {blog.map(data => (
            <Panel
              key={data.id}
              style={{
                border: '3px solid gold', // 👈 Add border here

                borderRadius: '20px',
                overflow: 'hidden',
                margin: '15px',
                height: '400px',
                width: '280px',
                background: data.bg,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              className="blog-card  "
            >
              {/* Image */}
              <div
                style={{
                  height: '180px',
                  overflow: 'hidden',
                  border: 'solid black 2px',
                }}
              >
                <img
                  src={data.image}
                  alt={data.heading}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="blog-image"
                />
              </div>

              {/* Text */}
              <div style={{ padding: '20px', color: 'black', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
                    color: 'black',
                  }}
                >
                  {data.heading}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginBottom: '15px',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                  }}
                >
                  {data.content}
                </p>
                <a
                  href={data.link}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                  className="blog-read-more"
                >
                  Read More →
                </a>
              </div>
            </Panel>
          ))}
        </Slider>
      </Row>

      <style>
        {`
          .blog-card:hover {
            transform: translateY(-10px) scale(1.05);
             border: 2px solid gold;
  box-shadow: 0 0 15px gold;
          }
          .blog-card:hover .blog-image {
            transform: scale(1.1);
          }
          .blog-read-more:hover {
            border-bottom: 2px solid #fff;
          }
        `}
      </style>
    </section>
  );
};

export default HomeBlog;
