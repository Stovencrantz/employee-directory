import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default {
    // search: function() {
    //     let userArr=[];
    //     axios.get("https://randomuser.me/api/?results=10")
    //     .then(response => {
    //         console.log("results: ", response.data.results);
    //         userArr.push(response)
            

    //     })
    //     return userArr;

    // }
    search: function() {
        return axios.get("https://randomuser.me/api/?results=10");

    }
}