import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the banner state
interface BannerState {
  title: string;
  subtitle?: string;
  date?: string;
}

// Define the shape of the context
interface BannerContextProps {
  banner: BannerState;
  updateBanner: (newBanner: BannerState) => void;
}

// Default banner values (optional)
const defaultBannerState: BannerState = {
  title: "Default Banner Title",
  subtitle: "Default Subtitle",
  date: "Default Date",
};

// Create the context with default values
const BannerContext = createContext<BannerContextProps | undefined>(undefined);

// Provide the context to components
export const BannerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [banner, setBanner] = useState<BannerState>(defaultBannerState);

  const updateBanner = (newBanner: BannerState) => {
    setBanner(newBanner);
  };

  return (
    <BannerContext.Provider value={{ banner, updateBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

// Create a custom hook to access the banner context
export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};
