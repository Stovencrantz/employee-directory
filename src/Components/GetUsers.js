import { getDefaultNormalizer } from "@testing-library/react";
import React, { Component } from "react";
import API from "../utils/API";

class EmployeesContainer extends Component {
    state = {
        users: [],
        loading: true
    };

    componentDidMount() {
        //perform axios call
            API.search()
            .then(res => {
                this.setState({ users: res.data.results, loading: false })
                console.log("res: ", res.data.results)
            })
            .catch(err => console.log(err))
    }
    


    render() {
        if(this.state.loading) {
            return <div>loading...</div>;
        }

        if(!this.state.users.length) {
            return <div>Didnt get any users</div>;
        }

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
                    {this.state.users.map((user, i) => (
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