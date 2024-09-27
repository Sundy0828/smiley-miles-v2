import React from "react";
import { useBanner } from "../../components/banner/BannerContext";

const Sale = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Items For Sale`,
    date: new Date().toLocaleDateString(),
  });
  return <div>Sale</div>;
};

export default Sale;
