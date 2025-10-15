import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase">Nous <span className="text-brand-yellow">Contacter</span></h2>
          <p className="text-lg text-gray-400 mt-2">Prêt à commencer ? Prenez contact avec nous dès aujourd'hui.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-brand-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            <div className="space-y-4 text-lg">
              <p><strong>Adresse :</strong> 123 Boulevard d'Anfa, Casablanca, Maroc</p>
              <p><strong>Horaires :</strong> Lundi - Samedi, 7h00 - 22h00</p>
              <p><strong>Email :</strong> <a href="mailto:contact@bestforme.ma" className="text-brand-yellow hover:underline">contact@bestforme.ma</a></p>
              <p><strong>Téléphone :</strong> <a href="tel:+212612345678" className="text-brand-yellow hover:underline">+212 6 12 34 56 78</a></p>
            </div>
            <h3 className="text-2xl font-bold mt-8 mb-6">Envoyez-nous un message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Votre nom" className="w-full p-3 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"/>
                  <input type="email" placeholder="Votre email" className="w-full p-3 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"/>
              </div>
              <textarea placeholder="Votre message" rows={5} className="w-full p-3 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow mb-4"></textarea>
              <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-md uppercase tracking-wider hover:bg-yellow-300 transition duration-300">
                Envoyer
              </button>
            </form>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212727.2096181793!2d-7.780182283593748!3d33.573611100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x400c406937fe9a0!2sCasablanca!5e0!3m2!1sfr!2sma!4v1684321098765!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;