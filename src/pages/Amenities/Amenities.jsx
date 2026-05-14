import { useEffect, useRef } from 'react';
import { Coffee, Dumbbell, Waves, Utensils, Wifi, Car, PlaneTakeoff, Shield } from 'lucide-react';
import './Amenities.css';

import poolImg from '../../assets/Birds eye view.jpg.jpeg';
import diningImg from '../../assets/interior4.jfif';
import lobbyImg from '../../assets/interior3.jfif';
import helipadImg from '../../assets/Night_A_1.jpg.jpeg';
import heroBg from '../../assets/VIew_G.jpg.jpeg';

const AMENITIES_LIST = [
  {
    id: 1,
    title: 'Infinity Edge Rooftop Pool',
    desc: 'Experience our signature rooftop infinity pool that seamlessly blends into the horizon of the Bay of Bengal, offering unparalleled sunset views.',
    img: poolImg,
    icon: Waves,
    reversed: false
  },
  {
    id: 2,
    title: 'World-Class Fine Dining',
    desc: 'Indulge in an exquisite culinary journey at our signature restaurants. We offer a curated selection of international cuisine and authentic local delicacies.',
    img: diningImg,
    icon: Utensils,
    reversed: true
  },
  {
    id: 3,
    title: '5-Star Grand Lobby',
    desc: 'Step into unparalleled luxury the moment you arrive. Our beautifully designed grand lobby provides a breathtaking welcome with premium concierge services.',
    img: lobbyImg,
    icon: Coffee,
    reversed: false
  },
  {
    id: 4,
    title: 'Exclusive Helipad Access',
    desc: 'Arrive in ultimate style and convenience. Our private rooftop helipad ensures seamless VIP transit for our esteemed guests and owners.',
    img: helipadImg,
    icon: PlaneTakeoff,
    reversed: true
  }
];

const FEATURES = [
  { icon: Dumbbell, title: 'Fitness Center', desc: 'State-of-the-art gymnasium equipped with modern tech.' },
  { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock premium surveillance and safety.' },
  { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Seamless connectivity throughout the entire resort.' },
  { icon: Car, title: 'Valet Parking', desc: 'Secure basement parking with premium valet service.' }
];

const Amenities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="amenities-page" ref={containerRef}>
      {/* Hero Section */}
      <section className="amenities-hero">
        <div className="amenities-hero__bg">
          <img src={heroBg} alt="The Nature Resort Amenities" className="amenities-hero__bg-img" />
        </div>
        <div className="amenities-hero__overlay"></div>
        <div className="amenities-hero__content animate-on-scroll">
          <div className="section-label section-label--light">LIFESTYLE & LEISURE</div>
          <h1 className="amenities-hero__title">
            5-Star <span className="text-gold">Amenities</span>
          </h1>
          <p className="amenities-hero__desc">
            Discover an ecosystem of unparalleled luxury. Every facility at The Nature is designed to elevate your stay beyond the ordinary.
          </p>
        </div>
      </section>

      {/* Main Amenities Showcase */}
      <section className="amenities-showcase">
        <div className="container">
          {AMENITIES_LIST.map((amenity) => {
            const IconComponent = amenity.icon;
            return (
              <div 
                key={amenity.id} 
                className={`amenity-feature animate-on-scroll ${amenity.reversed ? 'amenity-feature--reversed' : ''}`}
              >
                <div className="amenity-feature__image">
                  <img src={amenity.img} alt={amenity.title} loading="lazy" />
                </div>
                <div className="amenity-feature__content">
                  <div className="amenity-feature__icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h2 className="amenity-feature__title">{amenity.title}</h2>
                  <p className="amenity-feature__desc">{amenity.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="amenities-features">
        <div className="container animate-on-scroll">
          <div className="section-label text-center">MORE INCLUSIONS</div>
          <h2 className="section-title text-center mb-5">Everything You Need</h2>
          
          <div className="amenities-features__grid">
            {FEATURES.map((feature, idx) => {
              const FIcon = feature.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-card__icon">
                    <FIcon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__desc">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Amenities;
