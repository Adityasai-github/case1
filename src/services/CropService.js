import axios from 'axios';
const CROP_API_URL = "http://localhost:8082/crops/all";
const AddCROP_API_URL = "http://localhost:8082/crops/addcrops";
const DELETECROP_API_URL="http://localhost:8082/crops/deletecrop";
const GETCROPBY_API_URL = "http://localhost:8082/crops/cropbyid"
const updateCROP_API_URL = "http://localhost:8082/crops/updatecrop"
const buyCROP_API_URL = "http://localhost:8081/crops/buycrop"
class CropService {
    getcrops(){
        return axios.get(CROP_API_URL);
    }
    addCrops(crop){
        return axios.post(AddCROP_API_URL, crop);
    }
    deleteCrop(cropid){
        return axios.get(DELETECROP_API_URL+"/"+cropid);
    }
    getCropById(cropid){
        return axios.get(GETCROPBY_API_URL+"/"+cropid);
    }
    updateCrop(crop,cropid){
        return axios.put(updateCROP_API_URL+"/"+cropid,crop);
    }
    buyCrop(crop,cropid){
        return axios.put(buyCROP_API_URL+"/"+cropid,crop);
    }


}
export default new CropService();