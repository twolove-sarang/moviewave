import React from "react";
import Display from "../styled/Display";
import { useNavigate } from "react-router-dom";

const NavSection = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToCategorize = () => {
    navigate("/categorize");
  };

  return (
    <Display>
      <Display displayFlex>
        <div>
          <Display main>MOVIE</Display>
          <Display main>SURF🏄‍♂️</Display>
        </div>
      </Display>
      <Display displayFlex>
        <Display menu>
          <Display link onClick={goToHome}>
            MovieWave
          </Display>
          {/* <Link to="/">MovieWave</Link> */}
        </Display>
        <Display menu>
          <Display link onClick={goToCategorize}>
            Categorize
          </Display>
          {/* <Link to="/categorize">Categorize</Link>{" "} */}
        </Display>
      </Display>
      <Display input type="text" />
    </Display>
  );
};

export default NavSection;
