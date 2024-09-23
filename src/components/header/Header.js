import { useState } from 'react';
import logo from '../../images/logo.png';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h3 className="text-2xl font-bold mb-4">Sobre o Projeto</h3>
                <p className="text-lg">
                    Este projeto foi desenvolvido para auxiliar pessoas surdas no mercado. Através de cards interativos e vídeos explicativos, o objetivo é facilitar a localização de seções como "bebidas" e "produtos de limpeza" com uma interface intuitiva e acessível.
                </p>
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

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className='flex justify-between items-center p-4'>
            <img src={logo} alt="logo mercado" width={100}/>
            <div>
                <button 
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={handleOpenModal}
                >
                    Ajuda
                </button>
            </div>
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}

export default Header;
