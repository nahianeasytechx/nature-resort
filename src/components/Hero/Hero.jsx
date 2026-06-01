import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, CalendarDays } from 'lucide-react';
import './Hero.css';

import heroBg from '../../assets/bird_beach.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="hero-section">
      <div className="hero__bg">
        <img
          src={heroBg}
          alt="The Nature of Cox's Bazar - Aerial bird's eye view of luxury resort tower with rooftop pool"
          className="hero__bg-image"
          loading="eager"
        />
      </div>

      <div className="hero__overlay"></div>

      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Own a Share in<br />
            <span className="hero__title-highlight">Nature-Inspired</span><br />
            Hospitality
          </h1>

          <p className="hero__description">
            A future 5-star resort destination at Cox's Bazar
            where land ownership, hospitality operation,
            and long-term value come together.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn--gold" id="hero-consultation-btn">
              <CalendarDays size={16} />
              Book a Private Consultation
            </Link>
            <Link to="/ownership" className="btn--outline-white" id="hero-ownership-btn">
              Explore Ownership Model
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__badges">
        <div className="hero__badges-inner">
          <div className="hero__badge">
            <div className="hero__badge-icon">
              <Star size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">Trusted</span>
              <span className="hero__badge-sub">Developer</span>
            </div>
          </div>

          <div className="hero__badge-divider"></div>

          <div className="hero__badge">
            <div className="hero__badge-icon">
              <MapPin size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">Nature-Inspired</span>
              <span className="hero__badge-sub">Destination</span>
            </div>
          </div>

          <div className="hero__badge-divider"></div>

          <div className="hero__badge">
            <div className="hero__badge-icon">
              <ShieldCheck size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">Transparent</span>
              <span className="hero__badge-sub">Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
