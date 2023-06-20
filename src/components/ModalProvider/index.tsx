import { useState, createContext } from 'react';

interface ModalContextProps {
    active: boolean;
    handleShowModal: () => void;
    handleHideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
    children: React.ReactNode;
}
function ModalProvider({ children }: ModalProviderProps) {
    const [active, setActive] = useState(false);

    const handleShowModal = () => {
        setActive(true);
    };

    const handleHideModal = () => {
        setActive(false);
    };

    const value = {
        active,
        handleShowModal,
        handleHideModal,
    };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export { ModalContext, ModalProvider };
