
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
    const phoneNumber = "212612345678";
    const message = "Bonjour Best Forme, je souhaiterais avoir plus d'informations.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Contacter sur WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.387 1.876 6.269l.16.278-1.013 3.705 3.827-1.004.276.166zm.225-7.484c-.536-1.119-.997-1.13-1.29-1.148-.292-.018-.621-.021-.936-.021-.315 0-.82.119-1.241.585-.421.466-1.593 1.555-1.593 3.791 0 2.234 1.637 4.398 1.875 4.698.235.302 3.178 4.96 7.708 6.775 4.53 1.815 4.53 1.226 5.343 1.152.813-.073 2.614-.967 2.986-1.915.372-.947.372-1.758.269-1.915-.102-.157-.373-.243-.789-.438-.413-.195-2.615-1.288-3.024-1.43-.408-.142-.703-.214-1.001.214-.298.428-1.144 1.43-1.403 1.723-.259.292-.518.329-.935.135-.418-.194-1.758-1.042-3.35-2.684-1.239-1.284-2.08-2.864-2.322-3.352-.244-.488-.018-.756.195-.991.192-.214.418-.363.593-.529.175-.166.292-.279.438-.464.146-.186.073-.356-.036-.502-.11-.147-.999-2.4-1.366-3.282z"/>
            </svg>
        </a>
    );
};

export default FloatingWhatsApp;
