import React, { useRef, useEffect } from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "L'ambiance est incroyable et les coachs sont vraiment à l'écoute. J'ai vu des résultats que je n'aurais jamais cru possibles ! Best Forme est ma deuxième maison.",
    name: 'Karim B.',
    role: 'Membre depuis 2 ans',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: "Les cours collectifs sont pleins d'énergie. Chaque séance est un nouveau défi. Je recommande vivement cette salle à tous ceux qui veulent se dépasser.",
    name: 'Leila K.',
    role: 'Membre depuis 8 mois',
    imageUrl: 'https://images.unsplash.com/photo-1521804906057-1df4fdb718b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: "Des équipements au top, une propreté irréprochable et une équipe qui vous motive au quotidien. Sans aucun doute la meilleure salle de Casablanca.",
    name: 'Mehdi S.',
    role: 'Membre depuis 3 ans',
    imageUrl: 'https://images.unsplash.com/photo-1548214221-5843b0da62f8?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Testimonials: React.FC = () => {
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
    <section id="temoignages" ref={sectionRef} className="py-20 bg-brand-gray text-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">Ce qu'ils <span className="text-brand-yellow">disent de nous</span></h2>
          <p className="text-lg text-gray-400 mt-2">La satisfaction de nos membres est notre priorité.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-lg flex flex-col">
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;