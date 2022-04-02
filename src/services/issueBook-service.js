/*=======================================================
 Author: [Sourav Malik] (sr343164@dal.ca)
========================================================= */
import axios from "axios";
const baseUri = "http://10.0.3.238:5000/bookaholic/api/";

const HttpClient = {
    get: (resourceUri) => {
        return axios.get(`${baseUri}${resourceUri}`);
    },
    post: (resourceUri, payload) => {
        return axios.post(`${baseUri}${resourceUri}`, payload);
    },
    put: (resourceUri, payload) => {
        return axios.put(`${baseUri}${resourceUri}`, payload);
    },
    remove: (resourceUri) => {
        return axios.delete(`${baseUri}${resourceUri}`);
    },
};

export default HttpClient;
