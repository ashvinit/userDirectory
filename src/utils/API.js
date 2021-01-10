import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("https://dummyapi.io/data/api/user?limit=20", {headers: {"app-id": "5ffb2aa5317dbda3fbb446fa"}});
    }
}