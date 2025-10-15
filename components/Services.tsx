import React, { useRef, useEffect } from 'react';
import { Service } from '../types';
import DumbbellIcon from './icons/DumbbellIcon';
import HeartbeatIcon from './icons/HeartbeatIcon';
import UsersIcon from './icons/UsersIcon';
import ClipboardIcon from './icons/ClipboardIcon';

const servicesData: Service[] = [
  {
    icon: <DumbbellIcon className="h-12 w-12 text-brand-yellow" />,
    title: 'Musculation',
    description: 'Un plateau complet avec des machines guidées et des poids libres pour sculpter votre corps et gagner en force.',
  },
  {
    icon: <HeartbeatIcon className="h-12 w-12 text-brand-yellow" />,
    title: 'Cardio Training',
    description: 'Améliorez votre endurance et votre santé cardiovasculaire avec nos tapis de course, vélos et elliptiques dernière génération.',
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-brand-yellow" />,
    title: 'Cours Collectifs',
    description: 'Zumba, CrossFit, Yoga... Des cours dynamiques et motivants animés par des coachs certifiés pour vous dépasser en groupe.',
  },
  {
    icon: <ClipboardIcon className="h-12 w-12 text-brand-yellow" />,
    title: 'Coaching Personnalisé',
    description: 'Un programme sur-mesure et un suivi individuel pour des résultats rapides et durables, adapté à vos besoins spécifiques.',
  },
];

const Services: React.FC = () => {
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
    <section id="services" ref={sectionRef} className="py-20 bg-brand-gray text-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">Nos <span className="text-brand-yellow">Activités</span></h2>
          <p className="text-lg text-gray-400 mt-2">Des programmes pour tous les niveaux et tous les objectifs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;