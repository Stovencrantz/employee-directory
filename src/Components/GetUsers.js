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
                {this.state.users.map((user, i) => (
                    <div key={`user-${i}`}>
                        <div>{user.name.title}</div>
                        <div>{user.name.first}</div>
                        <div>{user.name.last}</div>
                        <img src={user.picture.large} />
                    </div>
                ))}
            </div>
        );
    }
}

export default EmployeesContainer;