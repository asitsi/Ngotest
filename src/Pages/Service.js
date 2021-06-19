import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <BgColor>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div>
              <Title>SERVICES WE PROVIDE</Title>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <p></p>
            <div>
              <div>
                <Wrap>
                  <Typography>
                    <span>
                      {" "}
                      <i class="fas fa-school"></i>
                      <h1 className="heading">right to education</h1>
                    </span>
                  </Typography>

                  <Typography>
                    <span>
                      {" "}
                      <i class="fas fa-head-side-virus"></i>{" "}
                      <h1 className="heading">innovative ideas</h1>
                    </span>
                  </Typography>
                  <Typography>
                    <span>
                      {" "}
                      <i class="fas fa-users-cog"></i>{" "}
                      <h1 className="heading">student groups</h1>
                    </span>
                  </Typography>
                </Wrap>
                <Wrap>
                  <Typography>
                    <span>
                      {" "}
                      <i class="fas fa-chart-line"></i>
                      <h1 className="heading">child-tracking systems</h1>
                    </span>
                  </Typography>

                  <Typography>
                    <span>
                      {" "}
                      <i class="fab fa-teamspeak"></i>{" "}
                      <h1 className="heading">
                        awareness workshops with parents{" "}
                      </h1>
                    </span>
                  </Typography>
                </Wrap>
                <Wrap>
                  <Typography>
                    <span>
                      {" "}
                      <i class="fas fa-graduation-cap"></i>
                      <h1 className="heading">apprenticeship opportunities</h1>
                    </span>
                  </Typography>
                  <Typography>
                    <span>
                      {" "}
                      <i className="fas fa-briefcase"></i>{" "}
                      <h1 className="heading pr-3">placement</h1>
                    </span>
                  </Typography>
                </Wrap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgColor>
  );
};

export default Service;

const BgColor = styled.div`
  background: #f4f4f4;
  padding: 3rem 0;
`;

const Title = styled.div`
  font-size: 2rem;
  border-bottom: 2px solid #3e4095;
  text-align: right;
  font-weight: bold;
  background: #f4f4f4;
  color: #222;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Typography = styled.div`
  text-transform: uppercase;
  min-width: 100px;
  margin-left: 1rem;
  box-shadow: 0 0 20px #000;
  border-radius: 5px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
  span {
    font-weight: bold;
    font-size: 1rem;

    .heading {
      text-align: center;
      font-weight: bold;
      color: #444;
      padding: 0 10px;
    }
  }

  i {
    font-size: 3rem;
    padding-top: 1rem;
    color: #e52165;
  }
`;
