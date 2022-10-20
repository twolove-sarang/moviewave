import React from "react";
import Display from "../styled/Display";

const NavSection = () => {
  return (
    // <Container>
      <Display>
        <Display displayFlex>
          <div>
            <Display main>MOVIE</Display>
            <Display main>SURF🏄‍♂️</Display>
          </div>
        </Display>
        <Display displayFlex>
          <Display menu>MovieWave</Display>
          <Display menu>Categorize</Display>
        </Display>
        <Display input type="text" />
      </Display>
    // </Container>
  );
};

export default NavSection;
