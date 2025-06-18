import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative my-4 max-h-[600px] overflow-y-scroll">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div className="">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
