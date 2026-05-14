import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';
import heroBg from '../../assets/View_G.jpg.jpeg';

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="contact-page" ref={containerRef}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src={heroBg} alt="The Nature Resort Entrance" className="contact-hero__bg-img" />
        </div>
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content animate-on-scroll">
          <div className="section-label section-label--light">GET IN TOUCH</div>
          <h1 className="contact-hero__title">
            Start Your <span className="text-gold">Journey</span>
          </h1>
          <p className="contact-hero__desc">
            Whether you're looking for an exclusive land share or want to learn more about the project, our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid animate-on-scroll">
            
            {/* Left: Contact Info */}
            <div className="contact-info">
              <h2 className="contact-section-title text-gold">Contact Information</h2>
              <p className="contact-info__desc">
                Reach out to us to schedule a private consultation or request a detailed project brief.
              </p>

              <div className="contact-info__list">
                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Corporate Office</h4>
                    <p>Land View Commercial Center, 9th Floor<br/>28 Gulshan North C/A, Gulshan Circle-2, Dhaka</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={24} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+8801958253300</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@dpremiumhomes.com</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon"><Clock size={24} /></div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Sunday - Thursday: 10:00 AM - 6:00 PM<br/>Friday & Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-section-title text-gold">Send us a Message</h2>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+880..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="I would like to request the project brief..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn--gold contact-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully. Our team will contact you shortly.
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
