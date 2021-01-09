import React from "react";
import "./style.css";
import { MDBCol, MDBInput } from "mdbreact";

function Search () {
    return (
        <div>
            <MDBCol md="3">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </MDBCol>
        </div>
    )
}

export default Search;