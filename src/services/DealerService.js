import axios from 'axios';

const DEALER_API_URL = "http://localhost:8083/trader/alldealers";
const AddDEALER_API_URL = "http://localhost:8083/trader/adddealers";
class DealerService{
getdealers(){
    return axios.get(DEALER_API_URL);
}
addDealers(dealer){
    return axios.post(AddDEALER_API_URL, dealer);
}
}
export default new DealerService();