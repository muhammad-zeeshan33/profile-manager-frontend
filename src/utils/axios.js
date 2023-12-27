import axios from "axios";
import { apiUrls } from "./apiUrls";
    

const instance = axios.create({
    headers: {
      "Content-Type": "application/json", 
    },
    baseURL: apiUrls.base,      
  });

instance.interceptors.request.use(
    config => {      
      const token = localStorage.getItem("token")    
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    error => {      
      if (error.response && error.response.status === 401) {            
        window.location.replace('/login')
     }
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    response => response,
    error => {      
      if (error.response) {
        const { status } = error.response;
        if (status === 401 || status === 403) {        
          localStorage.clear()
          window.location.replace('/login');
        }      
      }
      return Promise.reject(error);
    }
  );
  

  export default instance;