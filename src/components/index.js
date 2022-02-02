import React from "react";
import bike from "../assets/bike.jpg";
import car from "../assets/car.jpg";
import suv from "../assets/suv.jpg";
import Popup from "./popup";
import { ContextComponent } from "../App";

const HomeComponent = () => {
  const details = [
    {
      key: 1,
      vahicle_type: "Two whealer",
      capacity: 5,
      hourly_charge: 10,
      available: 5,
      status: true,
      image: bike,
    },
    {
      key: 2,
      vahicle_type: "Hatchback Cars",
      capacity: 5,
      hourly_charge: 20,
      available: 5,
      status: false,
      image: car,
    },
    {
      key: 3,
      vahicle_type: "SUV Cars",
      capacity: 5,
      hourly_charge: 30,
      available: 5,
      status: true,
      image: suv,
    },
  ];

  return (
    <>
      <ContextComponent.Consumer>
        {(context) => (
          <div className="row">
            {/* {console.log(context, "homepage")} */}
            <div>
              <div className="d-flex justify-content-center p-2 ">
                <h1>Select vahicle type</h1>
              </div>
            </div>

            {details.map((value, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div
                    className="card shadow-lg border m-2"
                    style={{ width: "25rem", position: "relative" }}
                  >
                    <div className="card-body p-0">
                      <img
                        src={value.image}
                        className="card-img-top"
                        style={{ height: "20rem", objectFit: "cover" }}
                      />
                      <h3 class="card-title text-center">
                        {value.vahicle_type}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          flexDirection: "column",
                          alignItems: "start",
                          padding: 4,
                          paddingLeft: 15,
                        }}
                      >
                        <p className="card-text mb-1 text-left">
                          Parking capcity :{value.capacity}
                        </p>
                        <p className="card-text mb-1">
                          Hourly charge :{value.hourly_charge}
                        </p>
                        <p className="card-text mb-1">
                          Parking available :{value.available}
                        </p>
                        <p className="card-text">
                          Status : {value.status ? "Available" : "Parking Full"}
                        </p>
                      </div>

                      <Popup
                        btn={"Get Parking"}
                        title={value.vahicle_type}
                        status={value.status}
                        charge={value.hourly_charge}
                        setHistory={context?.setData}
                        history={context?.data}
                        image={value.image}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ContextComponent.Consumer>
    </>
  );
};
export default HomeComponent;
