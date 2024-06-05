import axios from "axios";
import { baseURL } from "../../Action/baseUrl";

const GetMethod = async (url) => {

    let urlLink = baseURL + "/" + url;

    const config = {
        url: urlLink,
        method: 'GET',
    }

    try {

        const response = await axios.request(config);

        return {
            status: true,
            message: response.data.message || "",
            data: response.data,
        };

    } catch (error) {

        return {
            status: false,
            message: (error.response && error.data) || error.message,
            data: []
        };

    }

};

export default GetMethod;