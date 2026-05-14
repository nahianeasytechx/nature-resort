import { useEffect, useRef } from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';
import './AboutPage.css';
import heroBg from '../../assets/Front Long.jpg.jpeg';

const VALUES = [
  { icon: Target, title: 'Our Mission', desc: 'To create a premier hospitality destination in Bangladesh offering seamless land share ownership and world-class resort experiences.' },
  { icon: Compass, title: 'Our Vision', desc: 'To redefine the standards of luxury, transparency, and sustainable resort development in the heart of Cox\'s Bazar.' },
  { icon: Award, title: 'Excellence', desc: 'Committed to delivering 5-star service, exceptional architectural design, and unparalleled guest satisfaction.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Operating with absolute transparency, legal clarity, and responsibility towards our co-owners and partners.' }
];

const AboutPage = () => {
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
    <main className="about-page" ref={containerRef}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src={heroBg} alt="The Nature Resort" className="about-hero__bg-img" />
        </div>
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content animate-on-scroll">
          <div className="section-label section-label--light">ABOUT US</div>
          <h1 className="about-hero__title">
            Redefining Luxury &<br />
            <span className="text-gold">Transparent Ownership</span>
          </h1>
          <p className="about-hero__desc">
            Discover the vision and the team behind Bangladesh's most<br />
            promising 5-star resort destination.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid animate-on-scroll">
            <div className="about-story__left">
              <div className="section-label">OUR STORY</div>
              <h2 className="section-title text-left">
                The Premium Homes Ltd. & The Nature
              </h2>
              <p className="about-story__text">
                <strong>The Premium Homes Ltd.</strong> is a visionary real estate and hospitality development company dedicated to creating iconic properties that stand the test of time. With a focus on quality, innovation, and trust, we are proud to introduce our flagship project: <strong>The Nature at Cox's Bazar</strong>.
              </p>
              <p className="about-story__text">
                The Nature is born out of a desire to blend the breathtaking natural beauty of the world's longest sea beach with the sophistication of international 5-star hospitality. Our innovative Land Share Ownership model is designed to invite like-minded individuals to not just experience luxury, but to own a piece of it.
              </p>
              <p className="about-story__text">
                We believe in a future where investment brings both financial reward and lifestyle enhancement, all built on a foundation of absolute legal transparency and professional management.
              </p>
            </div>
            <div className="about-story__right">
              <div className="about-story__card">
                {/* <img src={logoImg} alt="The Nature Logo" className="mb-4" style={{ height: '60px', width: 'auto', margin: '0 auto', display: 'block' }} /> */}
                <h3>A Commitment to Excellence</h3>
                <p>From the initial land selection to the final operational details, every step is meticulously planned to ensure The Nature becomes a landmark destination in Cox's Bazar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="about-values">
        <div className="container">
          <div className="animate-on-scroll">
            <div className="section-label">OUR CORE VALUES</div>
            <h2 className="section-title">What Drives Us Forward</h2>
            <div className="about-values__grid">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="about-values__item">
                    <div className="about-values__icon">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h4 className="about-values__title">{val.title}</h4>
                    <p className="about-values__desc">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
