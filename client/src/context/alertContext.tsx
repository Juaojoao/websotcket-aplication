import { createContext, ReactNode, useContext, useState } from "react";
import { CardAlert } from "../components/cardAlert/cardAlert";

interface AlertContextProps {
  showAlert: (message: string, type: "success" | "error" | "warning") => void;
}

interface AlertProps {
  children: ReactNode;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider = ({ children }: AlertProps) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error" | "warning";
  } | null>(null);

  const showAlert = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <CardAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
