import React, { useState, useEffect, Component } from "react";
import API from "../utils/API";
import Form from "../Components/Form/index"

function EmployeesContainer () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)


    //perform axios call
    useEffect( () => {
        API.populate()
        .then(res => {

            console.log("res: ", res.data.results)
            setUsers( res.data.results )
            
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

        if(loading) {
            return <div>loading...</div>;
        }

        else if(!users.length) {
            return <div>Didnt get any users</div>;
        }

        else {
        return (

            <div>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={`user-${i}`}>
                            <th><img src={user.picture.large} alt="Image of a person"/></th>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.cell}</td>
                            <td>{user.email}</td>
                            <td>{user.dob.date.split("T")[0]}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            
        );
    }
}


export default EmployeesContainer;