import React from "react";
import { useBanner } from "../../components/banner/BannerContext";

const Home = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Home`,
    date: new Date().toLocaleDateString(),
  });
  return <div>Home</div>;
};

export default Home;
