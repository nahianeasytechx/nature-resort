import { useEffect, useRef } from 'react';
import './Gallery.css';

// Import images
import img1 from '../../assets/Birds eye view.jpg.jpeg';
import img2 from '../../assets/bird_beach.jpeg';
import img3 from '../../assets/Front Long.jpg.jpeg';
import img4 from '../../assets/interior1.png';
import img5 from '../../assets/interior2.png';
import img6 from '../../assets/interior3.jfif';
import img7 from '../../assets/interior4.jfif';
import img8 from '../../assets/Night_1.jpg.jpeg';
import img9 from '../../assets/Night_A_1.jpg.jpeg';
import img10 from '../../assets/View_B_1.jpg.jpeg';
import img11 from '../../assets/View_D_1.jpg.jpeg';
import img12 from '../../assets/VIew_G.jpg.jpeg';

const GALLERY_IMAGES = [
  { id: 1, src: img1, alt: "Bird's Eye View of The Nature Resort" },
  { id: 2, src: img2, alt: "Beachfront view" },
  { id: 3, src: img3, alt: "Front Long View" },
  { id: 4, src: img4, alt: "Interior Room View 1" },
  { id: 5, src: img5, alt: "Interior Room View 2" },
  { id: 6, src: img6, alt: "Interior Lobby View" },
  { id: 7, src: img7, alt: "Interior Dining View" },
  { id: 8, src: img8, alt: "Night View of the Resort" },
  { id: 9, src: img9, alt: "Illuminated Night View" },
  { id: 10, src: img10, alt: "Balcony View B" },
  { id: 11, src: img11, alt: "Exterior View D" },
  { id: 12, src: img12, alt: "Exterior View G" }
];

const Gallery = () => {
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
    <main className="gallery-page" ref={containerRef}>
      <section className="gallery-hero">
        <div className="gallery-hero__bg">
          <img src={img1} alt="Hero Background" className="gallery-hero__bg-img" />
        </div>
        <div className="gallery-hero__overlay"></div>
        <div className="gallery-hero__content animate-on-scroll">
          <div className="section-label section-label--light">GALLERY</div>
          <h1 className="gallery-hero__title">
            Visualise <span className="text-gold">The Luxury</span>
          </h1>
          <p className="gallery-hero__desc">
            Explore the architectural brilliance, serene surroundings, and 5-star interiors of The Nature at Cox's Bazar.
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, index) => (
              <div 
                key={img.id} 
                className="gallery-item animate-on-scroll"
                style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item__overlay">
                  <span>View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
