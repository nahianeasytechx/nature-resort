import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';
import heroBg from '../../assets/Night_1.jpg.jpeg';

const FAQS = [
  {
    category: 'Ownership & Legal',
    questions: [
      {
        q: 'What exactly is Land Share Ownership?',
        a: 'Land Share Ownership means you legally own a proportionate share of the resort\'s land. Your name will be registered in the official government records (Mutation), ensuring absolute legal security of your asset.'
      },
      {
        q: 'Can I sell or transfer my land share in the future?',
        a: 'Yes, as the legal owner of the land share, you have the right to transfer, sell, or pass it on to your heirs, subject to the exit policy outlined in the final agreement.'
      },
      {
        q: 'Are there any hidden legal fees?',
        a: 'No. We maintain a transparent cost structure. All costs related to registration, mutation, and documentation are clearly communicated upfront before any agreement is signed.'
      }
    ]
  },
  {
    category: 'Financial & Benefits',
    questions: [
      {
        q: 'How does the revenue sharing model work?',
        a: 'Once the resort is operational, net distributable benefits (revenue minus operational costs and reserve funds) are proportionately distributed among the land share owners based on the finalized benefit agreement.'
      },
      {
        q: 'Are the returns guaranteed?',
        a: 'No. Since this is a hospitality business, returns are based on operational performance, occupancy rates, and market conditions. However, the long-term capital appreciation of the land share provides significant underlying value.'
      },
      {
        q: 'Do I get to stay at the resort for free?',
        a: 'Yes, depending on the chosen benefit model, owners generally receive complimentary yearly stay privileges or heavily discounted usage rights at The Nature, subject to availability.'
      }
    ]
  },
  {
    category: 'Project & Operation',
    questions: [
      {
        q: 'Who will manage the resort once built?',
        a: 'The resort will be professionally managed by an experienced hospitality operation team under \'The Nature\' brand to ensure 5-star service standards.'
      },
      {
        q: 'When will the project be completed?',
        a: 'The exact development timeline will be detailed in the project offer note. We are committed to steady, responsible development with regular progress updates to all owners.'
      }
    ]
  }
];

const FAQ = () => {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState('0-0');

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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page" ref={containerRef}>
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero__bg">
          <img src={heroBg} alt="The Nature Resort Rooftop" className="faq-hero__bg-img" />
        </div>
        <div className="faq-hero__overlay"></div>
        <div className="faq-hero__content animate-on-scroll">
          <div className="section-label section-label--light">KNOWLEDGE BASE</div>
          <h1 className="faq-hero__title">
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p className="faq-hero__desc">
            Find answers to common questions about our ownership model, financial structure, and project timeline.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-wrapper animate-on-scroll">
            {FAQS.map((category, catIdx) => (
              <div key={catIdx} className="faq-category">
                <h2 className="faq-category__title text-gold">{category.category}</h2>
                <div className="faq-accordion">
                  {category.questions.map((item, qIdx) => {
                    const idx = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === idx;
                    return (
                      <div 
                        key={qIdx} 
                        className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                      >
                        <button 
                          className="faq-item__trigger"
                          onClick={() => toggleAccordion(idx)}
                        >
                          <span className="faq-item__question">{item.q}</span>
                          <ChevronDown 
                            className={`faq-item__icon ${isOpen ? 'rotate' : ''}`} 
                            size={20} 
                          />
                        </button>
                        <div 
                          className="faq-item__content-wrapper"
                          style={{ maxHeight: isOpen ? '200px' : '0' }}
                        >
                          <div className="faq-item__answer">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
