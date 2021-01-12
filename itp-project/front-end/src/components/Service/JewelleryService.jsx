import axios from 'axios';

const JEWELLERY_API_BASE_URL = "http://localhost:8080/api/v2/jewellery";


class JewelleryService {

    getJewellery(){
        return axios.get(JEWELLERY_API_BASE_URL);
    }

    createJewellery(jewellery){
        return axios.post(JEWELLERY_API_BASE_URL, jewellery);
    }

    getJewelleryById(jewelleryId){
        return axios.get(JEWELLERY_API_BASE_URL + '/' + jewelleryId);
    }

    updateJewellery(jewellery, jewelleryId){
        return axios.put(JEWELLERY_API_BASE_URL + '/' + jewelleryId, jewellery);
    }

    deleteJewellery(jewelleryId){
        return axios.delete(JEWELLERY_API_BASE_URL + '/' + jewelleryId);
    }
}

export default new JewelleryService()