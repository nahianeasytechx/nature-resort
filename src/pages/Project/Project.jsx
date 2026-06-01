import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Hotel, CheckCircle, Building2, LayoutGrid, Target,
  Waves, CalendarDays, TrendingUp, Users, Construction, BadgeDollarSign,
  BedDouble, Coffee, Baby, MonitorPlay, Sparkles, ShieldCheck
} from 'lucide-react';
import './Project.css';

// Assets
import heroBg from '../../assets/Birds eye view.jpg.jpeg';
import imgRooftop from '../../assets/rooftop.png';
import imgLobby from '../../assets/VIew_G.jpg.jpeg';
import imgRoom from '../../assets/View_D_1.jpg.jpeg';
import imgDining from '../../assets/View_B_1.jpg.jpeg';
import imgExterior from '../../assets/Front Long.jpg.jpeg';
import ctaBg from '../../assets/bird_beach.jpeg';
import imgSuite from '../../assets/interior1.png';
import imgSpa from '../../assets/interior2.png';
import imgReception from '../../assets/interior3.jfif';
import imgFineDining from '../../assets/interior4.jfif';
import imgNightAerial from '../../assets/Night_A_1.jpg.jpeg';

const PROJECT_BADGES = [
  { icon: MapPin, label: 'Prime Location', value: "Cox's Bazar" },
  { icon: Hotel, label: 'Project Type', value: '5-Star Resort' },
  { icon: Building2, label: 'Brand', value: 'The Nature' },
  { icon: CheckCircle, label: 'Status', value: 'Planning & Offer Stage' },
];

const OVERVIEW_LEFT = [
  { icon: MapPin, label: 'Location', value: "Cox's Bazar" },
  { icon: Hotel, label: 'Project Type', value: 'Hotel & Resort' },
  { icon: Sparkles, label: 'Total Concept', value: '5-Star Standard' },
  { icon: Building2, label: 'Initiative By', value: 'The Premium Homes Ltd.' },
  { icon: LayoutGrid, label: 'Ownership Model', value: 'Land Share Ownership' },
  { icon: Target, label: 'Focus', value: 'Hospitality Operation & Long-Term Value' },
];

const OVERVIEW_RIGHT = [
  { icon: Waves, title: 'Longest Natural Sea Beach In The World' },
  { icon: CalendarDays, title: 'Year-Round Tourist Demand' },
  { icon: TrendingUp, title: 'High Hospitality Investment Potential' },
  { icon: Users, title: 'Ideal for Family Vacation, Corporate Retreat & Events' },
  { icon: Construction, title: 'Rapid Infrastructure Development' },
  { icon: BadgeDollarSign, title: 'Long-Term Asset Value Opportunity' },
];

const HIGHLIGHTS = [
  { icon: BedDouble, title: 'Premium Rooms & Suites' },
  { icon: Waves, title: 'Rooftop Infinity Pool' },
  { icon: Hotel, title: 'Fine Dining Restaurant' },
  { icon: Coffee, title: 'Café & Lounge' },
  { icon: Baby, title: 'Family & Kids Facilities' },
  { icon: MonitorPlay, title: 'Corporate & Event Spaces' },
  { icon: Sparkles, title: 'Spa, Wellness & Recreation' },
  { icon: ShieldCheck, title: '24/7 Guest Service & Security' },
];

const GLIMPSE = [
  { img: imgRooftop, title: 'Rooftop Infinity Pool' },

  { img: imgExterior, title: 'Exterior View' },
  { img: heroBg, title: "Bird's Eye View" },
  { img: ctaBg, title: 'Beachfront Coastal View' },
  { img: imgSuite, title: 'Grand Lobby Reception' },
  { img: imgSpa, title: 'Premium Dining Experience' },
  { img: imgFineDining, title: 'Spa & Wellness Lounge' },
  { img: imgReception, title: 'Luxury Suite Interior' },
  { img: imgNightAerial, title: 'Night Aerial View' },
];

const JOURNEY = [
  { step: 1, title: 'Land Selection & Feasibility Review' },
  { step: 2, title: 'Project Planning & Concept Development' },
  { step: 3, title: 'Land Share Offer to Selected Clients' },
  { step: 4, title: 'Booking, Payment & Documentation' },
  { step: 5, title: 'Registration, Mutation & Legal Confirmation' },
  { step: 6, title: 'Design, Approval & Development Planning' },
  { step: 7, title: 'Construction & Project Implementation' },
  { step: 8, title: 'Hotel/Resort Setup & Preparation' },
  { step: 9, title: 'Professional Operation under The Nature Brand' },
  { step: 10, title: 'Revenue Reporting, Owner Benefit & Asset Management' },
];

const Project = () => {
  const containerRef = useRef(null);

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

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="project-page" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="proj-hero">
        <div className="proj-hero__bg">
          <img src={heroBg} alt="The Nature at Cox's Bazar" className="proj-hero__bg-img" />
        </div>
        <div className="proj-hero__overlay"></div>
        <div className="proj-hero__content animate-on-scroll">
          <div className="section-label section-label--light">OUR FLAGSHIP PROJECT</div>
          <h1 className="proj-hero__title">
            The Nature<br />at <span className="proj-hero__title-highlight">Cox's Bazar</span>
          </h1>
          <p className="proj-hero__subtitle">
            A Future 5-Star Resort Destination<br />by The Premium Homes Ltd.
          </p>
          <p className="proj-hero__desc">
            A premium hospitality project where natural beauty, modern comfort, 
            professional service, and long-term value come together under The Nature brand.
          </p>
          <div className="proj-hero__badges">
            {PROJECT_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="proj-hero__badge">
                  <div className="proj-hero__badge-icon"><Icon size={20} strokeWidth={1.5} /></div>
                  <div>
                    <div className="proj-hero__badge-label">{badge.label}</div>
                    <div className="proj-hero__badge-value">{badge.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Overview & Why Cox's Bazar */}
      <section className="proj-overview">
        <div className="container">
          <div className="proj-overview__grid">
            {/* Left */}
            <div className="proj-overview__left animate-on-scroll">
              <div className="proj-overview__leaf"></div>
              <div className="section-label">PROJECT OVERVIEW</div>
              <h2 className="section-title">
                A World-Class Resort Destination in the Heart of Bangladesh's Tourism Hub
              </h2>
              <p className="proj-overview__text">
                The Nature at Cox's Bazar is being planned to offer an international 
                standard 5-star resort experience for families, tourists, corporate 
                guests, and leisure travelers from home and abroad.
              </p>
              <div className="proj-overview__stats">
                {OVERVIEW_LEFT.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="proj-overview__stat-card">
                      <div className="proj-overview__stat-icon">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="proj-overview__stat-label">{item.label}</div>
                        <div className="proj-overview__stat-value">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right */}
            <div className="proj-overview__right animate-on-scroll">
              <div className="section-label">WHY COX'S BAZAR?</div>
              <h2 className="section-title">
                The Strongest Tourism & Hospitality Destination in Bangladesh
              </h2>
              <div className="proj-why__grid">
                {OVERVIEW_RIGHT.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="proj-why__item">
                      <div className="proj-why__icon">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="proj-why__title">{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights */}
      <section className="proj-highlights">
        <div className="container">
          <div className="proj-highlights__header animate-on-scroll">
            <div className="section-label">RESORT EXPERIENCE HIGHLIGHTS</div>
            <h2 className="section-title">Designed for Comfort. Built for Experience.</h2>
          </div>
          <div className="proj-highlights__grid animate-on-scroll">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="proj-highlights__item">
                  <div className="proj-highlights__icon">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="proj-highlights__title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Glimpse */}
      <section className="proj-glimpse">
        <div className="container">
          <div className="proj-glimpse__header animate-on-scroll">
            <div className="section-label">A GLIMPSE OF THE FUTURE EXPERIENCE</div>
          </div>
          <div className="proj-glimpse__grid animate-on-scroll">
            {GLIMPSE.map((item, idx) => (
              <div key={idx} className="proj-glimpse__card">
                <div className="proj-glimpse__img-wrap">
                  <img src={item.img} alt={item.title} className="proj-glimpse__img" loading="lazy" />
                </div>
                <div className="proj-glimpse__title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline Journey */}
      <section className="proj-journey">
        <div className="container">
          <div className="proj-journey__header animate-on-scroll">
            <div className="section-label">DEVELOPMENT JOURNEY</div>
            <h2 className="section-title">From Concept to World-Class Resort</h2>
          </div>
          <div className="proj-journey__timeline animate-on-scroll">
            <div className="proj-journey__line"></div>
            {JOURNEY.map((item, idx) => (
              <div key={idx} className="proj-journey__step">
                <div className="proj-journey__number">{item.step}</div>
                <div className="proj-journey__text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="proj-cta">
        <div className="proj-cta__bg">
          <img src={ctaBg} alt="Beach background" className="proj-cta__img" loading="lazy" />
        </div>
        <div className="proj-cta__overlay"></div>
        <div className="proj-cta__container animate-on-scroll">
          <div className="proj-cta__content">
            <div className="section-label section-label--light">START YOUR OWNERSHIP JOURNEY</div>
            <h2 className="proj-cta__title">
              Be a Part of a Future 5-Star Resort Destination at Cox's Bazar
            </h2>
          </div>
          <div className="proj-cta__actions">
            <Link to="/contact" className="btn--gold">Book a Private Consultation</Link>
            <Link to="/contact" className="btn--outline-white">Request Project Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
