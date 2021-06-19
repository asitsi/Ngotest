import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Aboutus>
      <Content>
        <h1>WHAT WE DO</h1>
        <p>
          It is a non-governmental organization for welfare in the education
          field. It plays an important role in supporting the most vulnerable
          children to access their right to education through innovative ideas
          such as forming student groups and child-tracking systems, holding
          awareness workshops with parents to ensure that they send children to
          school. It also provides placement & apprenticeship opportunities to
          ITI, BTech, and diploma students for their bright future.
        </p>
      </Content>
      <div>
        <Image
          src="https://cdn.pixabay.com/photo/2016/08/09/08/46/education-1580143_960_720.jpg"
          alt="Img"
          className="img-fluid"
        />
      </div>
    </Aboutus>
  );
};

export default AboutUs;

const Aboutus = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  padding: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 2px solid #3e4095;
    width: 30%;
    padding-bottom: 1rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  p {
    font-size: 20px;
    padding: 2rem;
  }
`;
const Image = styled.img`
  width: 200rem;
  height: 400px;
  max-height: 500px;
  opacity: 0.9 #000;
  border: 10px solid #3e4095;
  box-shadow: 0 0 20px red;
`;
