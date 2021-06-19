import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Contact = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12">
            <LoadScript googleMapsApiKey="AIzaSyBTBV7ET7t_u0WEGysnQxZ3hbqO3eSDxBg">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              />
            </LoadScript>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <Tittle>
              <h1>Contact Us</h1>
            </Tittle>
            <p className="pl-2">
              For any enquiries or information, drop a mail to Demo@gmail.com or
              fill the form below
            </p>
            <form noValidate autoComplete="off">
              <div className="mt-2">
                <TextField
                  id="filled-search"
                  label="Name"
                  type="search"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="mt-2">
                <TextField
                  id="filled-search"
                  label="Email"
                  type="search"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="mt-2">
                <TextField
                  id="filled-search"
                  label="Enquiry About"
                  type="search"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="mt-2">
                <TextField
                  id="filled-search"
                  label="Phone"
                  type="search"
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div className="mt-2">
                <TextField
                  id="filled-multiline-static"
                  label="Description"
                  multiline
                  rows={3}
                  variant="filled"
                  className="w-100"
                />
              </div>
              <div>
                <HoverButton className="mt-4" variant="contained">
                  Submit
                </HoverButton>
                <HoverButton className="mt-4" variant="contained">
                  <i class="fas fa-hand-holding-usd"> Donate</i>
                </HoverButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Tittle = styled.div`
  h1 {
    font-weight: bold;
    border-bottom: 2px solid #3e4095;
    width: 50%;
  }
`;

const HoverButton = styled.button`
  background-color: #3e4095;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  :hover {
    background-color: #e52165;
    color: #fff;
  }
`;
