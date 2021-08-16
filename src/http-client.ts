import axios from "axios";

export default axios.create({
    baseURL: "https://freestyle.getsandbox.com/dummy",
    headers: {
        "Content-type": "application/json"
    }
});