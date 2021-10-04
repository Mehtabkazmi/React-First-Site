import react from "react";
import Common from './Common';
import web from '../src/images/bike.jpg';
const About=(props)=> {
  return (
      <>
      <Common
        name="Welcome to About page "
        imgsrc={web}
        visit="/Contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
