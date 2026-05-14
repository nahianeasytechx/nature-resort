import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, ShieldCheck, PieChart, Briefcase, TrendingUp, HandCoins,
  Receipt, Wallet, Landmark, LineChart, FileSearch,
  AlertTriangle, Users, Building, ShieldAlert, FileSignature, BookOpen,
  ArrowRight, ArrowLeft, Info, CalendarDays
} from 'lucide-react';
import './Financial.css';

// Assets
import heroBg from '../../assets/Night_1.jpg.jpeg';
import ctaBg from '../../assets/bird_beach.jpeg';

const HERO_BADGES = [
  { icon: ShieldCheck, label: 'Transparent\nStructure' },
  { icon: Briefcase, label: 'Professional\nManagement' },
  { icon: TrendingUp, label: 'Potential\nBenefits' },
  { icon: Landmark, label: 'Long-Term\nValue Creation' }
];

const BENEFIT_MODELS = [
  { icon: PieChart, title: 'Revenue Sharing Model', desc: 'Owners may receive proportionate benefits from net operational income.' },
  { icon: HandCoins, title: 'Fixed Benefit Model', desc: 'Owners may receive a defined benefit, subject to agreement.' },
  { icon: ArrowRight, title: 'Hybrid Model', desc: 'Combination of fixed benefit and revenue participation.' },
  { icon: Building, title: 'Usage Benefit Model', desc: 'Owners may receive yearly stay privileges or discounted use.' },
  { icon: TrendingUp, title: 'Capital Appreciation Model', desc: 'Owners may benefit from future increase in asset value.' }
];

const COST_STRUCTURE = [
  { icon: Wallet, title: 'Booking Amount', desc: 'Initial booking amount to confirm land share.' },
  { icon: Landmark, title: 'Land Share Price', desc: 'Price for the selected land share.' },
  { icon: Building, title: 'Development Fee', desc: 'Cost of planning, design, approval & development.' },
  { icon: Briefcase, title: 'Management Fee', desc: 'Professional hospitality management charge.' },
  { icon: ShieldCheck, title: 'Maintenance Reserve', desc: 'Reserve fund for future maintenance & repair.' },
  { icon: FileSignature, title: 'Legal & Documentation', desc: 'Registration, mutation, legal & documentation cost.' },
  { icon: Receipt, title: 'Tax, VAT & Other Cost', desc: 'Applicable taxes, VAT & government fees.' },
  { icon: CalendarDays, title: 'Payment Schedule', desc: 'Easy installment-based payment plan.' }
];

const REPORTING_ITEMS = [
  { icon: FileText, title: 'Financial Statements', desc: 'Periodic income & expense statements.' },
  { icon: LineChart, title: 'Revenue Overview', desc: 'Booking, occupancy & revenue summary.' },
  { icon: BookOpen, title: 'Maintenance Report', desc: 'Maintenance cost and reserve utilization report.' },
  { icon: HandCoins, title: 'Owner Benefit Statement', desc: 'Net distributable benefit details.' },
  { icon: TrendingUp, title: 'Annual Performance Review', desc: 'Operational performance review.' },
  { icon: FileSearch, title: 'Audit & Verification', desc: 'Internal audit and external verification (if required).' }
];

const DISCLAIMERS = [
  { icon: FileSignature, title: 'Subject to Final Agreement', desc: 'All terms, conditions, benefits, and ownership structure are subject to final legal agreement.' },
  { icon: LineChart, title: 'Subject to Operational Performance', desc: 'Benefits depend on occupancy, revenue, operating cost, and performance.' },
  { icon: AlertTriangle, title: 'Not a Guaranteed Return', desc: 'This is a projected benefit model, not a guaranteed return or fixed income.' },
  { icon: ShieldAlert, title: 'Market & Regulatory Factors', desc: 'Market demand, competition, regulation, and government policies may affect results.' },
  { icon: CalendarDays, title: 'Time & Development Risk', desc: 'Project timeline, development cost, and approvals may change over time.' }
];

const Financial = () => {
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
    <main className="fin-page" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="fin-hero">
        <div className="fin-hero__bg">
          <img src={heroBg} alt="The Nature Resort Pool" className="fin-hero__bg-img" />
        </div>
        <div className="fin-hero__overlay"></div>
        <div className="fin-hero__content animate-on-scroll">
          <div className="section-label section-label--light">FINANCIAL & BENEFIT MODEL</div>
          <h1 className="fin-hero__title">
            A Structured Benefit Model<br />
            with <span className="text-gold">Transparent Reporting</span>
          </h1>
          <p className="fin-hero__desc">
            The Nature Ownership Model is designed to create long-term value<br />
            for owners through a transparent financial structure, responsible<br />
            management, and professional hospitality operation.
          </p>
          <div className="fin-hero__badges">
            {HERO_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="fin-hero__badge">
                  <div className="fin-hero__badge-icon"><Icon size={24} strokeWidth={1.5} /></div>
                  <div className="fin-hero__badge-label" dangerouslySetInnerHTML={{ __html: badge.label.replace('\n', '<br/>') }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Benefit Models & Revenue Flow (Split Grid) */}
      <section className="fin-section bg-off-white">
        <div className="container">
          <div className="fin-grid-2 animate-on-scroll">
            {/* Left: Possible Owner Benefit Models */}
            <div className="fin-benefits">
              <h2 className="fin-section-title text-gold">1. POSSIBLE OWNER BENEFIT MODELS</h2>
              <p className="fin-text">
                The final model will be confirmed through financial, legal,
                and operational review. However, the structure may include
                one or more of the following:
              </p>

              <div className="fin-table">
                <div className="fin-table__header">
                  <div className="fin-table__col-1">Model</div>
                  <div className="fin-table__col-2">Explanation</div>
                </div>
                {BENEFIT_MODELS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="fin-table__row">
                      <div className="fin-table__col-1 fin-table__model-name">
                        <Icon size={20} className="text-gold" strokeWidth={1.5} />
                        <span>{item.title}</span>
                      </div>
                      <div className="fin-table__col-2 fin-table__model-desc">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Revenue Flow Explanation */}
            <div className="fin-flow">
              <h2 className="fin-section-title text-gold">2. REVENUE FLOW EXPLANATION</h2>
              <p className="fin-text">
                All financial operations will be conducted transparently and
                reported to owners periodically.
              </p>

              <div className="fin-flow__diagram">
                {/* Row 1 */}
                <div className="fin-flow__row">
                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><Users size={24} /></div>
                    <span>Guest<br/>Booking</span>
                  </div>
                  <ArrowRight className="fin-flow__arrow text-gold" size={24} />
                  
                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><Receipt size={24} /></div>
                    <span>Resort<br/>Revenue</span>
                  </div>
                  <ArrowRight className="fin-flow__arrow text-gold" size={24} />

                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><FileText size={24} /></div>
                    <span>Operating<br/>Costs</span>
                  </div>
                  <ArrowRight className="fin-flow__arrow text-gold" size={24} />

                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><Briefcase size={24} /></div>
                    <span>Management<br/>Fee</span>
                  </div>
                </div>

                {/* Vertical connecting line on the right */}
                <div className="fin-flow__connector-right"></div>

                {/* Row 2 (Reverse Flow) */}
                <div className="fin-flow__row fin-flow__row--reverse">
                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><ShieldCheck size={24} /></div>
                    <span>Reserve<br/>Fund</span>
                  </div>
                  <ArrowLeft className="fin-flow__arrow text-gold" size={24} />

                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><LineChart size={24} /></div>
                    <span>Net Distributable<br/>Benefit</span>
                  </div>
                  <ArrowLeft className="fin-flow__arrow text-gold" size={24} />

                  <div className="fin-flow__node">
                    <div className="fin-flow__icon"><FileSearch size={24} /></div>
                    <span>Owner<br/>Reporting</span>
                  </div>
                </div>
              </div>

              <div className="fin-info-strip mt-2">
                <Info size={20} className="text-gold flex-shrink-0" />
                <span>
                  <strong>Important Note</strong><br/>
                  All benefits are subject to final agreement, legal verification, operational performance, taxes, maintenance cost, management fee, and reserve fund as per approved financial and legal structure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cost Structure & 4. Reporting (Split Grid) */}
      <section className="fin-section bg-white">
        <div className="container">
          <div className="fin-grid-2 animate-on-scroll">
            {/* Left: Cost & Payment Structure */}
            <div className="fin-costs">
              <h2 className="fin-section-title text-gold">3. COST & PAYMENT STRUCTURE (INDICATIVE)</h2>
              <p className="fin-text">Actual figures will be provided in the project offer note.</p>

              <div className="fin-table">
                <div className="fin-table__header">
                  <div className="fin-table__col-1">Cost Head</div>
                  <div className="fin-table__col-2">Description</div>
                </div>
                {COST_STRUCTURE.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="fin-table__row">
                      <div className="fin-table__col-1 fin-table__model-name">
                        <Icon size={18} className="text-gold" strokeWidth={1.5} />
                        <span>{item.title}</span>
                      </div>
                      <div className="fin-table__col-2 fin-table__model-desc">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="fin-info-strip mt-2">
                <ShieldCheck size={20} className="text-gold flex-shrink-0" />
                <span>All costs and payment structures are subject to change based on final approval, legal requirements, and project conditions.</span>
              </div>
            </div>

            {/* Right: Reporting & Accountability */}
            <div className="fin-reporting">
              <h2 className="fin-section-title text-gold">4. REPORTING & ACCOUNTABILITY</h2>
              <p className="fin-text">We believe regular reporting creates trust and long-term confidence.</p>

              <div className="fin-reporting__grid">
                {REPORTING_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="fin-reporting__card">
                      <div className="fin-reporting__icon"><Icon size={24} strokeWidth={1.5} /></div>
                      <h4 className="fin-reporting__title">{item.title}</h4>
                      <p className="fin-reporting__desc">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="fin-info-strip mt-2">
                <Info size={20} className="text-gold flex-shrink-0" />
                <span>All reports will be shared at mutually agreed intervals. Transparency is our commitment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Important Disclaimers */}
      <section className="fin-disclaimers bg-off-white">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="fin-section-title text-gold">5. IMPORTANT DISCLAIMERS</h2>
            
            <div className="fin-disclaimers__grid">
              {DISCLAIMERS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="fin-disclaimers__card">
                    <div className="fin-disclaimers__icon"><Icon size={28} strokeWidth={1.5} /></div>
                    <h4 className="fin-disclaimers__title">{item.title}</h4>
                    <p className="fin-disclaimers__desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="proj-cta">
        <div className="proj-cta__bg">
          <img src={ctaBg} alt="Beach background" className="proj-cta__img" loading="lazy" />
        </div>
        <div className="proj-cta__overlay"></div>
        <div className="proj-cta__container animate-on-scroll">
          <div className="proj-cta__content">
            <div className="section-label section-label--light">A SMART OWNERSHIP. A VALUABLE FUTURE.</div>
            <h2 className="proj-cta__title">
              Build Your Future with The Nature
            </h2>
            <p className="legal-hero__desc" style={{ marginTop: '1rem', marginBottom: '0', maxWidth: '500px' }}>
              Be a part of a professionally managed 5-star resort destination at Cox's Bazar.
            </p>
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

export default Financial;
