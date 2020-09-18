import React, {Component} from 'react'

class Form extends Component{
    state = {
        person: ""
    };

    handleInputChange = event => {
        // Getting the value of the input which triggerred the change
        const { person } = event.target;
        console.log("name value: ");
    }

    handleFormSubmit = event => {
        // preventing the default behavior of the form submit (Which is refresh page)
        event.preventDefault();
        this.setState({
            person: ""
        });
    }
    
    render() {
        return (
            <div>
                <form className="form text-center pb-3">
                    <input value={this.state.person}
                    name = "person"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search here"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;