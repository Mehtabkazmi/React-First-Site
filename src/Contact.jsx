import react from "react";
import { NavLink } from "react-router-dom";

const Contact=()=> {
  return (
      <>
      <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 max mx-auto">
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="First Name"/>
              </div>
              <div className="mb-3">
                <label className="form-label">last Name</label>
                <input type="text" className="form-control" placeholder="Last Name"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
              </div>
              <NavLink to="/" className="btn btn-primary">Click Me </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
