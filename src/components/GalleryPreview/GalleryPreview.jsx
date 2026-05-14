import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GalleryPreview.css';

import img1 from '../../assets/bird_beach.jpeg';
import img2 from '../../assets/Night_1.jpg.jpeg';
import img3 from '../../assets/Night_A_1.jpg.jpeg';
import img4 from '../../assets/View_B_1.jpg.jpeg';
import img5 from '../../assets/View_D_1.jpg.jpeg';

const GALLERY_ITEMS = [
  { img: img1, title: 'Aerial Oceanfront', sub: 'Bird\'s Eye View' },
  { img: img2, title: 'Night Reflections', sub: 'Beachside View' },
  { img: img3, title: 'Golden Glow', sub: 'Evening Ambiance' },
  { img: img4, title: 'Tropical Setting', sub: 'Garden View' },
  { img: img5, title: 'Urban Elegance', sub: 'Street Perspective' },
];

const GalleryPreview = () => {
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
    <section className="gallery-preview" id="gallery-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="gallery-preview__header animate-on-scroll">
          <div className="section-label">Gallery</div>
          <h2 className="section-title section-title--light">
            Captivating Views
          </h2>
          <p className="section-description">
            Explore the stunning perspectives of The Nature — from breathtaking aerial
            panoramas to enchanting night vistas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-preview__grid animate-on-scroll">
          {GALLERY_ITEMS.map((item, index) => (
            <div className="gallery-preview__item" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="gallery-preview__img"
                loading="lazy"
              />
              <div className="gallery-preview__item-overlay">
                <div className="gallery-preview__item-title">{item.title}</div>
                <div className="gallery-preview__item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-preview__cta animate-on-scroll">
          <Link to="/gallery" className="gallery-preview__link" id="gallery-view-all">
            View Full Gallery
            <span className="gallery-preview__link-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
