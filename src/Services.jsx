import react from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Data from './Data';

const Services=()=> {
  return (
      <>
      <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((val, ind)=>{
                return <Card
                  key={ind}
                  title={val.title}
                  imgsrc={val.imgsrc} />
              })}
                </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Services;
