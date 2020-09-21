import axios from "axios";

export default {

    populate: function() {
        return axios.get("https://randomuser.me/api/?results=300");

    }
}