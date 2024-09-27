import React from "react";
import "./App.css";
import "./styles/Global.scss";
import { useTheme } from "./components/provider/theme/ThemeProvider";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { useBanner } from "./components/banner/BannerContext";
import { pages } from "./constants/Pages";

const App: React.FC = () => {
  const { theme } = useTheme();
  const { banner } = useBanner();

  const handleShareClick = () => {
    alert("Banner shared!");
  };

  return (
    <div className={theme}>
      <Navbar title="Miles of Smiles" pages={pages} />
      <Banner
        title={banner.title}
        subtitle={banner.subtitle}
        date={banner.date}
        onShareClick={handleShareClick}
      />
      <div className="outletContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
