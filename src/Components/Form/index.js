import React, { useState } from 'react'

function Form() {
    const [searchPerson, setSearchPerson] = useState([]);

    // -----------------------------------------------------
    // Add functionality for the search bar to filter users eveytime a character is entered
    // -----------------------------------------------------
    function handleInputChange (event) {
        // event.preventDefault();

        // Getting the value of the input which triggerred the change
        console.log("Search person: ", event.target.value);
        setSearchPerson(event.target.value);
    }
    
    
    return (
        <div>
            <form className="form text-center pb-3">
                <input value={searchPerson}
                name = "person"
                onChange={handleInputChange}
                type="text"
                placeholder="Search here"
                />
            </form>
        </div>
    )
    
}

export default Form;