import { useEffect, useRef } from 'react';
import {
  Waves, UtensilsCrossed, Sparkles,
  Dumbbell, Umbrella, PartyPopper
} from 'lucide-react';
import './Amenities.css';

const AMENITIES_DATA = [
  {
    icon: Waves,
    title: 'Infinity Pool',
    desc: 'Rooftop infinity pool overlooking the Bay of Bengal with stunning sunset views.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    desc: 'World-class restaurants serving authentic Bengali cuisine and international flavors.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Spa',
    desc: 'Full-service spa with traditional and modern wellness treatments for rejuvenation.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    desc: 'State-of-the-art gym equipment with ocean views and personal training services.',
  },
  {
    icon: Umbrella,
    title: 'Private Beach',
    desc: 'Exclusive beach access with premium cabanas and personalized butler service.',
  },
  {
    icon: PartyPopper,
    title: 'Event Spaces',
    desc: 'Elegant banquet halls and conference rooms for weddings, meetings, and celebrations.',
  },
];

const Amenities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="amenities" id="amenities-section" ref={sectionRef}>
      <div className="container">
        <div className="amenities__header animate-on-scroll">
          <div className="section-label">Amenities</div>
          <h2 className="section-title">World-Class Amenities</h2>
          <p className="section-description">
            Every detail has been thoughtfully designed to deliver an extraordinary
            experience of comfort, leisure, and indulgence.
          </p>
        </div>

        <div className="amenities__grid">
          {AMENITIES_DATA.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                className="amenity-card animate-on-scroll"
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="amenity-card__icon">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="amenity-card__title">{amenity.title}</h3>
                <p className="amenity-card__desc">{amenity.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
