import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import API from '../../utils/API';

export default function TopSearch() {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Image',
                field: 'picture',
                sort: 'disabled',
                width: 200,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Name',
                field: 'name',
                width: 270,
            },
            {
                label: 'Phone',
                field: 'phone',
                width: 200,
            },
            {
                label: 'Email',
                field: 'email',
                type: 'email',
                width: 200,
            },
            {
                label: 'DOB',
                field: 'dob',
                sort: 'disabled',
                width: 150,
            }
        ]
    });
    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res);
            const rows = res.data.results.map ((user) => {

                return {
                    picture: <img src={user.picture.medium} style={{borderRadius:"50%"}} />,
                    name: user.name.first + " " + user.name.last,
                    phone: user.cell,
                    email: user.email,
                    dob: user.dob.date.slice(0,10)

                }
            })
            setDatatable((oldState) => {
                return {...oldState, rows: rows}
            })
        })
    },[])

    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
};
