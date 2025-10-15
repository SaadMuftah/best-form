import React, { useRef, useEffect } from 'react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    title: 'Mensuel',
    price: '400',
    period: 'MAD/mois',
    features: ['Accès illimité 7j/7', 'Cours collectifs inclus', 'Accès aux équipements', 'Casier personnel'],
    isFeatured: false,
  },
  {
    title: 'Trimestriel',
    price: '1100',
    period: 'MAD/trimestre',
    features: ['Tous les avantages du mensuel', '1 séance de coaching offerte', 'Suivi personnalisé', 'Réduction de 10%'],
    isFeatured: true,
  },
  {
    title: 'Annuel',
    price: '4000',
    period: 'MAD/an',
    features: ['Tous les avantages du trimestriel', '4 séances de coaching offertes', 'Accès invité le week-end', 'Meilleur tarif garanti'],
    isFeatured: false,
  },
];

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section id="tarifs" ref={sectionRef} className="py-20 bg-brand-gray text-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">Nos <span className="text-brand-yellow">Tarifs</span></h2>
          <p className="text-lg text-gray-400 mt-2">Des offres flexibles pour commencer votre transformation.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-brand-dark p-8 rounded-lg border-2 ${plan.isFeatured ? 'border-brand-yellow scale-105' : 'border-transparent'} transform transition-transform duration-300 relative`}>
              {plan.isFeatured && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">Populaire</span>}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.title}</h3>
              <p className="text-center text-gray-400 mb-6">{plan.period}</p>
              <p className="text-5xl font-black text-center mb-6">{plan.price}<span className="text-lg font-bold text-gray-400"> MAD</span></p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full font-bold py-3 px-8 rounded-full uppercase tracking-wider transition duration-300 ${plan.isFeatured ? 'bg-brand-yellow text-brand-dark hover:bg-yellow-300' : 'bg-gray-700 hover:bg-brand-yellow hover:text-brand-dark'}`}>
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-brand-dark p-8 rounded-lg border border-brand-yellow">
          <h3 className="text-2xl font-bold">Pas encore sûr ?</h3>
          <p className="text-gray-300 my-4">Profitez de notre offre spéciale pour découvrir notre salle et notre ambiance unique.</p>
          <a href="#contact" className="bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-brand-yellow hover:text-brand-dark transition duration-300 ease-in-out">
            Essai Gratuit 1 Jour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;