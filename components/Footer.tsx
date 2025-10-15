import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-brand-yellow transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">TikTok</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Best Forme Casablanca. Tous droits réservés.</p>
        <p className="text-sm mt-2">Conçu avec passion pour la performance.</p>
      </div>
    </footer>
  );
};

export default Footer;