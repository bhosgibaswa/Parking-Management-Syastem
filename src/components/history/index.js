import React from "react";

import { ContextComponent } from "../../App";

const History = () => {
  return (
    <ContextComponent.Consumer>
      {(context) => (
        <div>
          {console.log(context, "context")}
          <div className=" cards p-4">
            <h3>History of booked appointments</h3>
          </div>
          <div className="d-flex w-100">
            <ul class="list-group list-group-flush w-100">
              {context?.data?.map((value) => (
                <li class="list-group-item d-flex">
                  <img src={value.image} style={{ width: "20rem" }} />
                  <div className="d-flex flex-column text-start ">
                    <p>Name : {value.name}</p>
                    <p>Vahicle Number : {value.vahicleNumber}</p>
                    <p>Vahicle : {value.vahicleName}</p>
                    <p>Parking Charge : {value.charge}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </ContextComponent.Consumer>
  );
};
export default History;
