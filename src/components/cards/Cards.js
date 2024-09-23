import { useState } from 'react';

const Modal = ({ isOpen, onClose, videoSrc, sectionName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-screen-lg relative">
                <h3 className="text-2xl font-bold mb-4">{sectionName}</h3>
                <video controls className="w-full">
                    <source src={videoSrc} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <button 
                    className="absolute top-2 right-2 text-xl font-bold bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    );
};

const Cards = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sections = [
        { id: 1, name: 'Produtos de Higiene', icon: '🧽', video: '/videos/higiene.mp4' },
        { id: 2, name: 'Produtos de Limpeza', icon: '🧼', video: '/videos/limpeza.mp4' },
        { id: 3, name: 'Cereais', icon: '🥣', video: '/videos/cereais.mp4' },
        { id: 4, name: 'Bebidas', icon: '🍹', video: '/videos/bebidas.mp4' }, 
        { id: 5, name: 'Laticíneos', icon: '🥛', video: '/videos/laticineos.mp4' }, 
        
    ];

    const handleCardClick = (section) => {
        setSelectedSection(section);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSection(null);
    };

    return (
        <div className="flex flex-col items-center">
            {sections.map((section) => (
                <div 
                    key={section.id} 
                    className="m-4 w-80 p-6 bg-gray-100 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-200 transition"
                    onClick={() => handleCardClick(section)}
                >
                    <div className="text-4xl">{section.icon}</div>
                    <h2 className="mt-2 text-xl font-semibold">{section.name}</h2>
                </div>
            ))}

            {selectedSection && (
                <Modal 
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    videoSrc={selectedSection.video}
                    sectionName={selectedSection.name}
                />
            )}
        </div>
    );
};

export default Cards;
