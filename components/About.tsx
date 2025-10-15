import React, { useRef, useEffect } from 'react';

const About: React.FC = () => {
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
    <section id="a-propos" ref={sectionRef} className="py-20 bg-brand-dark text-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase">Qui <span className="text-brand-yellow">Sommes-Nous</span> ?</h2>
            <p className="text-lg text-gray-400 mt-2">Votre partenaire de réussite physique et mentale.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Équipements de la salle de sport Best Forme" className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-4 text-brand-yellow">Notre Mission</h3>
                <p className="text-gray-300 mb-6">
                    Chez Best Forme, notre mission est de vous offrir un environnement inspirant et des outils de pointe pour vous aider à atteindre et dépasser vos objectifs de fitness. Nous croyons en une approche holistique qui combine effort physique, bien-être mental et une communauté soudée.
                </p>
                <h3 className="text-3xl font-bold mb-4 text-brand-yellow">Le Mot du Fondateur</h3>
                <p className="text-gray-300 italic mb-6">
                    "J'ai créé Best Forme avec une vision claire : bâtir plus qu'une simple salle de sport, mais une véritable famille où chaque membre se sent soutenu. Votre transformation est notre plus grande fierté. Bienvenue chez vous."
                </p>
                 <p className="text-white font-semibold">- A. Bennani, Fondateur de Best Forme</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;