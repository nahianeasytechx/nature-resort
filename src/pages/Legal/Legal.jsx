import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, ShieldCheck, Scale, FileSignature, CheckSquare, 
  FolderOpen, Receipt, BookOpen, Stamp, Landmark,
  LineChart, FileSearch, MessageSquare, ClipboardCheck,
  AlertTriangle, Clock, CloudRain, Users, ShieldAlert,
  Building, Building2, Handshake, CircleDollarSign
} from 'lucide-react';
import './Legal.css';

import heroBg from '../../assets/Front Long.jpg.jpeg';
import ctaBg from '../../assets/bird_beach.jpeg';

const HERO_BADGES = [
  { icon: Scale, label: 'Clear Legal\nProcess' },
  { icon: FolderOpen, label: 'Proper\nDocumentation' },
  { icon: LineChart, label: 'Transparent\nReporting' },
  { icon: ShieldCheck, label: 'Responsible\nManagement' },
  { icon: Handshake, label: 'Your Trust\nOur Commitment' }
];

const LEGAL_PROCESS = [
  { step: 1, title: 'Booking\nAgreement' },
  { step: 2, title: 'Payment\nSchedule' },
  { step: 3, title: 'Ownership\nAgreement' },
  { step: 4, title: 'Land\nRegistration' },
  { step: 5, title: 'Mutation\nProcess' },
  { step: 6, title: 'Development\nAgreement' },
  { step: 7, title: 'Operation\nAgreement' },
  { step: 8, title: 'Transfer / Exit\nPolicy' }
];

const DOCUMENT_CHECKLIST = [
  { icon: FolderOpen, title: 'Project Offer Note', desc: 'Initial offer details, project information, and ownership structure overview.' },
  { icon: Landmark, title: 'Land Documents', desc: 'Verified land papers, ownership records, and legal documents of the project land.' },
  { icon: Handshake, title: 'Ownership Agreement', desc: 'Agreement outlining ownership rights, responsibilities, and benefit structure.' },
  { icon: Receipt, title: 'Payment Receipts', desc: 'All payments are documented with official receipts and vouchers.' },
  { icon: Stamp, title: 'Registration Paper', desc: 'Official registration documents confirming your legal ownership share.' },
  { icon: FileSignature, title: 'Mutation Record', desc: 'Mutation completed in the government record for ownership confirmation.' },
  { icon: Building2, title: 'Operation Agreement', desc: 'Agreement for resort operation under The Nature brand with service standards.' },
  { icon: FileText, title: 'Benefit Model Agreement', desc: 'Document confirming the owner benefit structure and reporting system.' }
];

const TRANSPARENCY_ITEMS = [
  { icon: FileSearch, title: 'Verified Accounts', desc: 'All financial transactions are verified and recorded properly.' },
  { icon: Receipt, title: 'Proper Vouchers', desc: 'Every payment and expense has proper vouchers.' },
  { icon: CheckSquare, title: 'Cross-Reference Records', desc: 'All records are cross-checked for accuracy.' },
  { icon: Scale, title: 'Legal Documentation', desc: 'All legal steps are completed with proper documents.' },
  { icon: MessageSquare, title: 'Client Communication', desc: 'Regular updates and clear communication with owners.' },
  { icon: LineChart, title: 'Periodic Reporting', desc: 'Financial, operational, and benefit reports shared periodically.' },
  { icon: ClipboardCheck, title: 'Internal Audit & Verification', desc: 'Internal audit and verification to ensure accuracy and accountability.' },
  { icon: BookOpen, title: 'Transparent Operational Statements', desc: 'Clear operational statements and performance updates.' }
];

const RISKS = [
  { icon: Clock, title: 'Approval Delay', desc: 'Government approvals or permits may take additional time.' },
  { icon: Building, title: 'Construction Delay', desc: 'Construction timeline may be affected due to various factors.' },
  { icon: LineChart, title: 'Market Demand', desc: 'Tourism demand and market condition may fluctuate.' },
  { icon: AlertTriangle, title: 'Operational Risk', desc: 'Occupancy rate and revenue may vary by season.' },
  { icon: CircleDollarSign, title: 'Cost Variation', desc: 'Material cost, maintenance cost, and other expenses may change.' },
  { icon: Scale, title: 'Regulatory Changes', desc: 'Tax, VAT, or regulatory changes may impact operations.' },
  { icon: CloudRain, title: 'Natural Factors', desc: 'Natural events may impact the project timeline.' },
  { icon: Users, title: 'Operational Dependency', desc: 'Dependence on professional management and brand operation.' }
];

const Legal = () => {
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
    <main className="legal-page" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero__bg">
          <img src={heroBg} alt="The Nature Resort" className="legal-hero__bg-img" />
        </div>
        <div className="legal-hero__overlay"></div>
        <div className="legal-hero__content animate-on-scroll">
          <div className="section-label section-label--light">LEGAL & TRANSPARENCY</div>
          <h1 className="legal-hero__title">
            Clear Documentation.<br />
            Transparent Process.<br />
            <span className="text-gold">Responsible Management.</span>
          </h1>
          <p className="legal-hero__desc">
            At The Nature, every step from land ownership to hospitality
            operation is built on trust, clarity, and accountability.
          </p>
          <div className="legal-hero__badges">
            {HERO_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="legal-hero__badge">
                  <div className="legal-hero__badge-icon"><Icon size={22} strokeWidth={1.5} /></div>
                  <div className="legal-hero__badge-label" dangerouslySetInnerHTML={{ __html: badge.label.replace('\n', '<br/>') }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Legal Process Overview */}
      <section className="legal-process">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="legal-section-title text-gold">1. LEGAL PROCESS OVERVIEW</h2>
            
            <div className="legal-timeline">
              <div className="legal-timeline__line"></div>
              {LEGAL_PROCESS.map((item, idx) => (
                <div key={idx} className="legal-timeline__step">
                  <div className="legal-timeline__number">{item.step}</div>
                  <div className="legal-timeline__title" dangerouslySetInnerHTML={{ __html: item.title.replace('\n', '<br/>') }}></div>
                </div>
              ))}
            </div>

            <p className="legal-process__note">
              Each step is completed with proper documentation, legal verification, and client communication<br />
              to ensure a safe and secure ownership journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Document Checklist */}
      <section className="legal-docs">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="legal-section-title text-gold">2. DOCUMENT CHECKLIST</h2>
            
            <div className="legal-docs__grid">
              {DOCUMENT_CHECKLIST.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div key={idx} className="legal-docs__card">
                    <div className="legal-docs__icon"><Icon size={28} strokeWidth={1.5} /></div>
                    <h3 className="legal-docs__title">{doc.title}</h3>
                    <p className="legal-docs__desc">{doc.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="legal-info-strip">
              <ShieldAlert size={20} className="text-gold flex-shrink-0" />
              <span>All documents are subject to final legal verification, government approval, and project development progress.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transparency Commitment */}
      <section className="legal-transparency">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="legal-section-title text-gold">3. TRANSPARENCY COMMITMENT</h2>
            
            <div className="legal-transparency__grid">
              {/* Left Box */}
              <div className="legal-transparency__left">
                <div className="legal-transparency__leaf"></div>
                <h3 className="legal-transparency__heading">
                  At The Premium Homes Ltd.,<br />
                  transparency means more than giving a<br />
                  summary statement.
                </h3>
                <p className="legal-transparency__text">
                  It means explaining every major cost, every<br />
                  ownership step, every document, and every<br />
                  operational decision with clarity.
                </p>
              </div>

              {/* Right Grid */}
              <div className="legal-transparency__right">
                {TRANSPARENCY_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="transparency-item">
                      <div className="transparency-item__icon"><Icon size={20} strokeWidth={1.5} /></div>
                      <div>
                        <h4 className="transparency-item__title">{item.title}</h4>
                        <p className="transparency-item__desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Risk Disclosure */}
      <section className="legal-risks">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="legal-section-title text-gold">4. RISK DISCLOSURE</h2>
            <p className="legal-risks__intro">
              Every real estate and hospitality project has potential risks. We believe in open disclosure so that clients can make informed decisions.
            </p>

            <div className="legal-risks__grid">
              {RISKS.map((risk, idx) => {
                const Icon = risk.icon;
                return (
                  <div key={idx} className="legal-risks__item">
                    <div className="legal-risks__icon"><Icon size={24} strokeWidth={1.5} /></div>
                    <h4 className="legal-risks__title">{risk.title}</h4>
                    <p className="legal-risks__desc">{risk.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="legal-info-strip">
              <ShieldAlert size={20} className="text-gold flex-shrink-0" />
              <span>
                <strong>Important Note:</strong> All benefits are subject to final agreement, legal verification, operational performance, 
                taxes, maintenance cost, management fee, and reserve fund as per approved financial and legal structure.
              </span>
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
            <div className="section-label section-label--light">TRUSTED PROCESS. TRANSPARENT JOURNEY.</div>
            <h2 className="proj-cta__title">
              A Commitment You Can Count On
            </h2>
            <p className="legal-hero__desc" style={{ marginTop: '1rem', marginBottom: '0', maxWidth: '500px' }}>
              The Nature is built on trust, clarity, and responsible management so you can invest with confidence and peace of mind.
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

export default Legal;
