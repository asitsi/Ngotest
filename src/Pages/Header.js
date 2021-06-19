import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="d-none d-lg-block d-md-none">
      <HeaderImg>
        <div>
          <img
            src="http://endeavour.org.in/resource/logo.gif"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="Icon">
          <span className="">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
          </span>
        </div>
      </HeaderImg>
    </div>
  );
};

export default Header;

const HeaderImg = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0d1137;
  z-index: -1;
  position: relative;
  top: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
  img {
    height: 115px;
    width: 100%;
  }
  .Icon {
    margin-left: 10%;
  }
  .Icon span i {
    background-color: #3e4095;
    padding: 20px;
    margin-left: 1rem;
    border-radius: 50%;
    color: #fff;
    transition: all 0.5s ease-out;
    cursor: pointer;
  }
  .Icon span i:hover {
    background-color: #e52165;
    font-size: 2rem;
  }
`;
