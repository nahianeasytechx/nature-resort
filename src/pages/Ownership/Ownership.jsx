import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Briefcase, Search, TrendingUp, Shield, ChevronRight,
  MessageSquare, FileSearch, MapPin, CreditCard, PenTool, Stamp,
  HardHat, Settings, Star, BarChart3, CheckCircle2, Info, CalendarDays,
  Building2, BadgeDollarSign, HeartHandshake, Eye
} from 'lucide-react';
import './Ownership.css';

// Assets
import heroBg from '../../assets/Birds eye view.jpg.jpeg';
import ctaBg from '../../assets/bird_beach.jpeg';
import poolImg from '../../assets/Night_1.jpg.jpeg';

const HERO_BADGES = [
  { icon: Building2, label: 'Structured\nOwnership' },
  { icon: Briefcase, label: 'Professional\nManagement' },
  { icon: Search, label: 'Transparent\nProcess' },
  { icon: TrendingUp, label: 'Long-Term\nValue Creation' },
];

const STAGE_1_POINTS = [
  'Land selection & ownership',
  'Registration & legal process',
  'Planning & development',
  'Construction & project setup'
];

const STAGE_2_POINTS = [
  'Professional hospitality operation',
  'Guest service & facility management',
  'Revenue generation',
  'Owner benefit distribution & reporting'
];

const PROCESS_STEPS = [
  { icon: MessageSquare, title: 'Consultation', desc: 'Understand the model, project, and opportunities' },
  { icon: FileSearch, title: 'Offer Understanding', desc: 'Review project concept, location, and offer details' },
  { icon: MapPin, title: 'Land Share Selection', desc: 'Choose your preferred land share' },
  { icon: CreditCard, title: 'Booking & Payment', desc: 'Complete booking and follow the payment schedule' },
  { icon: PenTool, title: 'Documentation & Agreement', desc: 'Sign ownership agreement and related documents' },
  { icon: Stamp, title: 'Registration & Mutation', desc: 'Land registration, mutation & legal ownership confirmation' },
  { icon: HardHat, title: 'Development & Construction', desc: 'Design, approval, construction & project implementation' },
  { icon: Settings, title: 'Resort Setup & Preparation', desc: 'Resort setup, staffing & soft opening' },
  { icon: Star, title: 'Professional Operation', desc: 'Full operation under The Nature brand' },
  { icon: BarChart3, title: 'Reporting & Owner Benefits', desc: 'Revenue reporting & owner benefit distribution' },
];

const WHO_IS_IT_FOR = [
  'Premium clients looking for long-term asset value',
  'Land investors seeking structured ownership',
  'People who want future hospitality benefits',
  'Families who value usage & experience',
  'Buyers who prefer transparent, legal, and brand-backed projects'
];

const KEY_HIGHLIGHTS = [
  { icon: FileText, title: 'Legally Documented\nOwnership' },
  { icon: Briefcase, title: 'Professional\nResort Operation' },
  { icon: BadgeDollarSign, title: 'Potential\nRevenue Participation' },
  { icon: TrendingUp, title: 'Long-Term Asset\nAppreciation Opportunity' },
  { icon: HeartHandshake, title: 'Usage Benefits\n& Privileges*' },
  { icon: Eye, title: 'Transparent\nReporting & Communication' },
];

const IMPORTANT_NOTE_LIST = [
  'Final agreement',
  'Legal verification',
  'Approved financial structure',
  'Operational performance',
  'Taxes, charges & maintenance cost',
  'Market conditions & occupancy'
];

const Ownership = () => {
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
    <main className="ownership-page" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="own-hero">
        <div className="own-hero__bg">
          <img src={heroBg} alt="The Nature Resort Aerial" className="own-hero__bg-img" />
        </div>
        <div className="own-hero__overlay"></div>
        <div className="own-hero__content animate-on-scroll">
          <div className="section-label section-label--light">OWNERSHIP MODEL</div>
          <h1 className="own-hero__title">
            From Land Share<br />
            <span className="own-hero__title-highlight">Ownership</span> to<br />
            Professionally Managed<br />
            Hospitality Operation
          </h1>
          <p className="own-hero__desc">
            A transparent, structured, and secure ownership model<br />
            by The Nature, an initiative of The Premium Homes Ltd.
          </p>
          <div className="own-hero__badges">
            {HERO_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="own-hero__badge">
                  <div className="own-hero__badge-icon"><Icon size={24} strokeWidth={1.5} /></div>
                  <div className="own-hero__badge-label">{badge.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. What is Land Share & Two Stage Model */}
      <section className="own-model">
        <div className="container">
          <div className="own-model__grid">
            {/* Left */}
            <div className="own-model__left animate-on-scroll">
              <div className="section-label">WHAT IS LAND SHARE OWNERSHIP?</div>
              <p className="own-model__text">
                Land Share Ownership is a participation model where selected clients own a share of land within a hotel or resort project.
              </p>
              <p className="own-model__text">
                The first phase focuses on land ownership and project development. The second phase focuses on professional hospitality operation under The Nature brand.
              </p>
              <div className="own-model__shield-box">
                <div className="own-model__shield-icon"><Shield size={32} strokeWidth={1.5} /></div>
                <p className="own-model__shield-text">
                  You own the land share.<br />
                  We develop, operate, and manage<br />
                  the resort professionally.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="own-model__right animate-on-scroll">
              <div className="section-label">THE TWO-STAGE MODEL</div>
              <div className="own-model__stages">
                {/* Stage 1 */}
                <div className="own-model__stage own-model__stage--dark">
                  <div className="own-model__stage-icon"><Building2 size={32} strokeWidth={1.5} /></div>
                  <div className="own-model__stage-label">STAGE 1</div>
                  <h3 className="own-model__stage-title">Land Share Ownership<br />& Development</h3>
                  <ul className="own-model__stage-list">
                    {STAGE_1_POINTS.map((point, idx) => (
                      <li key={idx}><CheckCircle2 size={16} className="text-gold" /> {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="own-model__stage-arrow">
                  <ChevronRight size={24} strokeWidth={2} />
                </div>

                {/* Stage 2 */}
                <div className="own-model__stage own-model__stage--light">
                  <div className="own-model__stage-icon"><Star size={32} strokeWidth={1.5} /></div>
                  <div className="own-model__stage-label">STAGE 2</div>
                  <h3 className="own-model__stage-title">Hotel/Resort Operation<br />Under The Nature Brand</h3>
                  <ul className="own-model__stage-list">
                    {STAGE_2_POINTS.map((point, idx) => (
                      <li key={idx}><CheckCircle2 size={16} className="text-gold" /> {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Process */}
      <section className="own-process">
        <div className="container">
          <div className="own-process__header animate-on-scroll">
            <div className="section-label">STEP-BY-STEP OWNERSHIP PROCESS</div>
            <h2 className="section-title">Your Journey from Ownership to Operation</h2>
          </div>
          
          <div className="own-process__timeline animate-on-scroll">
            <div className="own-process__line"></div>
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="own-process__step">
                  <div className="own-process__number">{idx + 1}</div>
                  <div className="own-process__step-icon"><Icon size={28} strokeWidth={1.5} /></div>
                  <h4 className="own-process__step-title">{step.title}</h4>
                  <p className="own-process__step-desc">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="own-process__bottom grid-2 animate-on-scroll">
            {/* Who is this for */}
            <div className="own-process__who">
              <div className="section-label">WHO IS THIS MODEL FOR?</div>
              <ul className="own-process__who-list">
                {WHO_IS_IT_FOR.map((item, idx) => (
                  <li key={idx}><CheckCircle2 size={18} className="text-navy" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div className="own-process__highlights">
              <div className="section-label">KEY MODEL HIGHLIGHTS</div>
              <div className="own-process__highlights-grid">
                {KEY_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="own-process__highlight-card">
                      <div className="own-process__highlight-icon"><Icon size={28} strokeWidth={1.5} /></div>
                      <div className="own-process__highlight-title" dangerouslySetInnerHTML={{ __html: item.title.replace('\n', '<br />') }}></div>
                    </div>
                  );
                })}
              </div>
              <div className="own-process__disclaimer">
                *Usage benefits are subject to final agreement and availability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Important Note */}
      <section className="own-note">
        <div className="container">
          <div className="own-note__grid animate-on-scroll">
            <div className="own-note__img-wrap">
              <img src={poolImg} alt="Resort Pool" className="own-note__img" loading="lazy" />
            </div>
            <div className="own-note__content">
              <div className="section-label">IMPORTANT NOTE</div>
              <p className="own-note__text">
                This model is designed for long-term value creation through land ownership, 
                project development, and professional hospitality operation.
              </p>
              <p className="own-note__text own-note__text--strong">
                All benefits, returns, and usage privileges are subject to:
              </p>
              <ul className="own-note__list">
                {IMPORTANT_NOTE_LIST.map((item, idx) => (
                  <li key={idx}><CheckCircle2 size={16} className="text-navy" /> {item}</li>
                ))}
              </ul>
              <div className="own-note__info-box">
                <Info size={24} strokeWidth={1.5} className="own-note__info-icon" />
                <p>
                  <strong>Projected benefit, not guaranteed return.</strong><br />
                  Subject to final legal, financial, and operational structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="proj-cta">
        <div className="proj-cta__bg">
          <img src={ctaBg} alt="Beach background" className="proj-cta__img" loading="lazy" />
        </div>
        <div className="proj-cta__overlay"></div>
        <div className="proj-cta__container animate-on-scroll">
          <div className="proj-cta__content">
            <div className="section-label section-label--light">READY TO START YOUR OWNERSHIP JOURNEY?</div>
            <h2 className="proj-cta__title">
              Be a Part of a Future 5-Star Resort Destination at Cox's Bazar
            </h2>
          </div>
          <div className="proj-cta__actions">
            <Link to="/contact" className="btn--gold">
              <CalendarDays size={18} /> Book a Private Consultation
            </Link>
            <Link to="/contact" className="btn--outline-white">
              <FileText size={18} /> Request Project Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ownership;
