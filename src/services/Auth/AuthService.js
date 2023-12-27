import { apiUrls } from "../../utils/apiUrls";
import HttpService from "../../utils/httpService";

const login = async (data) => {
    const response = await HttpService.POST(apiUrls.login, data);    
    return response;
}

const register = async (data) => {
    const response = await HttpService.POST(apiUrls.register, data);    
    return response;
}

const AuthService = {
    login,
    register
}

export default AuthService;
