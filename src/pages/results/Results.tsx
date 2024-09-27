import React from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import { YearCard } from "../../components/cards/yearCard/YearCard";
import styles from "./Results.module.scss";
import { useBanner } from "../../components/banner/BannerContext";

const Results = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const { updateBanner } = useBanner();
  const startYear = 2003;
  const currentYear = new Date().getFullYear();

  // Generate an array of years from startYear to currentYear
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index
  );

  updateBanner({
    title: `Miles of Smiles`,
    subtitle: `Race Results`,
    date: new Date().toLocaleDateString(),
  });

  const handleYearClick = (year: number) => {
    // Redirect to the current URL + /year
    const currentUrl = window.location.pathname; // Get the current URL path
    navigate(`${currentUrl}/${year}`); // Redirect to the new URL
  };

  return (
    <div className={styles.yearCards}>
      {years.map((year) => (
        <YearCard
          key={year}
          year={year}
          onClick={() => handleYearClick(year)}
        />
      ))}
    </div>
  );
};

export default Results;
