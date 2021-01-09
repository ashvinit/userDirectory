import React from "react";
import { MDBCol, MDBInput } from "mdbreact";

function Search () {
    return (
        <div>
            <MDBCol md="6">
                <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
            </MDBCol>
        </div>
    )
}

export default Search;