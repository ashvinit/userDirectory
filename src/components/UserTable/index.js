import React from "react";

function UserTable () {
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default UserTable;

