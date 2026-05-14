import { useEffect, useRef } from 'react';
import {
  Heart, ShieldCheck, Award,
  FileText, TrendingUp, Leaf
} from 'lucide-react';
import './About.css';

const FEATURES = [
  {
    icon: Heart,
    title: 'Comfort & Care',
    desc: 'Guest-first hospitality experience',
  },
  {
    icon: ShieldCheck,
    title: 'Clean & Secure',
    desc: 'Safe, clean and family-friendly environment',
  },
  {
    icon: Award,
    title: 'Professional Service',
    desc: 'Trained team and premium service standard',
  },
  {
    icon: FileText,
    title: 'Transparency',
    desc: 'Clear documentation and reporting',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    desc: 'Asset growth with potential revenue participation',
  },
  {
    icon: Leaf,
    title: 'Nature Connection',
    desc: 'Stay close to nature. Experience comfort.',
  },
];

const About = () => {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about-section" ref={sectionRef}>
      <div className="about__container">
        {/* Left Content */}
        <div className="about__left animate-on-scroll">
          <div className="about__leaf-decor"></div>
          <div className="about__content">
            <div className="section-label">THE NATURE</div>
            <h2 className="about__title">
              A Hospitality Brand Inspired by Nature, Built on Trust
            </h2>
            <p className="about__text">
              The Nature is a hospitality concern of The Premium Homes Ltd., created
              to develop hotels, resorts, retreats, and nature-connected destinations
              in prime tourism and lifestyle locations.
            </p>
          </div>
        </div>

        {/* Right Features Grid */}
        <div className="about__right animate-on-scroll">
          <div className="about__features-grid">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div className="about__feature-card" key={index}>
                  <div className="about__feature-icon-wrap">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="about__feature-title">{feature.title}</h3>
                  <p className="about__feature-desc">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
