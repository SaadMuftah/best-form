
import React, { useState, useRef, useEffect } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
    {
        question: "Quels sont vos horaires d'ouverture ?",
        answer: "Notre salle est ouverte du Lundi au Samedi, de 7h00 à 22h00. Nous sommes fermés le Dimanche."
    },
    {
        question: "Proposez-vous des séances d'essai ?",
        answer: "Absolument ! Nous offrons une séance d'essai gratuite d'une journée pour que vous puissiez découvrir notre ambiance, nos équipements et rencontrer nos coachs. Contactez-nous pour réserver la vôtre !"
    },
    {
        question: "Comment puis-je m'inscrire ?",
        answer: "L'inscription est simple ! Vous pouvez vous rendre directement à l'accueil de notre salle, ou nous contacter par téléphone ou email pour prendre rendez-vous. Vous pouvez consulter nos différentes offres sur la section Tarifs."
    },
    {
        question: "Y a-t-il des douches et des vestiaires ?",
        answer: "Oui, nous mettons à votre disposition des vestiaires complets avec des casiers sécurisés et des douches individuelles pour votre confort après l'entraînement."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
            { threshold: 0.1 }
        );

        observer.observe(section);

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-brand-yellow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <section id="faq" ref={sectionRef} className="py-20 bg-brand-gray text-white fade-in-section">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black uppercase">Questions <span className="text-brand-yellow">Fréquentes</span></h2>
                    <p className="text-lg text-gray-400 mt-2">Trouvez les réponses à vos questions.</p>
                </div>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-brand-dark rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left p-6"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-xl font-semibold">{item.question}</span>
                                <ChevronIcon isOpen={openIndex === index} />
                            </button>
                            <div
                                className={`transition-max-height duration-500 ease-in-out overflow-hidden`}
                                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                            >
                                <div className="p-6 pt-0 text-gray-300">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
