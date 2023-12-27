import { apiUrls } from "../../utils/apiUrls";
import HttpService from "../../utils/httpService";

const getProfile = async () => {
    const response = await HttpService.GET(apiUrls.profile);    
    return response;
}

const updateProfile = async (data) => {
    const response = await HttpService.POST(apiUrls.profile, data);    
    return response;
}

const ProfileService = {
    getProfile,
    updateProfile
}

export default ProfileService;
