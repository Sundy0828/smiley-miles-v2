import React from "react";
import { useBanner } from "../../components/banner/BannerContext";

const Calendar = () => {
  const { updateBanner } = useBanner();
  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Calendar`,
    date: new Date().toLocaleDateString(),
  });
  return <div>Calendar</div>;
};

export default Calendar;
