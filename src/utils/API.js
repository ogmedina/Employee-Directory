import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20"

export default {
    getEmployeeList: function() {
        return axios.get(BASEURL);
    }
};

console.log(BASEURL);