import React, { useEffect, useState } from "react";
import "./TvSeries.scss";
import { getTvPopular, getTvTopRated } from "../../api/apiCaller";
import HeroSlider from "../../components/HeroSlider/HeroSlider";

function TvSeries() {
  const [popularTv, setPopularTv] = useState([]);
  const [topTv, setTopTv] = useState([]);

  useEffect(() => {
    const featch = async () => {
      await getTvPopular(1).then((res) => {
        setPopularTv(res.data.results);
      });
    };
    featch();
  });
  useEffect(() => {
    const featch = async () => {
      await getTvTopRated(1).then((res) => {
        setTopTv(res.data.results);
      });
    };
    featch();
  });

  return (
    <div className="tv-page">
      <HeroSlider title="Popular TV" movies={popularTv} />
      <HeroSlider title="Top TV Rated" movies={topTv} />
    </div>
  );
}

export default TvSeries;
