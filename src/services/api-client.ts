import axios from "axios";

export default axios.create({
    baseURL:`http://www.omdbapi.com/?s=tt3896198&apikey=bfc24721`
})