import { Link } from 'react-router-dom';
import './CtaBanner.css';

import ctaBg from '../../assets/Night_1.jpg.jpeg';

const CtaBanner = () => {
  return (
    <section className="cta-banner" id="cta-section">
      {/* Background */}
      <div className="cta-banner__bg">
        <img
          src={ctaBg}
          alt="The Nature resort at night with reflection on water"
          className="cta-banner__bg-image"
          loading="lazy"
        />
      </div>
      <div className="cta-banner__overlay"></div>

      {/* Content */}
      <div className="cta-banner__content">
        <h2 className="cta-banner__title">
          Begin Your Journey to Luxury
        </h2>
        <p className="cta-banner__text">
          Discover an exclusive lifestyle where every moment is curated for perfection.
          Reserve your place at The Nature of Cox's Bazar today.
        </p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary" id="cta-book-now">
            Book Your Stay
          </Link>
          <Link to="/amenities" className="btn btn--outline" id="cta-learn-more">
            Explore Amenities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
