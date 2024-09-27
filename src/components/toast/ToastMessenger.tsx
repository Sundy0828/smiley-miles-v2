import React, { createContext, useContext, useState } from "react";
import Toast from "./Toast";
import styles from "./ToastManager.module.scss";

interface ToastContextType {
  addToast: (
    message: string,
    duration?: "short" | "long" | "indefinite"
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<
    {
      id: string;
      message: string;
      duration?: "short" | "long" | "indefinite";
    }[]
  >([]);
  const toastIds = new Set<string>();

  const addToast = (
    message: string,
    duration?: "short" | "long" | "indefinite"
  ) => {
    const id = new Date().toISOString(); // Unique id based on timestamp
    if (toastIds.has(id)) return; // Prevent duplicates
    toastIds.add(id);

    setToasts((prev) => [...prev, { id, message, duration }]);

    if (duration !== "indefinite") {
      setTimeout(
        () => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id));
          toastIds.delete(id);
        },
        duration === "short" ? 4000 : 8000
      ); // Use duration values
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            duration={toast.duration}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};
