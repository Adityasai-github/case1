import axios from 'axios'
const FARMER_API_URL = "http://localhost:8081/farmer/allfarmers";
const AddFARMER_API_URL = "http://localhost:8081/farmer/addfarmers";
const DELETEFARMER_API_URL="http://localhost:8081/farmer/deletefarmer";
const GETFARMERBY_API_URL = "http://localhost:8081/farmer/farmerbyid"
const updateFARMER_API_URL = "http://localhost:8081/farmer/updatefarmer"

class FarmerService {
    getfarmers(){
        return axios.get(FARMER_API_URL);
    }
    addFarmers(farmers){
        return axios.post(AddFARMER_API_URL, farmers);
    }
    deleteFarmer(id){
        return axios.get(DELETEFARMER_API_URL+"/"+id);
    }
    getFarmerById(id){
        return axios.get(GETFARMERBY_API_URL+"/"+id);
    }
    updateFarmer(id){
        return axios.put(updateFARMER_API_URL+"/"+id);
    }


}
export default new FarmerService();