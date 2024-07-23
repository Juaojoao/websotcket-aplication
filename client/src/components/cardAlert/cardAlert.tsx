import { GoX } from "react-icons/go";
import "./style.css";
import { createPortal } from "react-dom";

interface CardAlertProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose: () => void;
}

export const CardAlert = ({ message, type, onClose }: CardAlertProps) => {
  return createPortal(
    <div
      className={`card-alert font-semibold ${type} bg-white fixed top-6 right-6 flex z-50 gap-2 rounded-md p-2 shadow-md w-80`}
    >
      <span className="text-xs">{message}</span>
      <button className="border-none cursor-pointer text-lg" onClick={onClose}>
        <GoX />
      </button>
    </div>,
    document.body
  );
};
