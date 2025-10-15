import React, { useRef, useEffect } from 'react';
import { Coach } from '../types';

const coachesData: Coach[] = [
  {
    name: 'Youssef El Amrani',
    specialty: 'Musculation & Prise de Masse',
    description: 'Expert en hypertrophie, Youssef vous aidera à bâtir le physique de vos rêves avec des méthodes éprouvées.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Fatima Zahra',
    specialty: 'CrossFit & Conditionnement',
    description: 'Repoussez vos limites avec Fatima. Son énergie communicative vous motivera lors de WODs intenses.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Amine Cherkaoui',
    specialty: 'Perte de Poids & Cardio',
    description: 'Spécialiste de la transformation physique, Amine conçoit des programmes efficaces pour brûler les graisses.',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sofia Alaoui',
    specialty: 'Zumba & Cours Collectifs',
    description: 'Dansez, transpirez et amusez-vous ! Sofia transforme chaque cours en une véritable fête fitness.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Hassan Alami',
    specialty: 'Powerlifting & Strength Training',
    description: 'Hassan will help you break your personal records with his specialized powerlifting techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Nadia Belkacem',
    specialty: 'Yoga & Flexibility',
    description: 'Nadia guides you to inner peace and physical grace through her expert yoga instruction.',
    imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Coaches: React.FC = () => {
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
    <section id="coachs" ref={sectionRef} className="py-20 bg-brand-dark text-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">Nos <span className="text-brand-yellow">Coachs</span></h2>
          <p className="text-lg text-gray-400 mt-2">Une équipe d'experts passionnés à votre service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachesData.map((coach, index) => (
            <div key={index} className="bg-brand-gray rounded-lg overflow-hidden text-center group">
              <div className="relative">
                <img src={coach.imageUrl} alt={`Coach ${coach.name}`} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{coach.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{coach.name}</h3>
                <p className="text-brand-yellow font-semibold">{coach.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;