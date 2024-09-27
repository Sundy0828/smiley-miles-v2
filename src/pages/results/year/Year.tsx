import React, { useEffect, useState } from "react";
import { Accordion } from "../../../components/accordion/Accordion";
import { RaceCard } from "../../../components/cards/raceCard/RaceCard";
import { useNavigate, useParams } from "react-router-dom";
import { RouterParams } from "../../../constants/URLConstants";
import styles from "./Year.module.scss";
import { useBanner } from "../../../components/banner/BannerContext";

interface RaceData {
  title: string;
  city: string;
  state: string;
  date: string;
}

const Year: React.FC = () => {
  const { updateBanner } = useBanner();
  const navigate = useNavigate();
  const routerParams = useParams<RouterParams>();

  const [raceData, setRaceData] = useState<RaceData[]>([]);
  const [loading, setLoading] = useState(true);

  // Load the respective JSON file based on the static year
  useEffect(() => {
    const loadRaceData = async () => {
      try {
        const data = await import(
          `../../../data/json/years/${routerParams.year}.json`
        );
        setRaceData(data.default);
      } catch (error) {
        console.error("Error loading race data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRaceData();
  }, [routerParams.year]);

  // Group race data by month
  const racesByMonth = raceData.reduce(
    (acc: { [key: string]: RaceData[] }, race) => {
      const month = new Date(race.date).toLocaleString("default", {
        month: "long",
      });
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(race);
      return acc;
    },
    {}
  );

  if (loading) {
    return <p>Loading race data...</p>;
  }

  updateBanner({
    title: `Results`,
    subtitle: `${routerParams.year}`,
  });

  const handleRaceClick = (race: string) => {
    // Redirect to the current URL + /year
    const currentUrl = window.location.pathname; // Get the current URL path
    navigate(`${currentUrl}/${race.trim().replace(/\s+/g, "-").toLowerCase()}`); // Redirect to the new URL
  };

  return (
    <div className={styles.years}>
      {Object.keys(racesByMonth).map((month) => (
        <Accordion key={month} title={month}>
          {racesByMonth[month].map((race, index) => (
            <RaceCard
              key={index}
              title={race.title}
              state={race.state}
              date={race.date}
              city={race.city}
              onClick={() => handleRaceClick(race.title)}
            />
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default Year;
