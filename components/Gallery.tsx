import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1546412414-e14d0684a125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.8a9.6 9.6 0 0 0-4.83.069c-2.36.11-3.64 1.39-3.75 3.75-.058 1.24-.069 1.61-.069 4.82s.011 3.58.069 4.82c.11 2.36 1.39 3.64 3.75 3.75 1.24.058 1.61.069 4.83.069s3.59-.011 4.83-.069c2.36-.11 3.64-1.39 3.75-3.75.058-1.24.069-1.61.069-4.82s-.011-3.58-.069-4.82c-.11-2.36-1.39-3.64-3.75-3.75-1.24-.058-1.61-.069-4.83-.069zM12 6.837a5.163 5.163 0 1 0 0 10.326 5.163 5.163 0 0 0 0-10.326zm0 8.526A3.363 3.363 0 1 1 12 8.637a3.363 3.363 0 0 1 0 6.726zM16.965 6.574a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"></path></svg>
);


const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleShareClick = (e: React.MouseEvent) => {
      e.stopPropagation();
  };
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const imageUrl = images[selectedImageIndex];
    navigator.clipboard.writeText(imageUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

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
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);


  return (
    <>
      <section id="galerie" ref={sectionRef} className="py-20 bg-brand-dark fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-white">Notre <span className="text-brand-yellow">Espace</span></h2>
            <p className="text-lg text-gray-400 mt-2">Découvrez l'environnement dans lequel vous allez évoluer.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg group cursor-pointer" onClick={() => openLightbox(index)}>
                <img 
                  src={src} 
                  alt={`Galerie Best Forme ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-brand-yellow transition-colors"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 md:left-10 text-white text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
            onClick={showPrevImage}
            aria-label="Image précédente"
          >
             &#8249;
          </button>

          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedImageIndex]} 
              alt={`Galerie Best Forme ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-4 flex items-center space-x-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(images[selectedImageIndex])}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleShareClick}
                aria-label="Partager sur Facebook"
                className="text-white hover:text-brand-yellow transition-colors"
              >
                <FacebookIcon className="w-8 h-8"/>
              </a>
               <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(images[selectedImageIndex])}&text=${encodeURIComponent('Découvrez la salle Best Forme !')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleShareClick}
                aria-label="Partager sur Twitter"
                className="text-white hover:text-brand-yellow transition-colors"
              >
                <TwitterIcon className="w-8 h-8"/>
              </a>
              <button 
                onClick={handleCopy}
                aria-label="Copier le lien pour Instagram"
                className="text-white hover:text-brand-yellow transition-colors"
              >
                <InstagramIcon className="w-8 h-8"/>
              </button>
            </div>
             {copySuccess && <div className="absolute -bottom-6 bg-brand-yellow text-brand-dark text-sm font-bold px-3 py-1 rounded-md">Lien copié !</div>}
          </div>

          <button 
            className="absolute right-4 md:right-10 text-white text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
            onClick={showNextImage}
            aria-label="Image suivante"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;