import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel, Building2, MapPin,
  LayoutGrid, Gem, Clock, ArrowRight
} from 'lucide-react';
import './FlagshipProject.css';

import beachImg from '../../assets/bird_beach.jpeg';

const PROJECT_INFO = [
  { icon: Hotel, label: 'Project Type', value: '5-Star Hotel & Resort' },
  { icon: Building2, label: 'Initiative By', value: 'The Premium Homes Ltd.' },
  { icon: MapPin, label: 'Location', value: "Cox's Bazar, Bangladesh" },
  { icon: LayoutGrid, label: 'Structure', value: 'Land Share Ownership' },
  { icon: Gem, label: 'Brand', value: 'The Nature' },
  { icon: Clock, label: 'Status', value: 'Planning & Offer Stage' },
];

const FlagshipProject = () => {
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
    <section className="flagship" id="flagship-section" ref={sectionRef}>
      {/* Background Image */}
      <div className="flagship__bg">
        <img
          src={beachImg}
          alt="Aerial view of Cox's Bazar beach coastline with The Nature resort"
          className="flagship__bg-image"
          loading="lazy"
        />
      </div>
      <div className="flagship__overlay"></div>

      <div className="flagship__container">
        <div className="flagship__content animate-on-scroll">
          <div className="section-label">OUR FLAGSHIP PROJECT</div>
          <h2 className="flagship__title">
            The Nature at Cox's Bazar<br />
            A Future 5-Star Resort Destination
          </h2>
          <p className="flagship__text">
            Cox's Bazar is Bangladesh's most powerful tourism destination.
            The Nature is being planned to offer a world-class resort
            experience with international standard facilities.
          </p>

          <div className="flagship__info-grid">
            {PROJECT_INFO.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div className="flagship__info-item" key={index}>
                  <div className="flagship__info-icon">
                    <IconComponent size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flagship__info-label">{item.label}</div>
                    <div className="flagship__info-value">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/project" className="btn--gold flagship__cta" id="flagship-explore-btn">
            Explore Cox's Bazar Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
