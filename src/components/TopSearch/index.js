import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import API from '../../utils/API';

export default function TopSearch() {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Image',
                field: 'picture',
                width: 150,
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
                label: 'Office',
                field: 'office',
                width: 200,
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'disabled',
                width: 100,
            },
        ]
    });
    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res);
            const rows = res.data.results.map ((user) => {
                return {
                    picture: <img src={user.picture.medium} />,
                    name: user.name.first + " " + user.name.last,
                }
            })
            setDatatable((oldState) => {
                return {...oldState, rows: rows}
            })
        })
    },[])

    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
};
