import React from "react";
import styled from "styled-components";

const Fotter = () => {
  return (
    <div>
      <Wrap>
        <div className="container-fluid">
          <Row>
            <div className="col-lg-3 col-12">
              <h5>HELPING HANDS</h5>
              <p>
                It is a non-governmental organization for welfare in the
                education field. It plays an important role in supporting the
                most vulnerable children to access their right to education
              </p>
            </div>
            <div className="col-lg-3 col-12">
              <h5>CONTACT INFO</h5>
              <ul>
                <li>
                  <span>Address:</span> 250 East Avenue, Pilgrim road, NJ 5618
                </li>
                <li>
                  <span>Phone:</span> +192 9933 876 581
                </li>
                <li>
                  <span>Email:</span> helping.hands@nomail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-3  col-12">
              <h5>Social Media</h5>
              <div className="Icon">
                <span className="">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-google-plus-g"></i>
                </span>
              </div>
            </div>
          </Row>
        </div>
      </Wrap>
      <Bottom>Â© 2019. All rights reserved</Bottom>
    </div>
  );
};

export default Fotter;

const Wrap = styled.div`
  background-color: #3e4095;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-left: 10%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  h5 {
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
  }
  p {
    color: #fff;
    font-weight: bold;
    padding: 1rem;
  }
  li {
    list-style: none;
    color: #999;
    font-weight: bold;
    padding: 1rem 0;
    span {
      color: #fff;
    }
  }
  i {
    background: #fff;
    color: #3e4095;
    padding: 15px;
    border-radius: 50%;
    margin-left: 1rem;
  }
  i:hover {
    background: #e52165;
    color: #fff;
    padding: 20px;
    border-radius: 50%;
    margin-left: 1rem;
  }
`;

const Bottom = styled.div`
  background: #0d1137;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 1;
`;
