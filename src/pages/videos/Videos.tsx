import React from "react";
import { useBanner } from "../../components/banner/BannerContext";

const Videos = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Race Videos`,
    date: new Date().toLocaleDateString(),
  });
  return <div>Videos</div>;
};

export default Videos;
