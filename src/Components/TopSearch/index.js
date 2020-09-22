import React, { useState, useEffect, Component } from 'react';
import API from "../../utils/API";
import { MDBDataTableV5 } from 'mdbreact';
import "./style.css"

const columns = [
    {
      label: 'Image',
      field: 'image',
      width: 150,
    },
    {
      label: 'Name',
      field: 'name',
      sort: "asc",
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
      sort: 'asc',
      width: 100,
    },
    {
      label: 'DOB',
      field: 'dob',
      sort: 'asc',
      width: 150,
    },

  ]


export default function TopSearch() {
    //Initialize states for containers for our user values and if we are still getting data from our api
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [datatable, setDatatable] = useState({})

    //perform axios call
    useEffect( () => {
        API.populate()
        .then(res => {

            console.log("res: ", res.data.results)
            setUsers( res.data.results )
            console.log("Users: ", users);
            const rows = users.map((user, i) => {        
            return {
                image: <img src={user.picture.large} alt="Image of a person"/>,
                name: user.name.first + " " + user.name.last,
                phone:  user.cell,
                email:user.email,
                dob: user.dob.date.split("T")[0]
            }
            })
        
            console.log("newRows: ", rows)
            setDatatable({columns: columns, rows: rows});


            setLoading(false)

        })
        .catch(err => console.log(err))
    }, [loading])

    if(loading) {
        return <div>loading...</div>;
    }

    else if(!users.length) {
        return <div>Didnt get any users</div>;
    }
    else {
        return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
    }

}