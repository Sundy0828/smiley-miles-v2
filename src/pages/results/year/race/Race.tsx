import React from "react";
import { useBanner } from "../../../../components/banner/BannerContext";
import { useParams } from "react-router-dom";
import { RouterParams } from "../../../../constants/URLConstants";

const Race = () => {
  const { updateBanner } = useBanner();
  const routerParams = useParams<RouterParams>();

  updateBanner({
    title: `Results for ${routerParams.year}`,
    subtitle: `${routerParams.race}`,
  });

  return <div>Race</div>;
};

export default Race;
