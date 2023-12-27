import axios from "./axios";

class HttpService {
  
    static async GET(url, params = {}) {
        try {
            const response = await axios.get(url, { params: params });
            return response.data;        
        } catch (error) {
            return error.response;
        }        
    }

    static async POST(url, data = {}) {
        try {        
            const response = await axios.post(url, data);        
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    static async PUT(url, data = {}) {
        try {        
            const response = await axios.put(url, data);        
            return response.data;
        } catch (error) {   
            return error.response;
        }
    }

    static async DELETE(url, data = {}) {
        try {        
            const response = await axios.delete(url, data);        
            return response.data;
        } catch (error) {
            return error.response;
        }
    }
}

export default HttpService;