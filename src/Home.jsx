import react from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/banner.jpg';
import Common from './Common';
const Home=()=> {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/Services"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
