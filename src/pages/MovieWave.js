import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainMovie from "../component/MainMovie";
import WheelSection from "../component/WheelSection";
import { movieAction } from "../redux/action/movieAction";

const MovieWave = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getUpcomingMovieAPI());
  }, []);

  return (
    <div>
      <MainMovie />
      <WheelSection />
    </div>
  );
};

export default MovieWave;
